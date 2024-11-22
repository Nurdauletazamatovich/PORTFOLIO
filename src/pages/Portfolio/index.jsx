import React from 'react'
import { Projects } from '../../utils'
import { Components } from '../../components'
import c from './portfolio.module.scss'

const Portfolio = () => {
  return (
    <div className={c.portfolio_container}>
      <div className={c.portfolio}>
        {
          Projects.map(item => (
            <Components.Project item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio