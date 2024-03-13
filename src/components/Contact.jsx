import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Alerts from "./Alerts";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false)
    const [sending, setSending] = useState(false)
    const [error, setError] = useState(false)

    const sendEmail = (e) => {
    e.preventDefault();
    setSending(true)
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATEID, form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLICKEY,
    })
      .then((result) => {
          setShowAlert(true);
          setTimeout(() => {
              setShowAlert(false);
          }, 3000);
          setSending(false)
          form.current.reset();
      }, (error) => {
          setError(true);
          setTimeout(() => {
              setError(false);
          }, 3000);
          setSending(false)
          console.log(error.text);
      });
}
  return (
      <div name='contact' className='w-full min-h-screen flex justify-center items-center p-4 text-gray-300'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-[#00df9a]'>Contact</p>
                  <p className='py-4'>Du hast eine Frage oder Feedback? Sende mir eine Nachricht.</p>
              </div>
              <input className='bg-[#001400] p-2 focus:outline-none' type="text" placeholder='Name' name='user_name'/>
              <input className='my-4 p-2 bg-[#001400] focus:outline-none' type="email" placeholder='Email' name='user_email'/>
              <textarea className='bg-[#001400] p-2 focus:outline-none' name="message" rows="10" placeholder='Nachricht'></textarea>
              {
                  sending &&
                  <button type="Submit"
                          className='text-white border-2 hover:bg-[#00df9a] hover:border-[#00df9a] px-4 py-3 my-8 mx-auto flex items-center disabled'>
                      <AiOutlineLoading3Quarters className="animate-spin" size={20}/>
                  </button>
              }
              {
                  !sending &&
                  <button type="Submit"
                                      className='text-white border-2 hover:bg-[#00df9a] hover:border-[#00df9a] px-4 py-3 my-8 mx-auto flex items-center'>Send
                  </button>
              }

          </form>
          {
              showAlert && <Alerts message="Email wurde erfolgreich versendet"/>
          }
          {
              error && <Alerts message="Email konnte nicht versendet werden"/>
          }
      </div>
  )
}

export default Contact