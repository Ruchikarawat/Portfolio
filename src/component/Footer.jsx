import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";    
function Footer() {
  return <>
    <hr />
     <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 px-20 '>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
               <FaFacebook size={24} />
               <FaLinkedin size={24} />
               <FaYoutube size={24} />
               <FaTelegram size={24} />
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                 <p className='text-sm'>&copy; 2024 Your company all right reserved.</p>
                 <p className='text-sm'>Supportive Partner 🧡 Muskan</p>
            </div>
        </div>
      </div>
     </footer>
  </>
}

export default Footer