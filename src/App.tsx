import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Pharos, BAM, CAPO } from './components/Navdetails'


function App() {
  return (
    <div className="App">
      <Navbar linkList={[Pharos,BAM,CAPO]}/>
    </div>
  );
}

export default App;
