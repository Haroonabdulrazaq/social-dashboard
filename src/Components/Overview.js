import React from 'react'
import { ReactComponent as FacebookSvg } from '../images/icon-facebook.svg'
import { ReactComponent as TwitterSvg } from '../images/icon-twitter.svg'
import { ReactComponent as InstagramSvg } from '../images/icon-instagram.svg'
import { ReactComponent as YoutubeSvg } from '../images/icon-youtube.svg'
import { ReactComponent as ArrowUp } from '../images/icon-up.svg'
import { ReactComponent as ArrowDown } from '../images/icon-down.svg'
import { overview } from './data'

import '../index.css'
import '../app.css'

const Overview = () => {
  return (
    <div className='my-8 min-h-full'>
      <h3 className='font-bold text-xl mb-8'>Overview - Today </h3>
      <div className='overview-card flex flex-col flex-wrap justify-center contents-center md:flex-row'>
        {/* Map Above here */}
        {overview.map((view, i)=>(
          < div key={i} className='view-card flex flex-col justify-center content-center w-[100%] my-0 mx-auto bg-darkDesaturatedBlue p-6 mb-8 px-2 rounded hover:bg-[#63687e] cursor-pointer md:w-[40%] lg:w-[30%]' >
            <div className='flex flex-row justify-between space-x-8'>
              <h3 className='text-darkGrayishBlue'>{view.demograph}</h3>
              <FacebookSvg />
            </div>
            <div className='flex flex-row justify-between content-center space-x-8'>
              <h3 className='text-[3rem] '>{view.statistic}</h3>
              <div className='flex flex-col justify-between '><ArrowUp />{view.today}%</div>
            </div>
          </div >
        )) }
      </div>
    </div>
  )
}

export default Overview