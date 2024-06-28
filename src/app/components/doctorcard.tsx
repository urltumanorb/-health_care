import React from 'react';
import styles from './doctorCards.module.css';

const DoctorCards = () => {
  const doctors = [
    {
      image: "/images/doctor1.jpg", // 示例头像，请替换为实际路径
      name: "DR. GOLAP DEN",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look"
    },
    {
      image: "/images/doctor2.jpg", // 示例头像，请替换为实际路径
      name: "DR. GOLAP DEN",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look"
    }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>WHAT DOCTORS SAY..</h2>
      <div className={styles.cards}>
        {doctors.map((doctor, index) => (
          <div key={index} className={styles.card}>
            <img src={doctor.image} alt={doctor.name} className={styles.avatar} />
            <h3 className={styles.name}>{doctor.name}</h3>
            <p className={styles.description}>{doctor.description}</p>
            <div className={styles.quoteIcon}>“</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCards;
