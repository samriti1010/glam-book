import lotus from '../../assets/lotus.png'
import { useState } from 'react';
// import Select from 'react-select';

function Contact() {

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const SubmitHandler = async () => {

    const payButton = document.getElementsByClassName('submitMessage-BTN')[0];

    const payData={
      "amount": 100.00,
      "customer_id": "jn",
      "customer_phone": "8290909090",
      "customer_name": "HI",
      "customer_email": "abc@yest.om"
    }


    // const fname = document.getElementsByClassName("fname")[0].value;
    // const lname = document.getElementsByClassName("lname")[0].value;
    // const email = document.getElementsByClassName("email")[0].value;
    // const phone = document.getElementsByClassName("phone")[0].value;
    // const date = document.getElementsByClassName("date")[0].value;
    // const time = document.getElementsByClassName("time")[0].value;
    // const service = document.getElementsByClassName("service")[0].value;
    
    // if (!fname || !lname || !email || !phone || !date || !time || !service) {
    //   alert("Please fill all the required fields");
    //   return;
    // }

    // const payData = {
    //   amount: "100000.00",
    //   customer_fname: fname,
    //   customer_lname: lname,
    //   customer_email: email,
    //   customer_phone: phone,
    //   date:date,
    //   time:time,
    //   customer_id,
    // };
  
    
    function initializeCashfreePayment(result) {
    const cashfree = Cashfree({ mode: "sandbox" });
    const { payment_session_id } = result;

    const options = {
      paymentSessionId: payment_session_id,
      redirectTarget: "_self",
    };
    console.log(payment_session_id);
    cashfree.checkout(options);

    // showPaymentSuccess(paymentData);
  }

    try {
      payButton.disabled = true;
      payButton.textContent = "Processing...";

      const response = await fetch("https://pg-integration.onrender.com/createOrder", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(payData),
      });

      const result = await response.json();
      console.log(result);
      initializeCashfreePayment(result);

    } catch (err) {
      console.log(err);
    } finally {
      payButton.disabled = false;
      payButton.textContent = "Book Appointment";
    }
  }

  return (

    <div className='w-full md:mt-20'>

      {/* contact */}
      {/* <div className='w-full h-auto'>
          <div className='flex flex-wrap justify-center relative'>
            <img src={lotus} alt="" className='md:w-[32vw] md:h-[60vh] opacity-25' />
            <p style={{ fontFamily: "Great Vibes" }} className='text-center text-red-900 text-9xl absolute md:top-30 top-40 font-bold'>Contact Us</p>
          </div>
        </div> */}

      {/* location */}
      <div className="rounded-lg shadow-lg border border-gray-200 my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.748074314835!2d75.7022928743956!3d31.255396660187696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1753113577254!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* contact details */}
      <div className='w-full md:flex flex-wrap justify-between my-5 p-7'>

        <div className='md:flex flex-wrap justify-center md:w-1/3'>
          <div className='md:w-[15vw] text-center'>
            <p className='text-red-900 text-xl font-semibold'>Address</p>
            <div className='mt-5 relative'>
              <i class="fa-solid fa-location-dot text-red-900 text-6xl opacity-20"></i>
              <div className=' absolute md:top-2 md:right-10 top-3 right-30 font-semibold font-sans text-gray-700'>
                <p>Punjab, India</p>
                <p>Code-112233</p>
              </div>
            </div>
          </div>
        </div>

        <div className='md:flex flex-wrap justify-center md:w-1/3 my-5'>
          <div className='md:w-[15vw] text-center'>
            <p className='text-red-900 text-xl font-semibold'>Email</p>
            <div className='mt-5 relative'>
              <i class="fa-solid fa-envelope text-red-900 text-6xl opacity-20"></i>
              <div className='absolute md:top-2 md:right-2 top-3 right-25 font-semibold font-sans text-gray-700'>
                <p>forbe@glambooks.com</p>
                <p>hc@glambooks.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className='md:flex justify-center md:w-1/3'>
          <div className='md:w-[15vw] text-center'>
            <p className='text-red-900 text-xl font-semibold'>Phone</p>
            <div className='mt-5 relative'>
              <i class="fa-solid fa-phone-volume text-red-900 text-6xl opacity-20"></i>
              <div className='absolute md:top-2 md:right-10 top-3 right-30 font-semibold font-sans text-gray-700'>
                <p>(246) 917-5787</p>
                <p>245-2534-6589</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Appointment */}
      <div className='w-full py-6 md:flex flex-wrap justify-center'>
        <div className='w-full bg-red-100 shadow-lg'>

          <div className='md:flex flex-wrap justify-center'>
            <div className='w-[90vw] bg-white md:flex flex-wrap justify-between p-10'>

              <div className='md:w-[25vw] md:h-auto'>
                <img src="https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg" alt="" />
              </div>

              <div className='md:w-[55vw] md:h-auto'>
                <h1 className='text-xl text-red-900 font-serif font-semibold mt-2'>Glam Books</h1>
                <p className='text-5xl font-serif font-semibold mt-4'>Book Appointment</p>
                <p className='text-gray-600 font-semibold font-serif mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eaque!</p>

                <div className='md:flex flex-wrap space-x-4 md:my-4'>
                  <div className='md:my-0 my-2'>
                    <label className='font-serif'>First Name</label><br />
                    <input type="text" placeholder='First name' className='fname text-gray-700 md:w-[25vw] font-semibold border-1 p-1' required />
                  </div>
                  <div className='md:my-0 my-2'>
                    <label className='font-serif'>Last Name</label><br />
                    <input type="text" placeholder='Last name' className='lname text-gray-700 md:w-[25vw] font-semibold border-1 p-1' required />
                  </div>
                </div>

                <div className='md:flex flex-wrap space-x-4 md:my-4'>
                  <div className='md:my-0 my-2'>
                    <label className='font-serif'>Email</label><br />
                    <input type="email" placeholder='Email' className='email text-gray-700 md:w-[25vw] font-semibold border-1 p-1' required />
                  </div>
                  <div className='md:my-0 my-2'>
                    <label className='font-serif'>Phone</label><br />
                    <input type="number" placeholder='Phone' className='phone text-gray-700 md:w-[25vw] font-semibold border-1 p-1' required />
                  </div>
                </div>

                <div className='md:flex flex-wrap space-x-4 md:my-4'>
                  <div className='md:my-0 my-2'>
                    <label className='font-serif'>Date</label><br />
                    <input type="date" placeholder='date' className='date text-gray-700 md:w-[25vw] font-semibold border-1 p-1 cursor-pointer' required />
                  </div>
                  <div className='md:my-0 my-2'>
                    <label className='font-serif'>Time</label><br />
                    <input type="time" placeholder='Time' className='time text-gray-700 md:w-[25vw] font-semibold border-1 p-1 cursor-pointer' required />
                  </div>
                </div>

                <div className='md:my-0 my-2'>
                  {/* <label className='font-serif'>Service</label><br /> */}
                  {/* <input type="" placeholder='Services' className='text-gray-700 w-full font-semibold border-1 p-1' required /> */}

                  <div className="">
                    <label htmlFor="service" className="font-serif">
                      Select a Service
                    </label><br />
                    <select
                      id="service"
                      value={selectedOption}
                      onChange={handleChange}
                      className="service text-black w-full font-semibold border-1 p-10' required outline-none my-2 cursor-pointer"
                      required
                    >
                      <option className='bg-red-900 text-white cursor-pointer' value="" disabled>Select one</option>
                      <option className='bg-red-900 text-white cursor-pointer' value="Facial">Facial</option>
                      <option className='bg-red-900 text-white cursor-pointer' value="Haircut">Haircut</option>
                      <option className='bg-red-900 text-white cursor-pointer' value="Nail Care">Nail Care</option>
                      <option className='bg-red-900 text-white cursor-pointer' value="Pedicure">Pedicure</option>
                      <option className='bg-red-900 text-white cursor-pointer' value="Eyebrow">Eyebrow</option>
                      <option className='bg-red-900 text-white cursor-pointer' value="SPA">SPA</option>
                    </select>

                    {selectedOption && (
                      <p className="mt-3 text-red-900">You selected: {selectedOption}</p>
                    )}
                  </div>

                </div>

                <br />
                <button
                  onClick={SubmitHandler}
                  type='submit' className='submitMessage-BTN w-full p-2 bg-red-900 text-white text-xl cursor-pointer'>Book Appointment</button>

              </div>


            </div>
          </div>

        </div>
      </div>

      {/* Follow page */}
      <div className='w-full my-15'>
        <h1 className='text-6xl text-red-900 font-serif font-bold text-center'>Follow Our Instagram</h1>
        <p className='text-gray-600 text-xl font-serif mt-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>

        <div className='md:w-full md:h-[85vh] md:flex flex-wrap my-15 space-y-5 p-2 md:space-x-3'>

          <div className='md:w-[19vw] md:h-[40vh] space-y-5'>
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/247124/pexels-photo-247124.jpeg" />
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2065198/pexels-photo-2065198.jpeg" />
          </div>

          <div className='md:w-[19vw] md:h-[40vh] space-y-5'>
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/247297/pexels-photo-247297.jpeg" />
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2797147/pexels-photo-2797147.jpeg" />
          </div>

          <div className='md:w-[19vw] md:h-[40vh] space-y-5'>
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/458768/pexels-photo-458768.jpeg" />
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2870355/pexels-photo-2870355.jpeg" />
          </div>

          <div className='md:w-[19vw] md:h-[40vh] space-y-5'>
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2752099/pexels-photo-2752099.jpeg" />
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2053851/pexels-photo-2053851.jpeg" />
          </div>

          <div className='md:w-[19vw] md:h-[40vh] space-y-5'>
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2772099/pexels-photo-2772099.jpeg" />
            <img className='md:w-[19vw] md:h-[40vh] shadow-lg'
              src="https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg" />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact
