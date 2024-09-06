import React from 'react'

import Mongodb from "../../public/Mongodb.png"
import Express from "../../public/Express.png"
import Node from "../../public/Node.png"
import js from "../../public/js.png"
import Spring from "../../public/Spring.png"


const Experiance = () => {

    const cardItem=[

        {
            id:1,
            logo:Mongodb,
            name:"Mongodb"
        },

        {
            id:2,
            logo:Express,
            name:"Express"
        },

        {
            id:3,
            logo:Node,
            name:"Node"
        },

        {
            id:4,
            logo:js,
            name:"React"
        },

        {
            id:5,
            logo:Spring,
            name:"Spring"
        },
    ]
  return (
    <div name="Experiance" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-16">

   <div>
    <h1 className="text-2xl font-bold md-5">
        Experiance
    </h1>
    <p className="">i have self 1+year experiance in 
        fullstack web development

    </p>
  
  <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-2">
    {
        cardItem.map(({id,logo,name})=>(
            
            <div className="flex flex-col items- center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px]  p-1 cursor-pointer hover:scale-110 duration-300 " key={id}> 
               <img src={logo} className="w-[150px]  rounded-full" alt="" />
               <div>
                <div className="">{name}</div>
               </div>
        
            </div>
        ))

        
    }
  </div>

   </div>
     
    </div>
  )
}

export default Experiance 