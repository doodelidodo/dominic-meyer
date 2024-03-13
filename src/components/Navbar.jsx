import React from 'react';
import {useState} from "react";
import { Link } from 'react-scroll';

import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000300] text-white z-20">
            <Link to='home' smooth={true} duration={500}>
                <div className='cursor-pointer'>
                    <h1 className="w-full text-xl sm:text-3xl font-bold text-[#00df9a]">DOMINIC MEYER.</h1>
                </div>
            </Link>


            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500} offset={-40}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500} offset={-80}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500} offset={-80}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleNav} className="md:hidden z-10 cursor-pointer">
                {!nav ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/>}

            </div>
            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#000300] flex flex-col justify-center items-center"}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500} offset={-80}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500} offset={-80}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300"
                           href="https://www.linkedin.com/in/dominic-meyer-112b00141" target='_blank' rel='noreferrer'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-900">
                        <a className="flex justify-between items-center w-full text-gray-300"
                           href="https://github.com/doodelidodo" target='_blank' rel='noreferrer'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                           href="https://www.instagram.com/thebroccoholic/" target='_blank' rel='noreferrer'>
                            Instagram <FaInstagram size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <Link to='contact' smooth={true} duration={500} offset={-40} className="flex justify-between items-center w-full text-gray-300"
                           href="/">
                            E-Mail <HiOutlineMail size={30}/>
                        </Link>
                    </li>
                </ul>

            </div>

        </div>
    );
}

export default Navbar