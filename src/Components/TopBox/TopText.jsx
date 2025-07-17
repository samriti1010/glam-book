import React, { useEffect, useState } from 'react'

function TopText() {

  const messages = [
    'ONLY THIS MONTH 20% DISCOUNT ON ALL SERVICE',
    'BOOK NOW AND GET A FREE CONSULTATION',
    'FOLLOW US ON INSTAGRAM FOR DAILY TIPS',
    'EXPERIENCE RELAXATION LIKE NEVER BEFORE'
  ]

  const bgColors = [
    'bg-red-950',
    'bg-red-900',
    'bg-red-800',
    'bg-red-700'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % messages.length
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`w-full flex flex-wrap ${bgColors[currentIndex]} transition-all duration-300 items-center text-center justify-center space-x-2 py-1 text-white fixed z-20`}>
      <i className='fa-solid fa-leaf'></i>
      <p className='text-[12px]'>{messages[currentIndex]}</p>
      <i className='fa-solid fa-leaf'></i>
    </div>
  )
}

export default TopText


