import lotus from '../../assets/lotus.png'

function Contact() {
  return (

    <div className='w-full'>

      {/* title name */}
     

      {/* location */}
      <div className="rounded-lg shadow-lg border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9713823682396!2d77.27502737427601!3d28.63061978416978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0035a17b09%3A0x625b03f492fcbfe!2sLaxmi%20nagar%20metro!5e0!3m2!1sen!2sin!4v1752628637631!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* contact details */}
      <div className='w-full flex justify-between my-5 p-7'>

      <div className='flex justify-center md:w-1/3'>
        <div className='md:w-[15vw] text-center'>
          <p className='text-red-900 text-xl font-semibold'>Address</p>
          <div className='mt-5 relative'>
            <i class="fa-solid fa-location-dot text-red-900 text-6xl opacity-20"></i>
            <div className=' absolute top-2 right-10 font-semibold font-sans text-gray-700'>
              <p>New Delhi, India</p>
              <p>Code-110092</p>
            </div>
          </div>
        </div>
      </div>

        <div className='flex justify-center md:w-1/3'>
          <div className='md:w-[15vw] text-center'>
            <p className='text-red-900 text-xl font-semibold'>Email</p>
            <div className='mt-5 relative'>
              <i class="fa-solid fa-envelope text-red-900 text-6xl opacity-20"></i>
              <div className='absolute top-2 font-semibold font-sans text-gray-700'>
                <p>forbe@glambooks.com</p>
                <p>hc@glambooks.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center md:w-1/3'>
          <div className='md:w-[15vw] text-center'>
            <p className='text-red-900 text-xl font-semibold'>Phone</p>
            <div className='mt-5 relative'>
              <i class="fa-solid fa-phone-volume text-red-900 text-6xl opacity-20"></i>
              <div className='absolute top-2 right-10 font-semibold font-sans text-gray-700'>
                <p>(246) 917-5787</p>
                <p>245-2534-6589</p>
              </div>
            </div>
          </div>
        </div>

      </div>

       {/* Appointment */}
      <div className='w-full py-6 md:flex justify-center'>
        <div className='w-full bg-red-100 shadow-lg'>

          <div className='flex justify-center'>
            <div className='w-[90vw] bg-white flex justify-between p-10'>

              <div className='w-[25vw] h-auto'>
                <img src="https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg" alt="" />
              </div>

              <div className='w-[55vw] h-auto'>
                <h1 className='text-xl text-red-900 font-serif font-semibold mt-2'>Glam Books</h1>
                <p className='text-5xl font-serif font-semibold mt-4'>Book Appointment</p>
                <p className='text-gray-600 font-semibold font-serif mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eaque!</p>
                
                <div className='flex space-x-4 my-4'>
                  <div className=''>
                    <label className='font-serif'>First Name</label><br />
                    <input type="text" placeholder='First name' className='text-gray-700 w-[25vw] font-semibold border-1 p-1' />
                  </div>
                  <div>
                    <label className='font-serif'>Last Name</label><br />
                    <input type="text" placeholder='Last name' className='text-gray-700 w-[25vw] font-semibold border-1 p-1' />
                  </div>
                </div>

                <div className='flex space-x-4 my-4'>
                  <div className=''>
                    <label className='font-serif'>Email</label><br />
                    <input type="email" placeholder='Email' className='text-gray-700 w-[25vw] font-semibold border-1 p-1' />
                  </div>
                  <div>
                    <label className='font-serif'>Phone</label><br />
                    <input type="number" placeholder='Phone' className='text-gray-700 w-[25vw] font-semibold border-1 p-1' />
                  </div>
                </div>

                <div className='flex space-x-4 my-4'>
                  <div className=''>
                    <label className='font-serif'>Date</label><br />
                    <input type="date" placeholder='date' className='text-gray-700 w-[25vw] font-semibold border-1 p-1' />
                  </div>
                  <div>
                    <label className='font-serif'>Time</label><br />
                    <input type="time" placeholder='Time' className='text-gray-700 w-[25vw] font-semibold border-1 p-1' />
                  </div>
                </div>

                <div>
                  <label className='font-serif'>Service</label><br />
                  <input type="" placeholder='Services' className='text-gray-700 w-full font-semibold border-1 p-1' />
                </div>

                <br />
                <button type='submit' className='w-full p-2 bg-red-900 text-white text-xl'>Send Message</button>
             
              </div>


            </div>
          </div>

        </div>
      </div>

      {/* Follow page */}
      <div className='w-full my-15'>
        <h1 className='text-6xl text-red-900 font-serif font-bold text-center'>Follow Our Instagram</h1>
        <p className='text-gray-600 text-xl font-serif mt-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
        
        <div className='w-full h-[85vh] flex space-x-5 my-15 '>

          <div className='w-[20vw] h-[40vh] space-y-5'>
            <img className='w-[20vw] h-[40vh] shadow-lg'
             src="https://images.pexels.com/photos/247124/pexels-photo-247124.jpeg"/>
            <img className='w-[20vw] h-[40vh] shadow-lg'
             src="https://images.pexels.com/photos/2065198/pexels-photo-2065198.jpeg"/>
          </div>

          <div className='w-[20vw] h-[40vh] space-y-5'>
            <img className='w-[20vw] h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/247297/pexels-photo-247297.jpeg"/>
            <img className='w-[20vw] h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2797147/pexels-photo-2797147.jpeg"/>
          </div>

          <div className='w-[20vw] h-[40vh] space-y-5'>
            <img className='w-[20vw] h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/458768/pexels-photo-458768.jpeg"/>
            <img className='w-[20vw] h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2870355/pexels-photo-2870355.jpeg"/>
          </div>

          <div className='w-[20vw] h-[40vh] space-y-5'>
            <img className='w-[20vw] h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2752099/pexels-photo-2752099.jpeg"/>
            <img className='w-[20vw] h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg"/>
          </div>

          <div className='w-[20vw] h-[40vh] space-y-5'>
            <img className='w-[20vw] h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2772099/pexels-photo-2772099.jpeg"/>
            <img className='w-[20vw] h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
