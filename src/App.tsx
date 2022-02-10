import React from 'react';
// import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
// import { Header } from './components/Header/Header';
// import { Navbar } from './components/Navbar/Navbar';
// import { Pharos, BAM, CAPO } from './components/Navbar/Navdetails'
import { AWSAccountsTable } from './components/Table/Table';
import { accounts } from './components/Table/objects'
import { SelectorDropDown } from './components/Table/SelectorDropDown';

function App() {
  /* <Navbar linkList={[Pharos,BAM,CAPO]}/> */
  return (
    <div className="App">
      <SelectorDropDown useValue={(value:string)=>{console.log(value)}} for="Client" selectedValue='true' allowedValues={['true','false','unspecified']}/>
      <AWSAccountsTable accounts={accounts}/>
    </div>
  );
}

export default App;
