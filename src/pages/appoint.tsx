import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './appoint.css';
import Footer from '@/app/components/footer';
import Header from '@/app/components/header';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    appointmentDate: new Date(),
  });

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
    // 在这里处理提交逻辑
    console.log('Form Data Submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      lastName: '',
      firstName: '',
      phoneNumber: '',
      email: '',
      appointmentDate: new Date(),
    });
  };

  return (
    <div className="appoint-page">
        <Header />
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
            <button type="button" onClick={handleReset}>
                Reset
            </button>
            </div>
        </form>
        </div>
        <Footer />
    </div>
  );
};

export default AppointmentForm;
