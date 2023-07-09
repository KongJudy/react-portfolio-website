import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Intro from './features/intro/Intro';
import About from './features/about/About';
import Portfolio from './features/portfolio/Portfolio';
import Contact from './features/contact/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
