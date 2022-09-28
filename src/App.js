import React, {useState} from 'react'
import Heading from './Components/Heading';
import Card from './Components/Card'; 
import Overview from './Components/Overview'; 

import './index.css';

function App() {
  const [dark, setDark] =useState(true);

  const handleChange =(e)=>{
    console.log('In handleChange', e.target.checked);
    setDark(!dark)
  }
  return (
    <div className="app text-white bg-veryDarkBlue p-6 min-h-screen">
      <Heading dark={dark} handleChange={handleChange} />
      <Card />
      <Overview />
    </div>
  );
}

export default App;
