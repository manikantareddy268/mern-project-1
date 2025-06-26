import { useState } from "react";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { serverEndpoint } from "./config";
import { useDispatch } from "react-redux";
import { SET_USER } from "./redux/user/actions";

function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(null);

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let isValid = true;
        let newErrors = {};

        if (formData.username.length === 0) {
            isValid = false;
            newErrors.username = "Username is mandatory";
        }

        if (formData.password.length === 0) {
            isValid = false;
            newErrors.password = "Password is mandatory";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handelSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            // Data to be sent to the server

            const body = {
                username: formData.username,
                password: formData.password
            };
            const config = {
                // Tells axios to include cookie in the request + some other auth headers
                withCredentials: true
            };
            try {
                const response = await axios.post(`${serverEndpoint}/auth/login`, body, config);
                dispatch({
                    type: SET_USER,
                    payload: response.data.user
                });
            } catch (error) {
                console.log(error);
                setErrors({ message: "Something went wrong, please try again" });
            }
        }
    };

    const handleGoogleSuccess = async (authResponse) => {
        try {
            const response = await axios.post(`${serverEndpoint}/auth/google-auth`, {
                idToken: authResponse.credential
            }, {
                withCredentials: true
            });
            dispatch({
                type: SET_USER,
                payload: response.data.user
            });
        } catch (error) {
            console.log(error);
            setErrors({ message: 'Error processing google auth, please try again' });
        }
    };

    const handleGoogleError = async (error) => {
        console.log(error);
        setErrors({ message: 'Error in google authorization flow, please try again' });
    }

    return(
        <div class="container-fluid text-center">
            {message && (message)}
            {errors.message && (errors.message)}
            <h1>Login Page</h1>
            <form onSubmit={handelSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handelChange} />
                    {errors.username && (errors.username)}
                </div>
                <div>
                    <label>password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handelChange} />
                    {errors.password && (errors.password)}
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>

            <h2>OR</h2>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
            </GoogleOAuthProvider>
        </div>

    );
}

export  { Login };