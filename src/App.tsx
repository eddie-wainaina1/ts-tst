import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Pharos, BAM, CAPO } from './components/Navdetails'


function App() {
  return (
    <div className="App">
      <div>
        <header>
          <h1>Eddie's Training environment</h1>
          <p>
            This is the zone that Eddie will use to train React...
          </p>
        </header>
      </div>
      <Navbar linkList={[Pharos,BAM,CAPO]}/>
    </div>
  );
}

export default App;
