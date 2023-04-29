import './App.css';
import React from 'react';
import Page1 from './components/Page-1';
import Page2 from './components/Page-2';
import Page3 from './components/Page-3';

const buttonClick = () => {
  document.getElementById("total").innerHTML = "100";
  const l1 = document.getElementById('demo');
  l1.classList.remove("btn-navbar");
}

function App() {
  return (
    <>
    <Page1 />
    <Page2 />
    <Page3 />
    </>
  );
}

export default App;
