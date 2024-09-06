import React from 'react'
import Navbar from './component/Navbar'
import Home from   './component/Home'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Experiance from './component/Experiance'
import Contact from "./component/Contact"
import Footer from './component/Footer'
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Experiance></Experiance>
    <Contact></Contact>
    <Footer></Footer>
    </div>
    <Toaster/>
    
    </>
  )
}

export default App