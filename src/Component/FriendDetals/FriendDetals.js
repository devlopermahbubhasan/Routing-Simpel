import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetals = () => {
    let { friendid } = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${friendid}`;
    const [friend , setFriend] = useState({});
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[]);
    return (
        <div>
            <h3>This my Friend {friendid}</h3>
            <p>My Friend Name : {friend.name}</p>
            <p>Phone : {friend.phone}</p>
            <p>Website :{friend.website}</p>
        </div>
    );
};

export default FriendDetals;