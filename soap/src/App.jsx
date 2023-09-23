import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route,BrowserRouter }  from 'react-router-dom'

import { Header,Footer } from './components'
import { Home } from './components/Pages'
function App() {

  return (
    <>
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
                
      <Footer/>
    </>
  )
}

export default App
