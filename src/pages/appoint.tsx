// src/pages/appoint.tsx
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './appoint.css';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    appointmentDate: new Date(),
  });
  const userId = useSelector((state) => state.auth.user?.id);
  const [appointmentDate, setAppointmentDate] = useState('');
  useEffect(() => {
    // 获取用户信息
    axios.get(`http://localhost:3000/api/user/${userId}`)
      .then(response => {
        const { phone_number, email, appointment_date } = response.data;
        setAppointmentDate(appointment_date);
        setFormData(formData => ({
          ...formData,
          phoneNumber: phone_number,
          email: email,
        }));
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date: any) => {
    setFormData({
      ...formData,
      appointmentDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/appointment', {
      userId,
      lastName: formData.lastName,
      firstName: formData.firstName,
      appointmentDate: formData.appointmentDate,
    })
    .then(response => {
      alert('Appointment successful');
      setFormData({
        lastName: '',
        firstName: '',
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        appointmentDate: new Date(),
      });
    })
    .catch(error => {
      console.error('Error submitting appointment:', error);
    });
  };

  return (
    <div className="appoint-page">
      <Header />
      {
        appointmentDate ? 
        <div className="appointment-inform-container">You have already appointed! </div>
        :
        <div className="appointment-form-container">
          <h2>Appointment Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                disabled
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled
                required
              />
            </div>
            <div className="form-group">
              <label>Appointment Date and Time</label>
              <DatePicker
                selected={formData.appointmentDate}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      }
      <Footer />
    </div>
  );
};

export default AppointmentForm;
