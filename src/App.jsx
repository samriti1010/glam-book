import { useState } from 'react'
import './App.css'
import TopText from './Components/TopBox/TopText'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  const [searchKeyword, setSearchKeyword] = useState('')
  
  const [addCartvalue, setAddCartValue] = useState(0);

  const incrementCart = () => setAddCartValue(prev => prev + 1);
  const decrementCart = () => setAddCartValue(prev => (prev > 0 ? prev - 1 : 0));

  
  return (
   <div className='hide-scrollbar h-screen overflow-y-scroll'>
      <TopText/>  
      <Header onSearch={setSearchKeyword} addCartvalue={addCartvalue}/>
      <div className='mt-20'>
        <Outlet 
          context={[searchKeyword]}
          incrementCart={incrementCart}
          decrementCart={decrementCart}
        />
      </div>
      <Footer/>
   </div>
  )
}

export default App
