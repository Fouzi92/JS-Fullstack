import React from 'react';

const LikePost = ({post, userId}) => {
    return (
        <div className='like-icon'>
        <p>{post.likers ? post.likers.length : 0}</p>
         <span id='dislike-btn'>&#9829;</span>
        </div>
    );
};

export default LikePost;