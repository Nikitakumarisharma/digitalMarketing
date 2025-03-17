import React from 'react';

const OffersSection = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  };

  const leftSectionStyle = {
    backgroundColor: '#5E8C3B',
    color: 'black',
    padding: '40px',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    lineHeight: '1.5',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: '2px solid black',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '18px',
    borderRadius: '20px',
    textTransform: 'lowercase',
  };

  const rightSectionStyle = {
    width: '60%',
    height: '100%',
  };

  return (
    <div style={containerStyle}>
      <div style={leftSectionStyle}>
        <h2 style={headingStyle}>Our Offers.</h2>
        <p style={textStyle}>
          Our dedicated team of skilled gardeners is passionate about transforming outdoor spaces without breaking the bank.
        </p>
        <button style={buttonStyle}>contact us</button>
      </div>
      <div style={rightSectionStyle}>
        <img
          src="/assets/img/case-studies/02.jpg"
          alt="Offers Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default OffersSection;
