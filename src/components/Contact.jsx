import React from 'react'

const Contact = () => {
    return (
      <div name='contact' className='w-full h-screen bg-[#181818] flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/e99e6780-41dd-4a1f-8c57-c9d5f0222679" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-purple-600 text-gray-300'>Contact</p>
                  <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - tammy.html@gmail.com</p>
              </div>
              <input className='bg-[#ccd6f6] p-2 rounded-sm' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6] rounded-sm' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] p-2 rounded-sm' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center rounded-sm'>Let's Collaborate</button>
          </form>
      </div>
    )
  }

export default Contact