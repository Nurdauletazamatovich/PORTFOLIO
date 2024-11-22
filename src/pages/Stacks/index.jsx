import React from 'react'
import c from './stacks.module.scss'
import { StacksList } from '../../utils'

const Stacks = () => {
  const directions = ['Frontend', 'Backend', 'Mobile development']
  const [ value, setValue ] = React.useState('Frontend')

  const stacks = StacksList.filter(item => item.direction === value)
  return (
    <div className={c.stacks_container}>
      <div className={c.stacks}>
        <div className={c.directions}>
          {
            directions.map((item, i) => (
              <button key={i} className={value === item ? c.active : ''} onClick={() => setValue(item)}>{item}</button>
            ))
          }
        </div>
        <div className={c.skills}>
          {
            stacks.map(item => (
              <div className={c.stack} key={item.id}>
                <h3>
                  {item.title}
                </h3>
                <div className={c.percent}>
                  <div style={{width: `${item.percent}%`}}>{item.percent}%</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Stacks