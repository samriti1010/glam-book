import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import lotus from '../../assets/lotus.png'

const Signup = () => {
    return (

        <div className='w-full h-auto mt-5'>
            <div className='flex flex-wrap justify-center relative'>
                <img src={lotus} alt="" className='md:w-[55vw] md:h-[95vh] opacity-20' />
                
                <div className='w-full h-auto flex flex-wrap justify-center items-center absolute top-[7px]'>
                    <div className='md:w-[35vw] text-red-900 md:p-7 shadow-lg' >
                        <p className='text-center text-6xl font-bold font-serif'>Sign Up</p>

                        <div className='space-y-3 mt-5'>

                            <div className='flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between md:p-[5px]'>
                                <input className='outline-none font-semibold' type="email" placeholder='Email' />
                                <i class="fa-solid fa-envelope"></i>
                            </div>

                            <div className='flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between md:p-[5px]'>
                                <input className='outline-none font-semibold' type="password" placeholder='Create Password' />
                                <i class="fa-solid fa-lock"></i>
                            </div>

                            <div className='flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between md:p-[5px]'>
                                <input className='outline-none font-semibold' type="password" placeholder='Confirm Password' />
                                <i class="fa-solid fa-lock"></i>
                            </div>

                            <button className='w-full rounded-[4px] py-1 bg-red-900 hover:bg-red-800 text-white cursor-pointer' type='submit'>Sign Up</button>
                            <br />
                            <p className='text-center'>Already have an account? <Link className='text-gray-700 font-semibold underline'>Login</Link></p>
                            <br />
                            <div className='flex justify-center items-center space-x-3'>
                                <p className='md:w-[40vh] w-[25vw] h-[1px] bg-gray-400'></p>
                                <p>Or</p>
                                <p className='md:w-[40vh] w-[25vw] h-[1px] bg-gray-400'></p>
                            </div>
                            <br />

                            <div className='flex border border-gray-400 rounded-[4px] items-center justify-between p-[5px] bg-red-900 text-white outline-none hover:bg-red-800'>
                                <i class="fa-brands fa-google cursor-pointer"></i>
                                <button className='text-center w-full cursor-pointer' type="submit">Sign in with Google</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup

