import e from 'cors';
import React, { useContext } from 'react';
import { UserDataContext } from './../contexts/UserDataContext';

const Login = () => {

    const [userData, setUserData, submitHandler] = useContext(UserDataContext);

    const changeHandler = (event) => {
        const { name , value } = event.target;
        setUserData({...userData, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        submitHandler();
    }

    return (<div className="login">
        <form onSubmit={onSubmit}>
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
            <button>Login</button>
        </form>
    </div>)
}

export default Login;