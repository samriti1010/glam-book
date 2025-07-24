import React from 'react'
import lotus from '../../assets/lotus.png'

function Footer() {
  return (
    <div className='w-full h-auto bg-red-100'>
        <div className='flex justify-center relative md:p-5 p-10 sam '>
            <img className='md:w-[32vw] md:h-[60vh] w-[35vw] h-[43] opacity-20 'src={lotus} />

            <div className='md:w-1/3 h-auto absolute text-center space-y-2 md:top-25 top-15'>
                <div className='flex flex-wrap justify-center'>
                 <img src={lotus} className='w-[40px] h-[40px]'/>
                </div>
                <p style={{fontFamily: "Great Vibes"}} className='text-2xl text-red-950 italic font-serif font-semibold'>Glam Books</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Iure cum quod accusantium. Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Ipsam, soluta.
                </p>
                <div className='space-x-4'>
                    <i class="fa-brands fa-facebook cursor-pointer"></i>
                    <i class="fa-brands fa-square-x-twitter cursor-pointer"></i>
                    <i class="fa-brands fa-square-instagram cursor-pointer"></i>
                    <i class="fa-brands fa-telegram cursor-pointer"></i>               
                </div>
            </div>
            
        </div>

        <p className='text-gray-600 text-center md:p-8 p-10'>@Copyright 2025, Glam Books</p>

      
    </div>
  )
}

export default Footer



