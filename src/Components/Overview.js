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

const Overview = (props) => {
  const {dark} = props
  return (
    <footer className='my-8 min-h-full'>
      <h3 className='font-bold text-xl mb-8'>Overview - Today </h3>
      <div className='overview-card flex flex-col flex-wrap justify-center contents-center md:flex-row'>
        {/* Map Above here */}
        {overview.map((view, i)=>(
          < div key={i} 
          className={dark? 'view-card flex flex-col justify-center content-center w-[100%] my-0 mx-auto bg-darkDesaturatedBlue p-6 mb-8 px-2 rounded hover:bg-[#63687e] cursor-pointer md:w-[40%] lg:w-[30%]':
            'view-card flex flex-col justify-center content-center w-[100%] my-0 mx-auto bg-[#ddd] p-6 mb-8 px-2 rounded hover:bg-[#63687e] cursor-pointer md:w-[40%] lg:w-[30%]'} >
            <div className='flex flex-row justify-between space-x-8'>
              <h3 className={dark ? 'text-[#aaa]' : 'text-darkDesaturatedBlue'  }>{view.demograph}</h3>
              {view.name === 'facebook' && <FacebookSvg />}
              {view.name === 'twitter' && <TwitterSvg />}
              {view.name === 'instagram' && <InstagramSvg />}
              {view.name === 'youtube' && <YoutubeSvg />}
            </div>
            <div className='flex flex-row justify-between space-x-8'>
              <h3 className='text-[3rem] flex flex-col justify-end items-end'>{view.statistic}</h3>
              <div className={view.today > 0 ? 'text-greenish flex flex-col justify-end' : 'text-reddish flex flex-col justify-end'}>{view.today>0? <ArrowUp />: <ArrowDown/>}{view.today}%</div>
            </div>
          </div >
        )) }
      </div>
    </footer>
  )
}

export default Overview