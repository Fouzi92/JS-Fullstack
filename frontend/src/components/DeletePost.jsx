import axios from 'axios';
import React from 'react';

const DeletePost = ( {postId}) => {
    const hendleDelete = () => {
        axios.delete("http://localhost:5000/post/" + postId)
    }
    return (
     <span id="delete-btn" onClick={() => hendleDelete()}> &#10010;</span>
    );
};

export default DeletePost;