import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from './../utils/axiosWithAuth';

import Friend from './Friend';

const FriendsList = props => {

    const [friends, getFriends] = useState([]);

    useEffect(() => {
        getData();
    },[]);


    const getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            getFriends(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    };

    const clickHandler = () => {
        props.history.push('/newFriend');
    }

    const deleteFriend = (id) => {
        axiosWithAuth()
        .delete(`friends/${id}`)
        .then(res => {
            getFriends(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }

    const updateFriend = () => {

    }

    return (<div className="friends-list container-fluid text-center">
        <h1 className="display-1 mt-3"> Friends List</h1>
        <button type="button" className="btn btn-primary" onClick={clickHandler}>Add Friend</button>
        <div className="container-fluid row m-3 ">
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} deleteFriend={deleteFriend} updateFriend={updateFriend}/>
            ))}
        </div>
    </div>)
}

export default FriendsList;