import React from 'react';

const Friend = props => {

    const {friend} = props;

    return(<div className="friend">
        <div>{friend.name}</div>
        <div>{friend.age}</div>
        <div>{friend.email}</div>
    </div>)
}

export default Friend;