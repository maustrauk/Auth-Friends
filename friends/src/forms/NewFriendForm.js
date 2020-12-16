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
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (<div className="new-friend-form">
        <form onSubmit={addNewFriend}>
            <label>
                Enter Friend name:
                <input name="name"
                type="text"
                placeholder="Friends name"
                onChange={changeHandler}
                value={newFriend.name} />
            </label>
            <label>
                Enter Friend age:
                <input name="age"
                type="text"
                placeholder="Friends age"
                onChange={changeHandler}
                value={newFriend.age} />
            </label>
            <label>
                Enter Friend email:
                <input name="email"
                type="text"
                placeholder="Friends email"
                onChange={changeHandler}
                value={newFriend.email} />
            </label>
            <button>Submit</button>
        </form>
    </div>);
}

export default NewFriendForm;