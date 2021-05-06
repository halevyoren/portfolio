import React from 'react';

import SocialNetworkImage from '../images/social-network.png';
import SnakeGameImage from '../images/snake-game.jpeg';
import TicTacToeGameImage from '../images/tic-tac-toe-game.png';
import CheckersGameImage from '../images/checkers-game.png';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      gameURL: 'https://developer-social-website.herokuapp.com/',
      githubClientURL:
        'https://github.com/halevyoren/full-stack-social-network-client-MERN',
      githubServerURL:
        'https://github.com/halevyoren/full-stack-social-network-server-MERN',
      image: SocialNetworkImage
    },
    {
      gameURL: 'https://oren-snake-game.herokuapp.com/',
      githubURL: 'https://github.com/halevyoren/Snake-game---react',
      image: SnakeGameImage
    },
    {
      gameURL: 'https://oren-dynamic-tic-tac-toe.herokuapp.com/',
      githubURL: 'https://github.com/halevyoren/dynamic-tic-tac-toe',
      image: TicTacToeGameImage
    },
    {
      gameURL: 'https://oren-checkers.herokuapp.com/',
      githubURL: 'https://github.com/halevyoren/checkers',
      image: CheckersGameImage
    }
  ];
  const projectsDescription = [
    {
      title: 'Social network',
      description:
        'A full stack social network for developers in which you can create a profile and then post, like, and comment'
    },
    {
      title: 'Snake',
      description:
        'A pc game of snake using the arrows on the keyboard (yes, it is the game we all loved playing on own nokia block phones).'
    },
    {
      title: 'Tic Tac Toe',
      description:
        'A dynamically build game in which you can choose the board size, its even mobile compatible.'
    },
    {
      title: 'Checkers',
      description:
        'A dynamiclly build game of checkers in which you can go back a move until you reach the game start and even redo the move if you havent plaed yet'
    }
  ];

  const description = (index) => (
    <div className='description'>
      <h1>{projectsDescription[index].title}</h1>
      <h3>{projectsDescription[index].description}</h3>
    </div>
  );

  const image = (index) => (
    <div className='image-and-links'>
      <img src={projects[index].image} alt='' />
      <div className='links'>
        <a href={projects[index].gameURL}>
          {index === 0 ? 'Enter site' : 'Play game'}
        </a>
        <div>
          {index === 0 ? (
            <div className='social-network'>
              <a href={projects[index].githubClientURL}>Github Client</a>
              <a href={projects[index].githubServerURL}>Github Server</a>
            </div>
          ) : (
            <a href={projects[index].githubURL}>Github</a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className='projects'>
      <div className='dark-overlay'>
        <div className='title'>
          <h1>Personal projects</h1>
        </div>
        <div className='project-list'>
          {projects.map((project, index) => (
            <div key={index}>
              {index % 2 === 0 ? (
                <div className='project'>
                  {description(index)}
                  {image(index)}
                </div>
              ) : (
                <div className='project'>
                  {image(index)}
                  {description(index)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
