import React, { useState } from 'react';
import axios from 'axios';

const Login = props => {

    const [userData, setUserData] = useState({username: "", password: ""});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState({message: "", isError: false});

    const changeHandler = (event) => {
        const { name , value } = event.target;
        setUserData({...userData, [name]: value });
    };

    const login = (event) => {
        event.preventDefault();
        setIsLoading(true);
        axios
        .post("http://localhost:5000/api/login", userData)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            props.history.push('/friendsList');
            setIsLoading(false);
        })
        .catch(err => {
           if (err.response) {
               console.log(err.response.data);
               if (err.response.status === 403) {
                   setErrorMessage({message: "Username and/or password incorrect", isError: true});
                }
           } else {
            setErrorMessage({message: err.message, isError: true});
           }
           setIsLoading(false);
        })
    }




    return (<div className="login">
        <form onSubmit={login}>
            <label>
                Username:
                <input name="username"
                type="text"
                placeholder="Enter username"
                onChange={changeHandler}
                value={userData.username} />
            </label>
            <label>
                Password:
                <input name="password"
                type="text"
                placeholder="Enter password"
                onChange={changeHandler}
                value={userData.password} />
            </label>
            {isLoading ? <div className="spinner-border"></div> : <button>login</button>}
        </form>
        {errorMessage.isError ? <div className="error-message">{errorMessage.message}</div> : <div></div>}
    </div>)
}

export default Login;