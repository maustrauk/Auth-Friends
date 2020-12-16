import React, {useState} from 'react';
import {axiosWithAuth} from './../utils/axiosWithAuth';

const initFriend ={
    id: 0,
    name: "",
    age: 0,
    email: ""
};

const NewFriendForm = props => {


    const [newFriend, setNewFriend] = useState(initFriend);

    const changeHandler = (event) => {
        const { name , value } = event.target;
        setNewFriend({...newFriend, [name]: value });
    };

    const addNewFriend = (event) => {
        event.preventDefault();
        setNewFriend({...newFriend, id:Date.now()});
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => {
            console.log(res);
            props.history.push('/friendsList');
        })
        .catch(err => {
            console.log(err);
        })
        
    }

    return (<div className="add-friend container-fluid w-50 mt-5 ">
        <h1 className="display-1 mt-3 text-center"> Add New Friend</h1>
        <form >
            <div className="form-group">
                <label htmlFor="nameInput">Name:</label>
                <input name="name"
                id="nameInput"
                className="form-control"
                type="text"
                placeholder="Enter Name"
                onChange={changeHandler}
                value={newFriend.name}
                aria-describedby="nameError" />
                <small id="nameError" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="ageInput">Age:</label>
                <input name="age"
                id="ageInput"
                className="form-control"
                type="text"
                placeholder="Enter Age"
                onChange={changeHandler}
                value={newFriend.age}
                aria-describedby="ageError" />
                <small id="ageError" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="emailInput">Email:</label>
                <input name="email"
                id="emailInput"
                className="form-control"
                type="text"
                placeholder="Enter Email"
                onChange={changeHandler}
                value={newFriend.email}
                aria-describedby="emailError" />
                <small id="emailError" className="form-text text-muted"></small>
            </div>
            <button type="button" className="btn btn-primary" onClick={addNewFriend}>Submit</button>
        </form>
    </div>)
}

export default NewFriendForm;