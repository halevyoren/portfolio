import React from 'react';
import { FaDownload } from 'react-icons/fa';
import cv from '../resume/Resume.docx';

import './GreetingPage.css';

const GreetingPage = (props) => {
  return (
    <div className={`greeting-page `} id={props.id}>
      <div className='dark-overlay'>
        <div className='title'>
          <h1>Oren Halevy</h1>
          <h3>Full stack developer</h3>
        </div>
        <div className='resume'>
          <button className='gradient-button'>
            <a href={cv} download='Oren Halevy - Resume.docx'>
              <FaDownload /> &nbsp; My Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreetingPage;
