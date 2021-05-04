import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import LinkScroll from './LinkScroll';

import './Navbar.css';

const Navbar = () => {
  const [toggleButtonIsClicked, setToggleButtonIsClicked] = useState(false);
  const toggle = () => {
    setToggleButtonIsClicked((wasToggled) => !wasToggled);
  };
  return (
    <div className='navbar'>
      <div className='title-and-toggle'>
        <div className='navbar-title'>Oren Halevy</div>
        <FaBars
          className='toggle-button'
          size='2rem'
          display='none'
          onClick={toggle}
        />
      </div>
      <div className={`links ${toggleButtonIsClicked ? 'active' : ''}`}>
        <ul>
          <li onClick={() => scroll.scrollToTop()}>Top</li>

          <LinkScroll to='about'>
            <li>About Me</li>
          </LinkScroll>

          <LinkScroll to='projects'>
            <li>Projects</li>
          </LinkScroll>

          <li onClick={() => scroll.scrollToBottom()}>contact info</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
