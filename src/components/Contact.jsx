import React from 'react'
import Title from './Title'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='flex flex-col pb-10 mx-auto'>
      <div className='flex justify-center items-center flex-col w-full'>
        <Title>Contact</Title>
        <p className='p-2 mb-4 bg-transparent border-2 rounded-md border-slate-900 dark:border-slate-200'>+62 895619393712</p>
        <p className='p-2 mb-4 bg-transparent border-2 rounded-md border-slate-900 dark:border-slate-200'>kelvin.adiyanto28@gmail.com</p>
        <div className='flex gap-4'>
          <div className='p-2 mb-4 bg-transparent border-2 rounded-md border-slate-900 dark:border-slate-200 hover:bg-slate-500 dark:hover:bg-slate-700'>
            <a href="https://github.com/KelvinAdiyanto">
              <FaGithub />
            </a>
          </div>
          <div className='p-2 mb-4 bg-transparent border-2 rounded-md border-slate-900 dark:border-slate-200 hover:bg-slate-500 dark:hover:bg-slate-700'>
            <a href="https://www.linkedin.com/in/kelvin-adiyanto-aa9095250/">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact