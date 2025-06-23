import { useState } from "react";
import axios from "axios";
import { password } from "pg/lib/defaults";

function Login({updateUserDetails}) {
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
                const response = await axios.post('http://localhost:5001/auth/login', body, config);

                updateUserDetails(response.data.user);
            } catch (error) {
                console.log(error);
                setErrors({ message: "Something went wrong, please try again"});
            }
        }
    };

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
        </div>
    );
}

export  { Login };