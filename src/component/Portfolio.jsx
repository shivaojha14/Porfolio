import React from 'react'

import Mongodb from "../../public/Mongodb.png"
import Express from "../../public/Express.png"
import Node from "../../public/Node.png"
import Spring from "../../public/Spring.png"


const Portfolio = () => {

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
            logo:Spring,
            name:"Spring"
        },
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10">

   <div>
    <h1 className="text-2xl font-bold md-5">
        Portfolio
    </h1>
    <span className="underline font-semibold">Featured Projects</span>
  
  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
    {
        cardItem.map(({id,logo,name})=>(
            
            <div className="md:w-[200px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 " key={id}> 
               <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]]" alt="" />
               <div>
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">Lorem ipsum, dolor sit amet .</p>
               </div>
               <div className=" px-4 py-4 space-y-3 justifiy- arround">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2  rounded">Video</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source code</button>

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