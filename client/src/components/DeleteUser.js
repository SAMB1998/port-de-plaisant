import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
    const [userId, setUserId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:5000/api/auth/${userId}`);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Delete User</h2>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button type="submit">Delete</button>
        </form>
    );
};

export default DeleteUser;
