import React from 'react'
import lotus from '../../assets/lotus.png'

function About() {
  return (
    <div className='w-full'>

      {/* About*/}
      <div className='w-full h-auto'>
        <div className='flex flex-wrap justify-center relative'>
          <img src={lotus} alt="" className='md:w-[32vw] md:h-[60vh] opacity-25' />
          <p style={{ fontFamily: "Great Vibes" }} className='text-center text-red-900 text-9xl absolute top-30 font-bold'>About</p>
        </div>
      </div>

      {/* about image */}
      <div>
        <img className='w-full md:h-[70vh]'
        src='https://imgs.search.brave.com/BjylebOaVsrRgLyRBdnnqXwB4HMB_Wa5PTKprHSj_j0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvU3Bh/LVBORy5wbmc' />
      </div>

       {/* Elegance */}
      <div className='w-full flex justify-center md:mt-20 mt-10'>
        <div className='w-[80vw]'>
          <p className='text-6xl italic text-red-900 font-semibold font-serif text-center'>We can create what you imagine</p>
          
          <div className='w-full mt-10 space-y-2'>
            <p className='text-red-900 text-2xl font-semibold font-serif italic'>Lorem ipsum</p>
            <div className='w-full flex text-[18px] font-sans text-gray-800'>
              <div className='md:w-[40vw]'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro similique itaque deleniti! Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste voluptates quisquam dolorem perspiciatis 
                  cupiditate provident ex libero alias voluptatem iure.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, omnis!</p>
              </div>
              <div className='md:w-[40vw]'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam similique repellat, illo facilis velit nostrum pariatur 
                  harum sed esse inventore, recusandae magnam dolorum eaque sunt rem officia est quas placeat?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid hic mollitia similique ex nihil.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spa procedure */}
       <div className='w-full h-auto mt-10 flex justify-center'>
        <div className='w-[98vw] md:h-[80vh] bg-red-100 p-15 shadow-xl'>
          <p className='text-red-900 text-5xl font-semibold text-center font-serif'>Our SPA Procrdures</p>
          <p className='text-[20px] font-semibold my-5 text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae
            itaque architecto at, sint praesentium.</p>

          <div className='flex justify-center mt-10 h-screen'>
            <div className=''>
              <img className='w-[70vw] h-[80vh]'
              src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg" alt="" />
            </div>
          </div>

        </div>
      </div>

      {/* Style makeup */}
      <div className='w-full md:flex md:mt-70 p-10'>
          <div className='md:w-1/2 h-auto flex justify-center'>
            <img className='md:w-[30vw] h-[80vh] shadow-2xl'
              src="https://images.pexels.com/photos/3061814/pexels-photo-3061814.jpeg" alt="" />
          </div>
          
          <div className='md:w-1/2 flex justify-center items-center'>
            <div className='md:w-[70vw]'>
                <p className='text-red-900 text-5xl font-bold font-serif'>Style from the city, services from out o this world</p>
                <p className='font-serif text-gray-700 my-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur! Lorem ipsum dolor sit,
                  amet consectetur adipisicing elit. Quos, ipsum?</p>
                <div className='w-[120px] h-[35px] bg-red-900 text-center'>
                  <button className=' text-white'>Learn More</button>
                </div>
            </div>
          </div>
      </div>

      {/* Team */}
      <div className='w-full my-15'>
        <p className='text-red-900 text-6xl font-bold text-center font-serif my-5'>Our Team</p>
        <p className='text-gray-700 text-xl text-center font-serif font-semibold'>Meet Our Professionals</p>
        
        <div className='flex justify-center my-10'>  
          <div className='flex space-x-10 p-5'>
            <div className='w-[25vw] shadow-2xl'>
              <img className='w-[25vw] h-[50vh]'
              src="https://imgs.search.brave.com/RCUyb9ZPQMLuhtRTnU7HTYq90NBfmEUqKeFWFksociU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA2Lzg2LzUw/LzM2MF9GXzEwNjg2/NTAwNl9oMmdWYUxx/QXhzYWVUbklmWlhX/Vzd2WFh0U3h0WEhU/NC5qcGc" />
              <p className='text-xl text-red-900 font-bold font-serif text-center mt-2'>Caroline Forbe</p>
              <p className='text-gray-400 font-bold text-center'>Hairdresser</p>            
              <div className='flex justify-center my-2'>
                <div className='flex space-x-2 text-center'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-square-x-twitter"></i>
                  <i class="fa-brands fa-square-instagram"></i>
                </div>
              </div>
            </div>
            <div className='w-[25vw] shadow-2xl'>
              <img className='w-[25vw] h-[50vh]'
              src="https://imgs.search.brave.com/AMiOVAYnRF7fW3liZgTQkq23IsANjY_M7cxBdXuu-ks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtd29t/YW4taG9sZGluZy1o/ZWFwLWNvc21ldGlj/LWJydXNoZXNfMjMt/MjE0ODExMzA4Ny5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw" />
              <p className='text-xl text-red-900 font-bold font-serif text-center mt-2'>Elina Gilbert</p>
              <p className='text-gray-400 font-bold text-center'>Hairdresser</p>            
              <div className='flex justify-center my-2'>
                <div className='flex space-x-2 text-center'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-square-x-twitter"></i>
                  <i class="fa-brands fa-square-instagram"></i>
                </div>
              </div>
            </div>
            <div className='w-[25vw] shadow-2xl'>
              <img className='w-[25vw] h-[50vh]'
              src="https://imgs.search.brave.com/I9mPFpvicn5y3JFLjB34DMlG2q-S5LTdAT7scmimLM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcxLzg2/LzI5LzcxODYyOTBk/YTkyMTUzZTNmYTdl/YjllNWJlNWU1Mzk2/LmpwZw" />
              <p className='text-xl text-red-900 font-bold font-serif mt-2 text-center'>Georgi John</p>
              <p className='text-gray-400 font-bold text-center'>Hairdresser</p>            
              <div className='flex justify-center my-2'>
                <div className='flex space-x-2 text-center'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-square-x-twitter"></i>
                  <i class="fa-brands fa-square-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='flex space-x-10'>  
            <div className='w-[25vw] shadow-2xl'>
              <img className='w-[25vw] h-[50vh]'
              src="https://imgs.search.brave.com/aImH-VBegJdjG0fqa5knCl52lzQlfF1T_-O3hpb9Y4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcm9m/ZXNzaW9uYWwtbWFr/ZXVwLWFydGlzdC13/b3JraW5nLXlvdW5n/LWdpcmwtY3JlYXRp/bmctbmF0dXJhbC1s/b29rLWJlYXV0eS1z/YWxvbi05NzA3OTEx/Ny5qcGc" />
              <p className='text-xl text-red-900 font-bold font-serif text-center mt-2'>Rebekah Mikaelson</p>
              <p className='text-gray-400 font-bold text-center'>Hairdresser</p>            
              <div className='flex justify-center my-2'>
                <div className='flex space-x-2 text-center'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-square-x-twitter"></i>
                  <i class="fa-brands fa-square-instagram"></i>
                </div>
              </div>
            </div>
            <div className='w-[25vw] shadow-2xl'>
              <img className='w-[25vw] h-[50vh]'
              src="https://imgs.search.brave.com/EbAYGvit9cfqYCetkdtSrhOJQZ1qxrWya3P5x3yy6mk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vdmFyaWFu/dHMvcnZaZVZDVk1Z/Z2dtQWFCTHpoOVpi/MXVHLzYyNGYwZGMx/ZGZmOWJkY2NhYjAz/MmY5M2MzM2U3OWRl/Nzg0ODE3NzBlNzll/MjFkM2IwNDY5ZGFm/NTFmMDI3OTc" />
              <p className='text-xl text-red-900 font-bold font-serif text-center mt-2'>Gia Friend</p>
              <p className='text-gray-400 font-bold text-center'>Hairdresser</p>            
              <div className='flex justify-center my-2'>
                <div className='flex space-x-2 text-center'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-square-x-twitter"></i>
                  <i class="fa-brands fa-square-instagram"></i>
                </div>
              </div>
            </div>
            <div className='w-[25vw] shadow-2xl'>
              <img className='w-[25vw] h-[50vh]'
              src="https://imgs.search.brave.com/PqdakDSioZhMbDvw1ZDpHr3UMT7YTXlt5c4QaC9E8N8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/b21hbi1jb3NtZXRv/bG9naXN0LW1ha2lu/Zy1iZWF1dHktcHJv/Y2VkdXJlc18xMzAz/LTI2MDEzLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA" />
              <p className='text-xl text-red-900 font-bold font-serif text-center mt-2'>Bonny Bon-Bon</p>
              <p className='text-gray-400 font-bold text-center'>Hairdresser</p>            
              <div className='flex justify-center my-2'>
                <div className='flex space-x-2 text-center'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-square-x-twitter"></i>
                  <i class="fa-brands fa-square-instagram"></i>
                </div>
              </div>
            </div>
        </div>

        </div>

      </div>






    </div>
  )
}

export default About
