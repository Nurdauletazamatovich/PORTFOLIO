import { Pages } from "../pages"

import homeIcon from '../icons/home.svg'
import homeIconActive from '../icons/home active.svg'
import portfolioIcon from '../icons/portfolio.svg'
import portfolioIconActive from '../icons/portfolio active.svg'
import blogIcon from '../icons/threedots.svg'
import blogIconActive from '../icons/threedots active.svg'

import front from '../icons/front.svg'
import project from '../icons/project.svg'
import { Images } from "../images"


export const NavList = [
  {
    id: 1, 
    title: 'Home',
    route: '/',
    icon: homeIcon,
    activeIcon: homeIconActive
  },
  {
    id: 2,
    title: 'Portfolio',
    route: '/portfolio/',
    icon: portfolioIcon,
    activeIcon: portfolioIconActive
  },
  {
    id: 3, 
    title: 'Stacks',
    route: '/stacks/',
    icon: blogIcon,
    activeIcon: blogIconActive
  }
]

export const StacksList = [
  {
    id: 1, 
    title: 'HTML',
    percent: 80,
    direction: 'Frontend'
  },
  {
    id: 2, 
    title: 'CSS',
    percent: 75,
    direction: 'Frontend'
  },
  {
    id: 3, 
    title: 'JavaScript',
    percent: 85,
    direction: 'Frontend'
  },
  {
    id: 4, 
    title: 'React JS',
    percent: 40,
    direction: 'Frontend'
  },
  {
    id: 5, 
    title: 'React Native',
    percent: 20,
    direction: 'Mobile development'
  },
  {
    id: 6, 
    title: 'Python',
    percent: 40,
    direction: 'Backend'
  },
  {
    id: 7, 
    title: 'Python',
    percent: 40,
    direction: 'Django Rest Framework'
  },
]

export const PUBLIC_ROUTES = [
  {
    id:1,
    route: '/',
    page: <Pages.Home />,
  },
  {
    id:2,
    route: '/portfolio/',
    page: <Pages.Portfolio />,
  },
  {
    id:3, 
    route: '/stacks/',
    page: <Pages.Stacks />
  }
]

export const MySkillsList = [
  {
    id: 1, 
    title: 'Web Development',
    desc: '«Вы получите индивидуальный план для вашего пути и много поддержки».',
    icon: front
  },
  {
    id: 2, 
    title: 'Backend Development',
    desc: 'помощь во всех ваших делах и опять же поддержка',
    icon: project
  }
]


export const Projects = [
  {
    id: 1, 
    title: 'ничего',
    image: Images.TechnoFoods,
    image2: Images.TechnoFoods1 ,
    stacks: [
      'Design',
      'Frontend',
      'Backend'
    ],
    link: 'http://localhost:3000/portfolio/'
  }
]
