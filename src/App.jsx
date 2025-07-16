import { useState } from 'react'
import './App.css'
import TopText from './Components/TopBox/TopText'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  
  return (
   <div className='hide-scrollbar h-screen overflow-y-scroll'>
      <TopText/>  
      <Header/>
      <Outlet/>
      <Footer/>
   </div>
  )
}

export default App
