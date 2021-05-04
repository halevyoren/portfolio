import { Fragment } from 'react';

import Navbar from './components/Navbar';
import GreetingPage from './components/GreetingPage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <GreetingPage id='greeting-page' />
      <About id='about' />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
