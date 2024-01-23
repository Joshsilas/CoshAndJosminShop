import React, { useState, useEffect } from 'react';
import UserContext from '../UserContext/index.jsx';

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({}),
                });
                const users = await response.json();
                setUsers(users);
            } catch (err) {
                console.log('Error fetching user data:', err);
            }
        }
        fetchUsers();
    }, [])

    return (
        <UserContext.Provider value={users}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;