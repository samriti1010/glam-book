import React from 'react'
import lotus from '../../assets/lotus.png'
import Makeup from'../../assets/Makeup.png'
import HairStyle from'../../assets/HairStyle.png'
import NailPolice from'../../assets/NailPolice.png'

function Service() {
  return (
    <div className='w-full'>

      {/* service */}
      <div className='w-full h-auto'>
        <div className='flex flex-wrap justify-center relative'>
          <img src={lotus} alt="" className='md:w-[32vw] md:h-[60vh] opacity-25' />
          <p style={{ fontFamily: "Great Vibes" }} className='text-center text-red-900 text-9xl absolute top-32 font-bold'>Services</p>
        </div>
      </div>

      {/* middle image */}
      <div>
        <img className='w-full md:h-[90vh] shadow-2xl'
        src="https://images.pexels.com/photos/205923/pexels-photo-205923.jpeg" alt="" />
      </div>

      {/* Services and prices */}

      <div className='w-full flex justify-center my-20 text-center'>
        <div className='w-[80vw]'>
          <p className='text-6xl italic text-red-900 font-semibold font-serif text-center'>Services and prices</p>
          <p className='text-[20px] font-semibold my-5 text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae
            itaque architecto at, sint praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis?</p>
        </div>
      </div>

      <div className='w-full'>

        <div className='md:flex md:mt-10'>
            <div className='md:w-1/2 h-auto flex justify-center'>
              <img className='md:w-[35vw] md:h-[85vh] '
                src={Makeup}/>
            </div>

            <div className='md:w-1/2 flex justify-center items-center shadow-xl'>
              <div className='justify-center items-center'>
                  <p className='text-red-900 text-5xl font-bold font-serif md:p-4 p-4'>Make Up</p>
                  <p className='font-serif text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur!</p>
                  <div className=''>
                    <div className='space-y-5 font-serif my-7'>
                      <p>Nail care.......................................................from <span className='text-red-900'>$25</span></p>
                      <p>Hair Styling....................................................from <span className='text-red-900'>$30</span></p>
                      <p>Make up.........................................................from <span className='text-red-900'>$50</span></p>
                      <p>Cosmetology.....................................................from <span className='text-red-900'>$30</span></p>
                      <p>SPA procedures..................................................from <span className='text-red-900'>$80</span></p>
                      <span className='text-red-900 underline cursor-pointer'>View all</span>
                    </div>
                  </div>
              </div>
            </div>
        </div>

        <div className='md:flex md:mt-10'>
            <div className='md:w-1/2 flex justify-center items-center shadow-xl'>
              <div className='justify-center items-center'>
                  <p className='text-red-900 text-5xl font-bold font-serif md:p-4 p-5'>Hair Styling</p>
                  <p className='font-serif text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur!</p>
                  <div className=''>
                    <div className='space-y-5 font-serif my-7'>
                      <p>Nail care.......................................................from <span className='text-red-900'>$25</span></p>
                      <p>Hair Styling....................................................from <span className='text-red-900'>$30</span></p>
                      <p>Make up.........................................................from <span className='text-red-900'>$50</span></p>
                      <p>Cosmetology.....................................................from <span className='text-red-900'>$30</span></p>
                      <p>SPA procedures..................................................from <span className='text-red-900'>$80</span></p>
                      <span className='text-red-900 underline cursor-pointer'>View all</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className='md:w-1/2 h-auto flex justify-center'>
              <img className='md:w-[35vw] md:h-[80vh]'
              src={HairStyle}/>
            </div>
        </div>

        <div className='md:flex md:mt-10'>
            <div className='md:w-1/2 h-auto flex justify-center'>
              <img className='md:w-[40vw] md:h-[90vh]'
              src='https://imgs.search.brave.com/0Ejn7c_cSeV3F5yWQ-171Kk_npwoOHvktn6gJPWeK44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTEvTmFp/bHMtUE5HLVBpYy5w/bmc'/>
            </div>

            <div className='md:w-1/2 flex justify-center items-center shadow-xl'>
              <div className='justify-center items-center'>
                  <p className='text-red-900 text-5xl font-bold font-serif md:p-4 p-7'>Nail Care</p>
                  <p className='font-serif text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur!</p>
                  <div className=''>
                    <div className='space-y-5 font-serif my-7'>
                      <p>Nail care.......................................................from <span className='text-red-900'>$25</span></p>
                      <p>Hair Styling....................................................from <span className='text-red-900'>$30</span></p>
                      <p>Make up.........................................................from <span className='text-red-900'>$50</span></p>
                      <p>Cosmetology.....................................................from <span className='text-red-900'>$30</span></p>
                      <p>SPA procedures..................................................from <span className='text-red-900'>$80</span></p>
                      <span className='text-red-900 underline cursor-pointer'>View all</span>
                    </div>
                  </div>
              </div>
            </div>
        </div>

         <div className='md:flex md:mt-10'>
            <div className='md:w-1/2 flex justify-center items-center shadow-xl'>
              <div className='justify-center items-center'>
                  <p className='text-red-900 text-5xl font-bold font-serif md:p-4 p-7'>Cosmetology</p>
                  <p className='font-serif text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur!</p>
                  <div className=''>
                    <div className='space-y-5 font-serif my-7'>
                      <p>Nail care.......................................................from <span className='text-red-900'>$25</span></p>
                      <p>Hair Styling....................................................from <span className='text-red-900'>$30</span></p>
                      <p>Make up.........................................................from <span className='text-red-900'>$50</span></p>
                      <p>Cosmetology.....................................................from <span className='text-red-900'>$30</span></p>
                      <p>SPA procedures..................................................from <span className='text-red-900'>$80</span></p>
                      <span className='text-red-900 underline cursor-pointer'>View all</span>
                    </div>
                  </div>
              </div>
            </div>
            <div className='md:w-1/2 h-auto flex justify-center'>
              <img className='md:w-[40vw] md:h-[90vh]'
              src="https://imgs.search.brave.com/P1JhbHgg30hOrKEByGBYaJqe1u-LIqOAHOcGybrtV3Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9za2luY2FyZS15/b3VuZy1iZWF1dGlm/dWwtd29tYW4tZmFj/ZS13aXRoLWZyZXNo/LWZsb3dlci13aGl0/ZS1iYWNrZ3JvdW5k/Xzc4MjAzLTE4MTcu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MA" alt="" />
            </div>
        </div>

        <div className='md:flex md:mt-10'>
            <div className='md:w-1/2 h-auto flex justify-center'>
              <img className='md:w-[40vw] md:h-[90vh]'
                src="https://imgs.search.brave.com/O3kDgucdFQfXY3TpD42jY5i4jMLSsrwQGBjwGi33oE0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/cG5nLmNvbS9pbWFn/ZXMvZmlsZS9zcGEt/dDI1cG9idXU5ZjFs/dno4aC5wbmc" alt="" />
            </div>

            <div className='md:w-1/2 flex justify-center items-center mb-10 shadow-xl'>
              <div className='justify-center items-center'>
                  <p className='text-red-900 text-5xl font-bold font-serif md:p-4 p-7'>SPA Procedures</p>
                  <p className='font-serif text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur!</p>
                  <div className=''>
                    <div className='space-y-5 font-serif my-10'>
                      <p>Nail care.......................................................from <span className='text-red-900'>$25</span></p>
                      <p>Hair Styling....................................................from <span className='text-red-900'>$30</span></p>
                      <p>Make up.........................................................from <span className='text-red-900'>$50</span></p>
                      <p>Cosmetology.....................................................from <span className='text-red-900'>$30</span></p>
                      <p>SPA procedures..................................................from <span className='text-red-900'>$80</span></p>
                      <span className='text-red-900 underline cursor-pointer'>View all</span>
                    </div>
                  </div>
              </div>
            </div>
        </div> 

      </div>

    </div>
  )
}

export default Service
