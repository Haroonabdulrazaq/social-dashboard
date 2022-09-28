import React, {useState} from 'react'
import Heading from './Components/Heading';
import Card from './Components/Card'; 
import Overview from './Components/Overview'; 

import './index.css';

function App() {
  const [dark, setDark] =useState(true);

  const handleChange =(e)=>{
    setDark(!dark)
  }
  return (
    <div className={dark ? "dark text-white p-6 min-h-screen" : "text-white light p-6 min-h-screen"}>
      <Heading dark={dark} handleChange={handleChange} />
      <Card dark={dark} />
      <Overview dark={dark} />
    </div>
  );
}

export default App;
