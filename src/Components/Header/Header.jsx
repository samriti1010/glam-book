import React, { useState } from 'react'
import lotus from '../../assets/lotus.png'
import { NavLink, Link } from 'react-router-dom'

function Header() {

    const [isToggledMenu, setIsToggledMenu]=useState(false);

    const toggleHandlerMenu=()=>{
        setIsToggledMenu(true)
    }



  return (
    <div className=' flex flex-wrap justify-between items-center p-3'>
        <div className='space-x-5 text-xl'>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
        <div className='justify-between'>
            <ul className='md:flex flex-wrap hidden space-x-5 items-center font-semibold'>
                <NavLink to='/' ><li>Home</li></NavLink>
                <NavLink to='/service'><li>Services</li></NavLink>
                <img src={lotus} alt="img" className='w-[45px] h-[35px]'/>
                <NavLink to='/about'><li>About Us</li></NavLink>
                <NavLink to='contact'><li>Contact Us</li></NavLink>
            </ul>
            
        </div>
        <div className='space-x-5 text-xl flex items-center'>
            {/* <i class="fa-solid fa-suitcase"></i> */}
            <i class="fa-solid fa-cart-plus"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            <div className='md:hidden text-center'>
                <i 
                    onClick={toggleHandlerMenu}
                    class="fa-solid fa-bars"></i>
            </div>
        </div>


       { 
            {toggleHandlerMenu} &&  
            <div className='space-y-3 hidden'>
                <ul className='items-center font-semibold'>
                    <NavLink to='/' ><li>Home</li></NavLink>
                    <NavLink to='/service'><li>Services</li></NavLink>
                    <NavLink to='/about'><li>About Us</li></NavLink>
                    <NavLink to='contact'><li>Contact Us</li></NavLink>
                </ul>
                    
            </div>
         }

        
      
    </div>
  )
}

export default Header
