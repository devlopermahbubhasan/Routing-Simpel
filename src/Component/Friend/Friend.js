import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';
const Friend = (props) => {
    const {name , email, id} = props.friend;
    return (
        <div className='s-d'>
            
            <h1>Name : {name}</h1>
            <p>Email : {email}</p>
            <p><Link to={`/friend/${id}`}><button>Click Me</button></Link></p>
        </div>
    );
};

export default Friend;