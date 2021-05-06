import React from 'react';
import { Link } from 'react-scroll';

const LinkScroll = (props) => {
  return (
    <Link
      className={props.className}
      activeClass='active'
      to={props.to}
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={window.innerWidth < 800 ? -235 : -70} //different offset for when navbar changes
      duration={600}
      onClick={props.closeToggle}
    >
      {props.children}
    </Link>
  );
};

export default LinkScroll;
