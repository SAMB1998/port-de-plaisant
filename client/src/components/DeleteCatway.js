// src/components/DeleteCatway.js
import React, { useState } from 'react';
import { deleteCatway } from '../services/api';

const DeleteCatway = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteCatway(id);
      alert('Catway deleted successfully');
    } catch (error) {
      console.error('Error deleting catway:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <button type="submit">Delete Catway</button>
    </form>
  );
};

export default DeleteCatway;
