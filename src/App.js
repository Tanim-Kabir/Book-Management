import './App.css';
import React from 'react';
import Page1 from './components/Page-1';
import Page2 from './components/Page-2';
import Page3 from './components/Page-3';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const buttonClick = () => {
  document.getElementById("total").innerHTML = "100";
  const l1 = document.getElementById('demo');
  l1.classList.remove("btn-navbar");
}

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page1 />} />
      <Route path='/page1' element={<Page1 />} />
      <Route path='/page2' element={<Page2 />} />
      <Route path='/page3' element={<Page3 />} />
    </Routes>
  </BrowserRouter>
}

export default App;
