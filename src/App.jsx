import { useState } from 'react'
import React from 'react';
import KCard from './assets/components/k_card';
import './App.css';
import './assets/components/Kcard.css'
import NavBar from './assets/components/navbar';
import DramaList from './assets/components/dramaList';
import dramasItems from './assets/components/dramaItems';





function App() {
  return (
    <>
    <div className='navbar'>
     <NavBar>Dramas</NavBar>
     <NavBar>Thriller</NavBar>
     <NavBar>Lovers</NavBar>
     <NavBar>Horror</NavBar>
    </div>
    <div className='container' >
      <DramaList dramasItem ={dramasItems} />
    </div>
      </>
  );
}

export default App;
//ok 