import React from 'react';
import "./App.css";
import { Identity } from "@semaphore-protocol/identity";
import { Group } from "@semaphore-protocol/group";
import { generateProof, verifyProof } from "@semaphore-protocol/proof";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import abi from "./zkabi.json";
// import { ethers } from "ethers";
import { Web3Storage } from 'web3.storage'
// import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Formpage from './components/Formpage';
import Viewpage from './components/Viewpage';

function App() {

  return (
  <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/Home" element={<Home/>}/>
          <Route path="About" element={<About />} />
          <Route path="Formpage" element={<Formpage />} />
          <Route path="Viewpage" element={<Viewpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
    
  );
  
}

export default App;


// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route}
// 	from 'react-router-dom';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Home from './components/Home';
// import Formpage from './components/Formpage';
// import Viewpage from './components/Viewpage';

// function App() {
// return (
  <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="Home" element={<Home/>}/>
          <Route path="About" element={<About />} />
          <Route path="Formpage" element={<Formpage />} />
          <Route path="Viewpage" element={<Viewpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
// );
// }
// export default App;
