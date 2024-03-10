import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nyqsxso', 'template_mtipy0f', form.current, {
        publicKey: 'e3MEI9z2EU5Cd-lZI',
    })
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}
  return (
      <div name='contact' className='w-full h-screen flex justify-center items-center p-4 text-gray-300'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-[#00df9a]'>Contact</p>
                  <p className='py-4'> Willst du noch mehr wissen? Sende mir eine Nachricht</p>
              </div>
              <input className='bg-[#001400] p-2' type="text" placeholder='Name' name='user_name'/>
              <input className='my-4 p-2 bg-[#001400]' type="email" placeholder='Email' name='user_email'/>
              <textarea className='bg-[#001400] p-2' name="message" rows="10" placeholder='Nachricht'></textarea>
              <button type="Submit"
                      className='text-white border-2 hover:bg-[#00df9a] hover:border-[#00df9a] px-4 py-3 my-8 mx-auto flex items-center'>Send
              </button>
          </form>
          <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
               role="alert">
              <span className="font-medium">Hurray</span> Nachricht versendet!.
          </div>
      </div>
  )
}

export default Contact