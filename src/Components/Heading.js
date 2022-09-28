import React from 'react'
import '../index.css';
import '../app.css'


const Heading = (props) => {
  const { dark, handleChange } = props
  return (
    <header className='flex flex-col justify-center align-center md:pb-8 md:px-3 md:mb-6 md:shadow-lg md:rounded-b-lg  md:flex-row md:justify-between'>
      <div className=' flex flex-col justify-center align-center'>
        <h3 className='font-bold'>
          Social Media Dashboard
        </h3>
        <span className={dark ? 'text-lightGrayishBlue/80  mb-4 text-xs md:text-xm' : 'text-black mb-4 text-xs md:text-xm' }>Total Followers: 23,704</span>
        <hr className='md:hidden text-lightGrayishBlue' />
      </div>
      <div className='flex justify-between py-3'>
        <p className={dark ? 'text-lightGrayishBlue/80 text-sm md:mr-5' : 'text-black text-sm md:mr-5'}>{dark? 'Dark Mode': 'Light Mode'}</p>
        <label className="switch">
          <input type="checkbox" onChange={handleChange} checked={dark}/>
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  )
}

export default Heading