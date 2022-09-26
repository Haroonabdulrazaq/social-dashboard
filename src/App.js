import React, {useState} from 'react'
import './index.css';
import Heading from './Components/Heading';

function App() {
  const [dark, setDark] =useState(true);

  const handleChange =(e)=>{
    console.log('In handleChange', e.target.checked);
    setDark(!dark)
  }
  return (
    <div className="container text-white bg-veryDarkBlue p-6 w-100 min-h-screen">
      <Heading dark={dark} handleChange={handleChange} />
    </div>
  );
}

export default App;
