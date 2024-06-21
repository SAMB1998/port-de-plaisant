// src/components/UpdateCatway.js
import React, { useState } from 'react';
import { updateCatway } from '../services/api';

const UpdateCatway = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCatway(id, { name });
      alert('Catway updated successfully');
    } catch (error) {
      console.error('Error updating catway:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <button type="submit">Update Catway</button>
    </form>
  );
};

export default UpdateCatway;
