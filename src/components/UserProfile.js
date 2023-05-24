import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users/1'); // Replace with the appropriate API endpoint for fetching user profile
      setUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email };
    try {
      await axios.put('http://localhost:5000/api/users/1', updatedUser); // Replace with the appropriate API endpoint for updating user profile
      setUser(updatedUser);
      console.log('User profile updated successfully!');
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
