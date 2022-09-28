import React from 'react'
import './Home.css'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#181818]'>

    {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-purple-500'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Tammy</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I´m a Front-End Web Developer</h2>
      <p className='text-gray-400 py-4 max-w-[700px]'>I am a creative in the area of web design and development. Pali Pali Digital is my personal brand that was born thanks to the desire to help all those who need to digitize their business with a modern and converting website.</p>
      <div>
        <button className='btn-grad group'>View Work
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3' size={20}/>
          </span>
        </button>       
      </div>
      </div>
    </div>
  )
}

export default Home