import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Service from './components/services/Service';
import Qualification from './components/qualification/Qualification';
import Work from './components/portfolio/Work.jsx';


function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Service />
        {/* <Qualification /> */}
        <Work />
      </main>
    </>
  );
}

export default App;
