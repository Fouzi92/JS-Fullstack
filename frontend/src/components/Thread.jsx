import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Thread = ({userId}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/post/").then((res) => 
        setPosts(res.data))
    },[])
    
    return (
        <div className='thread-container'>
       {posts.map((post)  => (
        <li>{post.message}</li>
       ))}
        </div>
    );
};

export default Thread;