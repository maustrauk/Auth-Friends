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

    return (<div className="friends-list">
        {friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
        ))}
    </div>)
}

export default FriendsList;