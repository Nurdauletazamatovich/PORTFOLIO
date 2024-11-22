import React from 'react'
import c from './nav.module.scss'
import { NavList } from '../../utils'
import { useLocation, useNavigate } from 'react-router-dom'

const BottomNav = () => {
  const path = useLocation().pathname
  const navigate = useNavigate()

  return (
    <div className={c.nav}>
      {
        NavList.map(item => (
          <div 
            className={path === item.route ? c.active : null}
            key={item.id}
            onClick={() => navigate(item.route)}
          >
            <img 
              src={path === item.route ? item.activeIcon : item.icon}
              alt={item.title}
            />
            <p className={path === item.route ? c.active : null}>{item.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default BottomNav