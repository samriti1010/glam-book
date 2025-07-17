import { useState } from 'react'
import './App.css'
import TopText from './Components/TopBox/TopText'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'



function App() {

  const [searchKeyword, setSearchKeyword] = useState('')

  
  return (
   <div className='hide-scrollbar h-screen overflow-y-scroll'>
      <TopText/>  
      <Header onSearch={setSearchKeyword}/>
      <div className='mt-20'>
        <Outlet context={[searchKeyword]}/>
      </div>
      <Footer/>
   </div>
  )
}

export default App
