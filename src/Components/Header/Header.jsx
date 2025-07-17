import React, { useState } from 'react'
import lotus from '../../assets/lotus.png'
import { NavLink } from 'react-router-dom'

function Header({onSearch}) {

    // toggle Menu
    const [isToggledMenu, setIsToggledMenu] = useState(false);
    const toggleHandlerMenu = () => {
        setIsToggledMenu(!isToggledMenu)
    }

    // Search Button

    const [searchKeyword, setSearchKeyword] = useState('')
    const [showSearchInput, setShowSearchInput] = useState(false)

    const showSearchInputHandler = () => {
        setShowSearchInput(!showSearchInput)
    }

    const searchHandler=()=>{
        if(searchKeyword.trim()){
            onSearch(searchKeyword)
            setShowSearchInput(false)
        }
    }


    return (
        <div className='w-full flex flex-wrap justify-between items-center p-3 shadow-md fixed z-15 top-6 bg-white'>
            <div className='space-x-5 text-xl'>
                <i class="fa-brands fa-facebook-f cursor-pointer"></i>
                <i class="fa-brands fa-instagram cursor-pointer"></i>
            </div>
            <div className='justify-between'>
                <ul className='md:flex flex-wrap hidden space-x-5 items-center font-semibold '>
                    <NavLink to='/' ><li>Home</li></NavLink>
                    <NavLink to='/service'><li>Services</li></NavLink>
                    <img src={lotus} alt="img" className='w-[45px] h-[35px]' />
                    <NavLink to='/about'><li>About Us</li></NavLink>
                    <NavLink to='contact'><li>Contact Us</li></NavLink>
                </ul>

            </div>
            <div className='space-x-5 text-xl flex items-center'>

                <NavLink to='/signup'>
                    <button className='text-red-950 font-semibold cursor-pointer hover:text-red-900'>Login</button>
                </NavLink>
                <i class="fa-solid fa-cart-plus cursor-pointer"></i>

                {/* search */}
                <i
                    onClick={showSearchInputHandler}
                    class="fa-solid fa-magnifying-glass cursor-pointer">
                </i>

                {
                    showSearchInput &&
                    (
                        <>
                            <input
                                type="text"
                                className='md:w-[180px] rounded-[2px] border border-gray-400 outline-none shadow-gray-400 shadow-lg'
                                value={searchKeyword}
                                onChange={(e) => setSearchKeyword(e.target.value)}
                                onKeyDown={(e)=>{
                                    if(e.key==='Enter'){
                                        searchHandler();
                                    }
                                }}
                                
                            />
                        </>
                    )
                }


                <div className='md:hidden text-center'>
                    <i
                        onClick={toggleHandlerMenu}
                        class="fa-solid fa-bars cursor-pointer"></i>
                </div>
            </div>


            {
                isToggledMenu &&
                <div className='flex justify-center'>
                    <ul className='items-center font-semibold text-center'>
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
