import React from 'react'
import '../index.css';
import '../app.css'


const Heading = (props) => {
  const { dark, handleChange } = props
  return (
    <div className='flex flex-col justify-center align-center md:flex-row md:justify-between'>
      <div className='bg-veryDarkBlue flex flex-col justify-center align-center'>
        <h3 className='text-white font-bold '>
          Social Media Dashboard
        </h3>
        <span className='text-lightGrayishBlue/80  mb-4 text-xs md:text-xm'>Total Followers: 23,704</span>
        <hr className='md:hidden text-lightGrayishBlue ' />
      </div>
      <div className='flex justify-between py-3'>
        <p className=' text-lightGrayishBlue/80 text-sm font-bold md:mr-5'>Dark Mode</p>
        <label className="switch">
          <input type="checkbox" onChange={handleChange} checked={dark}/>
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  )
}

export default Heading