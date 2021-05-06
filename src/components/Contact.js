import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import './Contact.css';

const Contact = () => {
  return (
    <div className='dark-overlay'>
      <div className='contact'>
        <div className='title'>
          <h1>Contact Info</h1>
        </div>
        <div className='contact-info-container'>
          <div className='contact-info'>
            <div className='name-and-number'>
              <h1>Oren Halevy</h1>
              <h2>050-2178798</h2>
            </div>
            <div className='contact-links'>
              <div className='contact-link'>
                <FaGithub /> &nbsp;{' '}
                <a href='http://www.github.com/halevyoren'>Github</a>
              </div>
              <div className='contact-link'>
                <FaLinkedin color='#0077b5' /> &nbsp;{' '}
                <a href='http://www.linkedin.com/in/halevyoren'>Linkedin</a>
              </div>
              <div className='contact-link'>
                <IoIosMail color='#B23121' /> &nbsp;{' '}
                <a href='mailto:halevyoren@gmail.com'>Mail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
