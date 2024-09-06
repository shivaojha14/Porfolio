import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped,Typed } from "react-typed";

import pic from "../../public/shiva_ojha-removebg-preview.png"
function Home() {
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
      <span className="text-xl"> Welcome in feed my</span>

      <div className="flex space-x-1 text-2xl md:text-4xl space-y-2">
      <h1 className="text-3xl font-semibold">Hello,I'm </h1>
     { /*<span className="text-red-700 font-bold"> Developer</span>*/}
     <ReactTyped
         className="text-red-700 font-bold"
          strings={[ "Dveloper","coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
      </div>
       <br/>
      <p className="text-sm md:text-md text-justify">
      My name is Shivakant Ojha, and I completed my degree from Mahatma Gandhi Kashi Vidyapith,
       Varanasi, in 2024.
       I have honed my skills as a full-stack web developer. 
      </p>
      <br />
      {/* social media icons*/}
      <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
      <div className=" space-y-2">
        <h1 className="font-bold">Availlable on </h1>
        <ul className="flex space-x-5">
        
       <li>
        <a href="https://www.linkedin.com/feed/"target="_blank">
         <FaLinkedin className="text-2xl cursor-pointer" />
         </a>
       </li>
        
        <li>
          <a href="https://www.teligram.com/feed/" target="_blank">
          <FaTelegram className="text-2xl cursor-pointer" />
          </a>
        </li>
       <li>
        <a href="https://www.whatsapp.com/feed/" target="_blank">
         <FaWhatsapp className="text-2xl cursor-pointer" />
         </a>
         </li>

        </ul>
      </div>

      <div className="space-y-2">
      <h1 className="font-bold">currently working on </h1>
      <div className="flex space-x-5">
      <DiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
      <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
      <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
      <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
      </div>
      </div>
      </div>
      </div>

      <div className="md:w-1/2 md:ml-48 mt-8 md:mt-20 order-1">
      <img src={pic} className="rounded-full md:w-[380px] md:h-[380px]" alt="" />
      
      </div>
      </div>
    </div>
     <hr />
    </>
  )
}

export default Home