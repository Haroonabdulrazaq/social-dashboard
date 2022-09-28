import React from 'react'
import {data} from './data'
import { ReactComponent as FacebookSvg } from '../images/icon-facebook.svg'
import { ReactComponent as TwitterSvg } from '../images/icon-twitter.svg'
import { ReactComponent as InstagramSvg } from '../images/icon-instagram.svg'
import { ReactComponent as YoutubeSvg } from '../images/icon-youtube.svg'
import { ReactComponent as ArrowUp } from '../images/icon-up.svg'
import { ReactComponent as ArrowDown } from '../images/icon-down.svg'

import '../index.css'
import '../app.css'

const Card = () => {

  return (
    <div className='flex flex-wrap justify-center align-center gap-3 md:space-x-8'> 
      {data.map((card)=>(
        <div key={card.name} className={card.name === 'Facebook' ? 'card-facebook' : card.name === 'Twitter' ? 'card-facebook' : card.name === 'Instagram' ? 'card-instagram': 'card-youtube'}> 
        {/* Abovce is a shitty code and I dislike myself for doing that, if there is a better way dynamically style it, kindly hit me up at Haroonabdulrazaq@gmail.com*/}
          <div className='flex flex-col justify-center align-center bg-darkDesaturatedBlue shadow-lg p-16 cursor-pointer text-center md:p-20 hover:bg-[#63687e] transition-all duration-100 ease-in-out'>
            <div className='flex justify-center align-center space-x-3'>
              {card.name === 'Facebook' && <FacebookSvg />}
              {card.name === 'Twitter'&& <TwitterSvg />}
              {card.name === 'Instagram' && <InstagramSvg />}
              {card.name === 'Youtube'&& <YoutubeSvg />}
              <div>@{card.handle}</div>
            </div>
            <div>
              <p className='card-followers font-bold'>{card.followers}</p>
              <p className='tracking-widest text-sm text-lightGrayishBlue' >{card.name !== 'Youtube' ? 'FOLLOWERS' : 'SUBSCRIBERS'}</p>
            </div>
            <div className={card.today > 0 ? 'flex justify-center align-center space-x-3 text-emerald-400' : 'flex justify-center align-center space-x-3 text-rose-600'}>
              <span className='flex justify-center align-center'>{card.today > 0 ? <ArrowUp /> : <ArrowDown />}</span>
              <span className={card.today > 0 ? 'text-greenish' : 'text-reddish'}>{card.today}</span>
              <span className={card.today > 0 ? 'text-greenish': 'text-reddish'} >Today</span>
              </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
// style = {{ borderImage: 'blue' }}
// borderTop: `4px solid ${card.color}`
// border-image: linear-gradient(270deg,#c4032a,#c4032a) 20;