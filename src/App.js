import React, {useState} from 'react'
import Card from './Components/Card'; 
import Heading from './Components/Heading';

import './index.css';

function App() {
  const [dark, setDark] =useState(true);

  const handleChange =(e)=>{
    console.log('In handleChange', e.target.checked);
    setDark(!dark)
  }
  return (
    <div className="container text-white bg-veryDarkBlue p-6 min-h-screen">
      <Heading dark={dark} handleChange={handleChange} />
      <Card />
    </div>
  );
}

export default App;
