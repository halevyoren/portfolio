import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import LinkScroll from './LinkScroll';

import './Navbar.css';

const Navbar = () => {
  const [toggleButtonIsClicked, setToggleButtonIsClicked] = useState(false);
  const [pagePosition, setPagePosition] = useState(0);
  const toggle = () => {
    setToggleButtonIsClicked((wasToggled) => !wasToggled);
  };
  const [afterAboutPosition, setAfterAboutPosition] = useState(0);

  const listenScrollEvent = (e) => {
    console.log('scroll: ' + window.scrollY);
    console.log(
      'pagePosition + afterAboutPosition: ' + pagePosition + afterAboutPosition
    );
    // console.log('pagePosition: ' + pagePosition);
    // console.log('afterAboutPosition: ' + afterAboutPosition);
    setPagePosition(window.scrollY);

    // console.log('window: ' + window.innerWidth);
  };
  useEffect(() => {
    const width = window.innerWidth;

    if (window.innerWidth < 800) {
      setAfterAboutPosition(116);
    } else if (800 < width && width < 1200) {
      setAfterAboutPosition(660);
    } else {
      setAfterAboutPosition(0);
    }
  }, [pagePosition]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  });
  const closeToggle = () => setToggleButtonIsClicked(false);

  // console.log();

  return (
    <div className='navbar'>
      <div className='title-and-toggle'>
        <div
          className='navbar-title'
          onClick={() => {
            scroll.scrollToTop();
            setToggleButtonIsClicked(false);
          }}
        >
          {' '}
          Oren Halevy
        </div>
        <FaBars
          className='toggle-button'
          size='2rem'
          display='none'
          onClick={toggle}
        />
      </div>
      <div className={`links ${toggleButtonIsClicked ? 'active' : ''}`}>
        <ul>
          <li
            onClick={() => {
              scroll.scrollToTop();
              closeToggle();
            }}
            className={pagePosition < 540 ? 'current-page' : ''}
          >
            Top
          </li>

          <LinkScroll
            to='about'
            className={
              pagePosition >= 540 && pagePosition - afterAboutPosition < 2808
                ? 'current-page'
                : ''
            }
            closeToggle={closeToggle}
          >
            <li>About Me</li>
          </LinkScroll>

          <LinkScroll
            to='projects'
            className={
              pagePosition - afterAboutPosition >= 2808 ? 'current-page' : ''
            }
            closeToggle={closeToggle}
          >
            <li>Projects</li>
          </LinkScroll>

          <li
            onClick={() => {
              scroll.scrollToBottom();
              closeToggle();
            }}
          >
            contact info
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
