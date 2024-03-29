import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeletePost from './DeletePost';
import LikePost from './LikePost';

const Post = ({post, userId}) => {
    const [isAuthor, setIsAuthor] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [newMessage, setNewMessage] = useState("")
   
    useEffect(() => {
     if (post.author === userId){
        setIsAuthor(true)
     } else {
        setIsAuthor(false)
     }
    }, [userId])

    const handleEdit = () => {
        if (newMessage) {
            axios.put("http://localhost:5000/post/" + post._id, {
                message: newMessage,
            })
        }
    }

    const dateFormater = (date) => {
        return new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
         });
    };
    console.log(post, userId);
    return (
        <div className='card'>
            <div className="card-header">
                <h3>{post.author}</h3>
                <p>Posté le {dateFormater(post.createdAt)}</p>
            </div>
            {isEdit ? (
                <div className="edit-container">
                    <textarea 
                    defaultValue={post.message}
                    onChange={(e) => setNewMessage(e.target.value)}
                    ></textarea>
                    <button onClick={() => {
                        setIsEdit(false)
                        handleEdit()
                    }}>Validé édition</button>
                </div>
            ): (
                <p>{newMessage ? newMessage : post.message}</p>
            )}
            <div className="icons-part">
            <LikePost post={post} userId={userId} />
            {isAuthor && (
                <div className="update-delete-icons">
                    <span id='update-btn' onClick={() => {
                        setIsEdit(!isEdit)
                        handleEdit();
                    }}>&#10000;</span>
                    <DeletePost postId={post._id} />
                </div>
            )}
            </div>
        </div>
    );
};

export default Post;