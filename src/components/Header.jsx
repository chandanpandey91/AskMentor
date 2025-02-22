import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import { tr } from 'framer-motion/m'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D')"}} id='Header'>
      <Navbar/>
      <motion.div 
      initial={{opacity: 0, y:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once: true}}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore tools that enhance your skills</h2>
        <div className='space-x-6 mt-16'>
          
            <a href="https://visual-force.vercel.app" className='border border-white px-8 py-3 rounded'>CF Analyzer</a>
            <a href="https://hyreai.vercel.app" className='bg-blue-500 px-8 py-3 rounded'>AI-Based Interview</a>
    
        </div>
      </motion.div>
    </div>
  )
}

export default Header
