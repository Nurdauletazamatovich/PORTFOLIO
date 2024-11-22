import React from 'react'
import c from './mySkills.module.scss'
import SkillsCard from './skillsCard'
import { MySkillsList } from '../../utils'

const MySkills = () => {
  return (
    <div className={c.skills__container}>
      <div className={c.skills}>
        <div className={c.left}>
          <h3>Что я делаю?</h3>
          <p>
          Создаю и поддерживаю веб-сайты, фронтенд-разработчик — вперёд! Мой девиз: Красота и функциональность наравне и в приоритете.
          </p>
        </div>
        <div className={c.right}>
          {
            MySkillsList.map(item => <SkillsCard item={item} />)
          }
        </div>
      </div>
    </div>
  )
}

export default MySkills