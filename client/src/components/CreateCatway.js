// src/components/CreateCatway.js
import React, { useState } from 'react';
import { createCatway } from '../services/api';

const CreateCatway = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCatway({ name });
      alert('Catway created successfully');
    } catch (error) {
      console.error('Error creating catway:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <button type="submit">Create Catway</button>
    </form>
  );
};

export default CreateCatway;
