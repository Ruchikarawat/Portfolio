import React, { useState } from 'react'
import pic from "../../src/Assetss/web.jpg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
function Navbar() {
    const [menu,setMenu]=useState(false)
    const navItem=[
        {
            Id:1,
            text:"Home"
        },
        {
            Id:2,
            text:"About"
        },
        {
            Id:3,
            text:"Portfolio"
        },
        {
            Id:4,
            text:"Experiance"
        },
        {
            Id:5,
            text:"Contact"
        },
    ]
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
       <div className='flex justify-between items-center h-16'>
          <div className='flex space x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
             <h1 className='font-semibold text-xl cursor-pointer'>
             Ruchik<span className='text-red-500 text-2xl'>a</span>
             <p className='text-sm'>Web Developer</p>
             </h1>
          </div>
          {/*desktop navbar*/}
          <div>
            <ul className='hidden md:flex space-x-8'>
              
               {navItem.map(({ id, text })=>(
                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>
                ))}
              
            </ul>
           <div onClick={()=>setMenu(!menu)} className='md:hidden'>
            {menu?<AiOutlineMenu size={24} />:<IoCloseSharp size={24} />}
           </div>

          </div>
       </div>
       {/*mobile navbar*/}

       {
          menu && (

          
       
       <div>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl'>
        {navItem.map(({ id, text })=>(
            <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>{text}</li>
        ))}
        </ul>
       </div>
     
   ) }
     </div>
    </>
  )
}

export default Navbar