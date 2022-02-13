import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friend , setFriend] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h1>friend : {friend.length}</h1>
            {
                friend.map(friends => <Friend friend={friends}></Friend>)
            }
        </div>
    );
};

export default Home;