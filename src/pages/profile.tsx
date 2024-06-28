import React, { useEffect, useState } from 'react';
import './profile.css';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import axios from '../utils/axios';


const ProfilePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);
  const [isEditing, setIsEditing] = useState({
    username: false,
    phoneNumber: false,
    email: false,
  });

  const [userData, setUserData] = useState({
    username: 'johndoe',
    lastName: 'Doe',
    firstName: 'John',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    appointment: '2024-06-15 14:30',
  });

  const handleEditClick = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleInputBlur = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
  };

  const handleCancelAppointment = () => {
    setUserData({ ...userData, appointment: '' });
  };

  return (
    <div className="profile-area">
        <Header />
        <div className="profile-page">
            <h2>Profile Information</h2>
            <ul>
                {users.map((user:any) => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
            <div className="profile-item">
                <span>Username:</span>
                {isEditing.username ? (
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('username')}
                />
                ) : (
                <span onClick={() => handleEditClick('username')}>{userData.username} <span className="edit-text">edit</span></span>
                )}
            </div>
            <div className="profile-item">
                <span>Last Name:</span>
                <span>{userData.lastName}</span>
            </div>
            <div className="profile-item">
                <span>First Name:</span>
                <span>{userData.firstName}</span>
            </div>
            <div className="profile-item">
                <span>Phone Number:</span>
                {isEditing.phoneNumber ? (
                <input
                    type="text"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('phoneNumber')}
                />
                ) : (
                <span onClick={() => handleEditClick('phoneNumber')}>{userData.phoneNumber} <span className="edit-text">edit</span></span>
                )}
            </div>
            <div className="profile-item">
                <span>Email:</span>
                {isEditing.email ? (
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur('email')}
                />
                ) : (
                <span onClick={() => handleEditClick('email')}>{userData.email} <span className="edit-text">edit</span></span>
                )}
            </div>
            <div className="profile-item">
                <span>Appointment:</span>
                <span>{userData.appointment} <span className="cancel-text" onClick={handleCancelAppointment}>cancel</span></span>
            </div>
            </div>
        <Footer />
    </div>
  );
};

export default ProfilePage;
