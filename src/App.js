import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Set from './components/MedicalSet'
import Home from "./pages/Home"
import SetDetails from './pages/SetDetails';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/set-details" element={<SetDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )




}

export default App;
