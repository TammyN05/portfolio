import {FaBars, FaTimes, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { useState } from 'react'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav (!nav)

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-3 bg-[#0c0c0c] text-white text-xs cursor-pointer'>
        {/* logo */}
        <div>
            <img src={Logo} alt="Logo img" style={{width: '40px'}}/> 
        </div>

        {/* menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        
    
         {/* hamburger */}
         <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars size={25}/> : <FaTimes size={25} />}
         </div>

         {/* Mobile menu */}
         <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-purple-800 flex flex-col justify-center items-center'}>
            <li className='py-6 text-2xl'>Home</li>
            <li className='py-6 text-2xl'>About</li>
            <li className='py-6 text-2xl'>Skills</li>
            <li className='py-6 text-2xl'>Work</li>
            <li className='py-6 text-2xl'>Contact</li>
        </ul>

         {/* social icons */}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-pink-600'>
             <a className='flex justify-between items-center w-full text-gray-300 text-lg ml-2'
             href='/'>
               Instagram <FaInstagram size={30}/>
             </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-blue-600'>
             <a className='flex justify-between items-center w-full text-gray-300 text-lg ml-2'
             href='/'>
              Linkedin <FaLinkedin size={30}/>
             </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-gray-800 '>
             <a className='flex justify-between items-center w-full text-gray-300 text-lg ml-2'
             href='/'>
              GitHub <FaGithub size={30}/>
             </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-green-800 '>
             <a className='flex justify-between items-center w-full text-gray-300 text-lg ml-2'
             href='/'>
              Mail to <HiOutlineMail size={30}/>
             </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-300 bg-yellow-600 '>
             <a className='flex justify-between items-center w-full text-gray-300 text-lg ml-2'
             href='/'>
             Resumate <BsFillPersonFill size={30}/>
             </a>
            </li>
            </ul>
          </div>
    </div>
  )
}

export default Navbar