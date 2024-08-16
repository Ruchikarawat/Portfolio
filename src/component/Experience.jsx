import React from 'react'
import java from "../../src/Assetss/java.png"
import htmlb from "../../src/Assetss/htmlb.png"
import javascript from "../../src/Assetss/javascript.png"
import css from "../../src/Assetss/css.png"
import oracle from"../../src/Assetss/oracle.png"
import spring from"../../src/Assetss/spring.png"
function Experience () {
    const cardItem=[
        {
            id:1,
            logo:java,
            name:"Java"
        },
        {
            id:2,
            logo:htmlb,
            name:"Html"
        },
        {
            id:3,
            logo:css,
            name:"Css"
        },
        {
            id:4,
            logo:javascript,
            name:"Javascript"
        },
        {
            id:5,
            logo:spring,
            name:"Spring"
        },
        {
            id:6,
            logo:oracle,
            name:"Oracle"
        }
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
         <p className=''>
           I'v more than 2 years of experience in below technologies. 
         </p>
          <div className=' grid grid-cols-1 md:grid-cols-4 gap-10 my-5'>
           {
            cardItem.map(({id,logo,name}) =>(
                <div className='mt-6 flex flex-col item-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] text-center cursor-pointer hover:scale-110 duration-300'
                 key={id}>
                    <img 
                    src={logo} 
                    className='w=[120px]   rounded-full ' alt="" />
                    <div>
                      <dir className=''> {name}</dir>
                      
                    </div>
                    
                </div>

            ))
           }
          </div>
      </div>
      
    </div>
  )
}

export default Experience