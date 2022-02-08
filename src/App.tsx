import React from 'react';
// import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Pharos, BAM, CAPO } from './components/Navbar/Navdetails'


function App() {
  return (
    <div className="App">
      <Navbar linkList={[Pharos,BAM,CAPO]}/>
    </div>
  );
}

export default App;
