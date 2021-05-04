import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  const [toggleButtonIsClicked, setToggleButtonIsClicked] = useState(false);
  const toggle = () => {
    setToggleButtonIsClicked((wasToggled) => !wasToggled);
  };
  return (
    <div className='navbar'>
      <div className='title-and-toggle'>
        <div className='title'>Oren Halevy</div>
        <FaBars
          className='toggle-button'
          size='2rem'
          display='none'
          onClick={toggle}
        />
      </div>
      <div className={`links ${toggleButtonIsClicked ? 'active' : ''}`}>
        <ul>
          <li>Top</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>contact info</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
