import React, { useState, useEffect } from 'react';
import UserContext from '../UserContext/index.jsx';

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users');
                const userData = await response.json();
                const updatedUsers = Array.isArray(userData) ? userData : [userData];

                setUsers(updatedUsers);
            } catch (err) {
                console.error('Error fetching user data:', err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={users}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;