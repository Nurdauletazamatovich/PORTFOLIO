import React from 'react'
import c from './banner.module.scss'
import bannerIcon from '../../icons/memoji/image.webp'

import instagram from '../../icons/social/instagram.svg'
import telegram from '../../icons/social/telegram.svg'
import linkedin from '../../icons/social/Linkedin.svg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className={c.banner__container}>
      <div className={c.banner}>
        <h1>Привет, я Нурдаулет, Junior Frontend Developer. У меня отличные навыки коммуникации, и я хорошо работаю в команде.</h1>
        <div className={c.biography}>
          <div className={c.icon}>
            <div className={c.image}>
              <img  
                src={bannerIcon}
                alt="✌️"
              />
            </div>
          </div>
          <div className={c.info}>
            <h3>Biography</h3>
            <p>
             В настоящее время <span> студент второго курса</span> в <span>Международный колледж IT и бизнеса имени Салымбекова</span>.Помимо моих технических знаний, я также развивал <span>свои умения soft skills</span>,что помогает мне эффективно работать в командной среде и <span>хорошо общаться.</span> сщ всеми
            </p>
          </div>
          <div className={c.socials}>
            <h3>
              Lets connect
            </h3>
            <div className={c.icons}>
              <div>
                <Link to={'https://www.instagram.com/jorobek228/я'}>
                  <img 
                    src={instagram}
                    alt="instagram"
                  />
                </Link>
              </div>
              <div>
                <Link to={'https://www.instagram.com/jorobek228/я'}>
                  <img 
                    src={telegram}
                    alt="Telegram"
                  />
                </Link>
              </div>
              <div>
                <Link to={'https://www.instagram.com/jorobek228/я'}>
                  <img 
                    src={linkedin}
                    alt="linkedin"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner