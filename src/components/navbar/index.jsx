import React from 'react'
import c from './navbar.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { NavList } from '../../utils'

const Navbar = () => {
  const path = useLocation().pathname

  return (
    <div className={c.navbar__container}>
      <div className={c.navbar}>
        <div className={c.logo}>
          <h3>
            <Link to={'/'}>
              Kyzdarbekov Nurdaulet
            </Link>
          </h3>
        </div>
        <ul className={c.list}>
          {
            NavList.map(item => (
              <li key={item.id}>
                <Link to={item.route} className={path === item.route ? c.active : null}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar