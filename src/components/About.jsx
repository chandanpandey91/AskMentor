import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Us</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Tech, Dedicated to Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={"https://media.gettyimages.com/id/866754354/photo/different-lifestyles-concept.jpg?s=612x612&w=0&k=20&c=C5MpW9wewFsXTM8h7nezEgP87UUD3gyW2tnsrKptMu0="} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>2+</p>
                    <p>Experience</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>5+</p>
                    <p>Team Members</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>400+</p>
                    <p>Question Solved</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>5+</p>
                    <p>Projects</p>
                </div>
            </div>
            <p className='my-10 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
