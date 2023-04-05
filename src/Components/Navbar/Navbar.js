import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';
import image from '../../no-image.png'
import { Transition } from "@headlessui/react";



import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
const Navbar = () => {

    const [user] = useAuthState(auth)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        toast.success('Sign-Out Success.Bye Bye!!')

        
    };



    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;


    return (


        <div className=' sticky top-0 z-50 '>
            

            <nav className="py-4  ">
                <div className="max-w-7xl mx-auto  ">
                    <div className="flex items-center justify-between md:block">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                              
                                <h1 className='sp-style font-bold text-green-500'><span className='text-6xl text-green-700 sp-style'>Todo</span> <span  className='text-sm sp-style font-bold'>App</span></h1>
                            </div>
                            <div className="hidden md:flex justify-between md:ml-auto">
                                <div className="nav-item  flex items-baseline space-x-2 text-lg">
                                 
                                <NavLink
                                        to="/"
                                        className=" 
                                        font-bold sp-style nav-btn px-3 py-2 rounded-md text-xl "
                                    >
                                        Home
                                    </NavLink>
                                   
                                </div>
                                {
                                    
                                    user ?
                                        <>
                                           
                                            <div className='flex items-center '>
                                            <img className="w-15 h-10 rounded-full ml-2 mr-2 "src={userImg} alt="not found" />
                                                <h1 className='-mt-2 cursor-pointer text-xl font-bold border border-gray-500 rounded-sm text-blue-700 px-2 py-1' onClick={() => navigate(`dashboard/profile`)}>{user?.displayName?.split(' ')[0]}</h1>
                                                
                                            </div>
                                            <button onClick={logout} className='text-red-500 bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2'>Sign Out <FontAwesomeIcon icon={faSignOut} /></button>
                                        </>
                                        :
                                        <button className='text-blue-500 bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient  hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2'><Link to="/signin">Sign In <FontAwesomeIcon icon={faSignIn} /></Link> </button>

                                }

                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                       
                                      
                            {
                                user ?
                                    <>
                                      
                                        <div className='flex items-center '>
                                        <img className="w-15 h-10 rounded-full ml-2 mr-2 "src={userImg} alt="not found" />
                                        <h2 className='-mt-1 cursor-pointer text-xl font-bold border border-gray-500 rounded-sm text-blue-700 px-2 py-1' onClick={() => navigate(`dashboard/profile`)}>{user?.displayName?.split(' ')[0]}</h2>
                                        </div>
                                        <button onClick={logout} className='text-red-500bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2'>Sign Out <FontAwesomeIcon icon={faSignOut} /></button>
                                    
                                    </>
                                   
                                    :
                                    <button className='text-green-500 bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient  hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2'><Link to="/signin">Sign In <FontAwesomeIcon icon={faSignIn} /></Link> </button>

                            }
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-primary ml-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-400 transform"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink
                                    to="/"
                                    className="
                                    
                                     sp-style
                                    hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-bold"
                                >
                                    Home
                                </NavLink>

                            </div>
                           
                        </div>
                    )}
                </Transition>
            </nav>
           
        </div>
    );
};

export default Navbar;
