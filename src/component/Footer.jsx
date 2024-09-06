import React from 'react'

import { FaLinkedin,FaWhatsapp,
  FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
   <hr />
   <footer className="py-12">
    <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20 mt-10">
      <div className=" flex flex-col items-center justify-center">
        <div className="flex  space-x-4">
          <FaLinkedin size={24}></FaLinkedin>
          <FaWhatsapp size={24}></FaWhatsapp>
          <FaGithub size={24}></FaGithub>

        </div>
        <div className="mt-8 border-t gray-700 pt-8 flex flex-col items-center">

          <p className="text-sm">
            &copy;Your company All right Reserved 
          </p>
          <p className="text-sm">Shiva ojha </p>
        </div>
      </div>
    </div>
   </footer>
   </>
  )
}

export default Footer