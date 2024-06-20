import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUser = ({ match }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/auth/${match.params.id}`);
                setUsername(response.data.username);
                setPassword(response.data.password);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [match.params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/auth/${match.params.id}`, {
                username,
                password,
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update User</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateUser;
