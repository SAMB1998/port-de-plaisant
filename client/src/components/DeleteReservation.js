// src/components/DeleteReservation.js
import React, { useState } from 'react';
import { deleteReservation } from '../services/api';

const DeleteReservation = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await deleteReservation(id);
      alert('Reservation deleted successfully');
    } catch (error) {
      console.error('Error deleting reservation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
      <button type="submit">Delete Reservation</button>
    </form>
  );
};

export default DeleteReservation;
