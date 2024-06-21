// src/components/CreateReservation.js
import React, { useState } from 'react';
import { createReservation } from '../services/api';

const CreateReservation = () => {
  const [clientName, setClientName] = useState('');
  const [boatName, setBoatName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReservation({ clientName, boatName, checkIn, checkOut });
      alert('Reservation created successfully');
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} required />
      <input type="text" placeholder="Boat Name" value={boatName} onChange={(e) => setBoatName(e.target.value)} required />
      <input type="datetime-local" placeholder="Check In" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
      <input type="datetime-local" placeholder="Check Out" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
      <button type="submit">Create Reservation</button>
    </form>
  );
};

export default CreateReservation;
