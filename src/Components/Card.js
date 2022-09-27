import React from 'react'
import data from './data'
import { ReactComponent as FacebookSvg } from '../images/icon-facebook.svg'
import { ReactComponent as TwitterSvg } from '../images/icon-twitter.svg'
import { ReactComponent as InstagramSvg } from '../images/icon-instagram.svg'
import { ReactComponent as YoutubeSvg } from '../images/icon-youtube.svg'

import '../index.css'
import '../app.css'

const Card = () => {

  return (
    <div className='flex flex-col min-h-screen md:flex-row h-auto space-y-8'> 
      {data.map((card)=>(
        <div className={card.name === 'Facebook' ? 'card-facebook' : card.name === 'Twitter' ? 'card-facebook' : card.name === 'Instagram' ? 'card-instagram': 'card-youtube'}> 
        {/* Abovce is a shitty code and I dislike myself for doing that, if there is a better way kindly hit me up*/}
          <div key={card.name}  className='flex flex-col justify-center align-center bg-veryDarkBlue text-center p-4 md:flex-col'>
            <div>
              {card.name === 'Facebook' && <FacebookSvg />}
             {card.name === 'Twitter'&& <TwitterSvg />}
              {card.name === 'Instagram' && <InstagramSvg />}
             {card.name === 'Youtube'&& <YoutubeSvg />}
              <div>@{card.handle}</div>
            </div>
            <div>
              <p className='card-followers font-bold'>{card.followers}</p>
              <p className='tracking-widest text-xs text-darkDesaturatedBlue' >{card.name !== 'Youtube' ? 'FOLLOWERS' : 'SUBSCRIBERS'}</p>
            </div>
            <div>today {card.today}</div>
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