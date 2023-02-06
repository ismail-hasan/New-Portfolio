import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiHappyAlt } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';
import { TfiGallery } from 'react-icons/tfi';
import { FaUserTie } from 'react-icons/fa';
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="relative h-[90vh] md:flex" data-dev-hint="container">
                <input type="checkbox" id="menu-open" className="hidden" />
                {/* <label htmlFor="menu-open" className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label> */}
                <header className=" text-gray-100  flex justify-between sm:hidden" data-dev-hint="mobile menu bar">

                    <label htmlFor="menu-open" id="mobile-menu-button" className="m-2 z-10 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                        <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>
                </header>
                <aside id="sidebar" className=" text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                    <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">

                        <nav data-dev-hint="main navigation">
                            <div className='fixed text-white flex justify-center items-center flex-col py-5'>
                                <div className='justify-center items-center flex-col'>
                                    <img className='rounded-full h-20 w-20' src="https://images.pexels.com/photos/15076352/pexels-photo-15076352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <h1 className='text-[22px]'>Ismail Hossain</h1>
                                    <p className='text-[14px]'>Web Developer</p>
                                </div>
                                <div>
                                    <ul className='px-5 py-5'>
                                        <div className='flex items-center pt-5'>
                                            <AiFillHome className='text-[25px] mr-2' ></AiFillHome>
                                            <Link to="/home">About Us</Link> <br />
                                        </div>

                                        <span className='flex items-center pt-5'>
                                            <FaUserTie className='text-[25px] mr-2' ></FaUserTie>
                                            <Link to="/student">Services</Link> <br />
                                        </span>
                                        <span className='flex items-center pt-5'>
                                            <TfiGallery className='text-[25px] mr-2' ></TfiGallery>
                                            <Link to="/gallery">Contact Us</Link> <br />
                                        </span>
                                        <span className='flex items-center pt-5'>
                                            <GiTeacher className='text-[25px] mr-2' ></GiTeacher>
                                            <Link to="/teacher">All Sir</Link> <br />
                                        </span>
                                        <span className='flex items-center pt-5'>
                                            <BiHappyAlt className='text-[25px] mr-2' ></BiHappyAlt>
                                            <Link to="/success">Success Student</Link> <br />
                                        </span>

                                    </ul>
                                </div>
                            </div>

                        </nav>
                    </div>

                </aside>

            </div>
        </>
    );
};

export default Navbar;