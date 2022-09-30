import React from 'react'

import realestate from '../assets/realestate.jpg';
import workImg from '../assets/workImg.jpeg';


const Work = () => {
  return (
    <div name='work' className='wfull md:h-screen bg-[#1b1b1b] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Work</p>
                <p className='py-4'>Check out some of my recent work :)</p>
            </div>

            <div style={{backgroundImage:`url(${workImg}`}}
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React JS Application
                        </span>
                        <div>
                            <a href=''>
                                <button></button>
                            </a>
                            <a href=''>
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Work