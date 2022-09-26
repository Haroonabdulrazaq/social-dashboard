import React from 'react'
import data from './data'

import '../index.css'
import '../app.css'

const Card = () => {
  return (
    <div className='flex flex-col min-h-screen md:flex-row h-auto space-y-8'> 
      {data.map((card)=>(
        <div key={card.name} style={{borderImage: card.color}} className='flex flex-col justify-center align-center text-center p-4 rounded-lg border-t-4 md:flex-col'>
          <div> <img src={card.icon} alt={card.name} className='display-inline'/>@{card.handle}</div>
          <div>
            {card.followers}
            <p className='tracking-widest' >{card.name!=='Youtube'? 'Followers': 'Subscribers'}</p>
          </div>
          <div >today {card.today}</div>
        </div>
      ))}
    </div>
  )
}

export default Card