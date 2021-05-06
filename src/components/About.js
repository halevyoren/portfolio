import React from 'react';

// import universityImage from '../images/university.png';
import universityLogo from '../images/university-logo.png';
import './About.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Java',
  'Python',
  'C++',
  'ReactJS',
  'NodeJS'
];

const About = () => {
  return (
    <div className='about'>
      <div className='dark-overlay'>
        <div className='title'>
          <h1>About Me</h1>
        </div>
        <div className='education-title'>
          <h1>Education and awards</h1>
        </div>
        <div className='education'>
          <div className='card university'>
            <h1>University</h1>
            <h2>Ben Gurion University</h2>
            <h3>Bachelor's degree in Computer Science</h3>
            {/* <img src={universityImage} alt='university' /> */}
            <img src={universityLogo} alt='university' />
          </div>
          <div className='card school'>
            <h1>High School</h1>
            <h2>Rabin</h2>
            <h3>
              <ul>
                <li>10 units Computer Science</li>
                <li>5 units English</li>
                <li>5 units Mathematics</li>
                <li>5 units Physics</li>
              </ul>
            </h3>
          </div>
          <div className='awards'></div>
          <div className='card award'>
            <h1>Awards</h1>
            <h2>First Place</h2>
            <h3>"First Step To Noble Prize in Physics"</h3>
          </div>
        </div>
        <div className='card skills'>
          <div className='skills-title'>
            <h2>Skills and Technologies</h2>
            <div className='skills-list'>
              <ul>
                {skills.map((skill, index) => (
                  <div className='skills-container' key={index}>
                    <li>
                      <div className='skill'>{skill}</div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
