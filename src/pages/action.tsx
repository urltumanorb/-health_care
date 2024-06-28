import React from 'react';
import './action.css';  // 引入自定义样式
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

const Action = () => {
  const cases = [
    {
      id: 1,
      title: 'Cases 01',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look',
      imageUrl: './images/cases1.png'
    },
    {
      id: 2,
      title: 'Cases 02',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look',
      imageUrl: './images/cases2.png'
    },
    {
      id: 3,
      title: 'Cases 03',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look',
      imageUrl: './images/cases3.png'
    }
  ];

  return (
    <div className="about-page">
        <Header />
        <div className="cases-container">
            <h2 className="title">TAKE ACTION</h2>
            <p>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
            <div className="cases-grid">
                {cases.map((caseItem) => (
                <div className="case-card" key={caseItem.id}>
                    <img src={caseItem.imageUrl} alt={caseItem.title} className="case-image" />
                    <h3 className="case-title">{caseItem.title}</h3>
                    <p className="case-description">{caseItem.description}</p>
                    <img className="virus-icon" src="./images/corona_icon.png" />
                </div>
                ))}
            </div>
            </div>
        <Footer />
    </div>
    
  );
};

export default Action;
