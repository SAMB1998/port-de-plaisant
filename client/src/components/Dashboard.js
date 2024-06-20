import React from 'react';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <CreateUser />
            <UpdateUser />
            <DeleteUser />
            {/* Ajoutez les autres formulaires ici */}
        </div>
    );
};

export default Dashboard;
