import React from 'react'
import java from "../../src/Assetss/java.png"
import python from "../../src/Assetss/python.svg"
import node from "../../src/Assetss/node.png"
import momgo from "../../src/Assetss/mongo.jpg"
import express from"../../src/Assetss/express.png"
import react from"../../src/Assetss/reactjs.png"
const Portfolio = () => {
    const cardItem=[
        {
            id:1,
            logo:java,
            name:"Java"
        },
        {
            id:2,
            logo:python,
            name:"Python"
        },
        {
            id:3,
            logo:node,
            name:"Node"
        },
        {
            id:4,
            logo:momgo,
            name:"MongoDB"
        },
        {
            id:5,
            logo:express,
            name:"Express"
        },
        {
            id:6,
            logo:react,
            name:"React"
        }
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
         <span className='underline font-semibold'>  Featured Projects </span>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-10 my-5'>
           {
            cardItem.map(({id,logo,name}) =>(
                <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                    <img src={logo} className='w=[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                    <div>
                      <dir className='px-3 font-bold text-xl mb-2'> {name}</dir>
                      <p className='px-2 text-grey-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem eos nost.</p>
                    </div>
                     <div className='px-6 py-0 space-x-3 justify-around'>
                       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded'>Video</button>
                       <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded'>Source Code</button>
                     </div>
                </div>

            ))
           }
          </div>
      </div>
      
    </div>
  )
}

export default Portfolio