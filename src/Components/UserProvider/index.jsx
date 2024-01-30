import React, { useState, useEffect } from 'react';
import UserContext from '../UserContext/index.jsx';

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data when the component mounts (if needed)
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    // Update the context or state with the fetched user data
                    setUsers(userData);
                } else {
                    console.error('Error fetching user data:', response.statusText);
                }
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