import React from 'react';
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import ImproveSkills from "./components/ImproveSkills"
import QuotrSections from './components/QuoteSections';
function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuotrSections/>
      </div>
    </div>
  );
}

export default App;
