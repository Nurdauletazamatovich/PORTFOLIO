import React from 'react'
import './App.scss'
import { Components } from './components'
import MainRoutes from './routes'


const App = () => {
  return (
    <div>
      <header>
        <Components.Navbar />
      </header>
      
      <main>
        <MainRoutes />
      </main>

      <footer>
        <Components.BottomNav />
      </footer>
    </div>
  )
}

export default App