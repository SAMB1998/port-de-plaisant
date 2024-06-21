// src/components/Dashboard.js
import React from 'react';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import CreateCatway from './CreateCatway';
import UpdateCatway from './UpdateCatway';
import DeleteCatway from './DeleteCatway';
import CatwayDetails from './CatwayDetails';
import CreateReservation from './CreateReservation';
import DeleteReservation from './DeleteReservation';
import ReservationDetails from './ReservationDetails';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CreateUser />
      <UpdateUser />
      <DeleteUser />
      <CreateCatway />
      <UpdateCatway />
      <DeleteCatway />
      <CatwayDetails />
      <CreateReservation />
      <DeleteReservation />
      <ReservationDetails />
      {/* Ajoutez les autres formulaires ici */}
    </div>
  );
};

export default Dashboard;
