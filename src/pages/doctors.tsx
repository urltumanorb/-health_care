import React from 'react';
import './doctors.css';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

const doctors = [
  {
    name: "Dr. Golap Den",
    image: "./images/doctor1.jpg",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: "Dr. John Doe",
    image: "./images/doctor2.jpg",
    description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
  },
  {
    name: "Dr. Jane Smith",
    image: "./images/doctor3.jpg",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  },
  {
    name: "Dr. Jane Smith",
    image: "./images/doctor4.jpg",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  },
  {
    name: "Dr. Jane Smith",
    image: "./images/doctor5.jpg",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  },
  {
    name: "Dr. Jane Smith",
    image: "./images/doctor6.jpg",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  },
  {
    name: "Dr. Jane Smith",
    image: "./images/doctor7.jpg",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  },
  {
    name: "Dr. Jane Smith",
    image: "./images/doctor8.jpg",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  },
  {
    name: "Dr. Jane Smith",
    image: "./images/doctor9.jpg",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  },
  {
    name: "Dr. Jane Smith",
    image: "./images/doctor10.jpg",
    description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
  }
];

const DoctorList = () => {
  return (
    <div>
      <Header />
      <div className="doctor-list-container">
        <h2 className="doctor-list-title">Our Doctors</h2>
        <div className="doctor-cards">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className='doctor-info'>
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-description">{doctor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default DoctorList;
