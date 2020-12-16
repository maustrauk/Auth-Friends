import React from 'react';

const Friend = props => {

    const {friend} = props;

    return(<div className="card mr-3 mb-3">
        <div className="card-body">
            <h5 className="card-title">{friend.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Age: {friend.age}</h6>
            <p className="card-text">E-mail: {friend.email}</p>
            <button type="button" className="btn btn-success mr-3">Update</button>
            <button type="button" className="btn btn-danger">Delete</button>
        </div>
    </div>)
}

export default Friend;