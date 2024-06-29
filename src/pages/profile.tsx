// src/pages/profile.tsx
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './profile.css';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import axios from '../utils/axios';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const userId = useSelector((state) => state.auth.user?.id);
  const [userData, setUserData] = useState({
    username: '',
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    appointmentDate: new Date(),
  });

  useEffect(() => {
    // 获取用户信息
    axios.get(`http://localhost:3000/api/user/${userId}`)
      .then(response => {
        const { username, last_name, first_name, phone_number, email, appointment_date } = response.data;
        setUserData({
          username: username,
          lastName: last_name,
          firstName: first_name,
          phoneNumber: phone_number,
          email: email,
          appointmentDate: appointment_date ? new Date(appointment_date) : "",
        });
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleDateChange = (date: any) => {
    setUserData({
      ...userData,
      appointmentDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/user/${userId}`, userData)
      .then(response => {
        alert('Profile updated successfully');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="profile-area">
      <Header />
      <div className="profile-page">
        <h2>Profile Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="profile-item">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="profile-item">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              disabled
              readOnly
            />
          </div>
          <div className="profile-item">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              disabled
              readOnly
            />
          </div>
          <div className="profile-item">
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="profile-item">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="profile-item">
          <label>Appointment Date and Time</label>
            {
              userData.appointmentDate ? 
              <DatePicker
              selected={userData.appointmentDate}
              onChange={handleDateChange}
              showTimeSelect
              dateFormat="Pp"
              required
            />: ''
            }
              
            
            
          </div>
          <div className="form-buttons">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
