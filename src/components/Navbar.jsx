import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import { useState } from 'react'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav (!nav)

  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-3 bg-[#cea7e8] text-gray-800 text-xs cursor-pointer'>
        {/* logo */}
        <div>
            <img src={Logo} alt="Logo img" style={{width: '30px'}}/> 
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
            <FaBars />
         </div>
         {/* Mobile menu */}
         <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#cea7e8] flex flex-col justify-center items-center'}>
            <li className='py-6 text-2xl'>Home</li>
            <li className='py-6 text-2xl'>About</li>
            <li className='py-6 text-2xl'>Skills</li>
            <li className='py-6 text-2xl'>Work</li>
            <li className='py-6 text-2xl'>Contact</li>
        </ul>

         {/* social icons */}

    </div>
  )
}

export default Navbar