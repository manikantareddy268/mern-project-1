import { useState } from "react";

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

    const handelSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            if (formData.username === 'admin' && formData.password === 'admin') {
                updateUserDetails({
                    name: 'John Cena',
                    email: 'john@cena.com'
                });
                setMessage('Valid Credentials');
            } else {
                setMessage('Invalid Credentials');
            }
        }
    };

    return(
        <div class="container-fluid text-center">
            {message && (message)}
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