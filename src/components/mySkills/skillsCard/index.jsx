import React from 'react'
import c from './card.module.scss'

const SkillsCard = ({item}) => {
  return (
    <div className={c.card}>
      <div className={c.icon}>
        <div>
          <img 
            src={item.icon} 
            alt={item.title}
          />
        </div>
      </div>
      <div className={c.info}>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    </div>
  )
}

export default SkillsCard