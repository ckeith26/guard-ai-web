import React from 'react';
import rrImage from '../img/rr.jpeg';
import ck1Image from '../img/ck1.jpeg';
import vcImage from '../img/vc.jpeg';

function Contact(props) {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    gap: '1rem'
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minWidth: 0,
    flex: 1,
    padding: '1rem',
    boxSizing: 'border-box',
  };

  const imgStyle = {
    width: 120,
    height: 120,
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '1rem',
    border: '2px solid #ccc'
  };

  return (
    <div id="contact-container">
      <style>
        {`
          @media (min-width: 942px) {
            .contact-flex-wrap {
              flex-direction: row !important;
            }
          }
          @media (max-width: 941.98px) {
            .contact-flex-wrap {
              flex-direction: column !important;
            }
          }
        `}
      </style>
      <h1>Contact Us</h1>
      <div
        className="contact-flex-wrap"
        style={containerStyle}
      >
        <div className="contact-card" style={cardStyle}>
          <img
            src={ck1Image}
            alt="Cameron Keith"
            style={imgStyle}
          />
          <h2>Cameron Keith</h2>
          <p style={{ textAlign: 'center' }}>
            <a href="https://scholar.google.com/citations?user=3e0e" target="_blank" rel="noopener noreferrer">Google Scholar</a><br/>
            <a href="https://github.com/ckeith26" target="_blank" rel="noopener noreferrer">Github</a><br/>
            <a href="https://www.linkedin.com/in/cameron-keith-656b27253/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
            Email: <a href="mailto:cameron.s.keith.26@dartmouth.edu">cameron.s.keith.26@dartmouth.edu</a>
          </p>
        </div>

        <div className="contact-card" style={cardStyle}>
          <img
            src={rrImage}
            alt="Ryan Rocha"
            style={imgStyle}
          />
          <h2>Ryan Rocha</h2>
          <p style={{ textAlign: 'center' }}>
            <a href="https://www.linkedin.com/in/ryanalvesrocha/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
            Email: <a href="mailto:ryan.alves.rocha@dartmouth.edu">ryan.alves.rocha@dartmouth.edu</a>
          </p>
        </div>

        <div className="contact-card" style={cardStyle}>
          <img
            src={vcImage}
            alt="Vikram Chetnani"
            style={imgStyle}
          />
          <h2>Vikram Chetnani</h2>
          <p style={{ textAlign: 'center' }}>
            <a href="https://www.linkedin.com/in/vikram-chetnani/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br/>
            Email: <a href="mailto:vikram.chetnani@dartmouth.edu">vikram.chetnani@dartmouth.edu</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
