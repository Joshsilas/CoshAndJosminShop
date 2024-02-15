import React, { useContext } from 'react';
import UserContext from '../UserContext';
import UserProvider from "../UserProvider/index.jsx";

const UserDisplay = () => {
    const users = useContext(UserContext);

    return (
        <UserProvider>
        <div>
            <h2>Users:</h2>
            {users ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <p>ID: {user.id}</p>
                            <p>Email: {user.email}</p>
                            <p>Username: {user.username}</p>
                            <p>Password: {user.password}</p>
                            <p>First Name: {user.name.firstname}</p>
                            <p>Last Name: {user.name.lastname}</p>
                            <p>City: {user.address.city}</p>
                            <p>Street: {user.address.street}</p>
                            <p>Number: {user.address.number}</p>
                            <p>Zip Code: {user.address.zipcode}</p>
                            <p>Latitude: {user.address.geolocation.lat}</p>
                            <p>Longitude: {user.address.geolocation.long}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
        </div>
            </UserProvider>
    );
};

export default UserDisplay;