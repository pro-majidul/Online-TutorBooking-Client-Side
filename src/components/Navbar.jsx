import React, { useEffect, useState } from 'react';
import { GiTeacher } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, setUser, logOutUser } = useUsers();
    const [theme, setTheme] = useState('light')

    const handeltheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);

    }, [theme])

    const handelLogOut = () => {
        logOutUser()
            .then(result => {
                setUser(result);

                toast.success('user logOut SuccessFull')
            })
            .catch(error => {

                toast.error(`${error.code}`)
            })
    }

    return (
        <div className='bg-[#ff7aac] bg-opacity-65 z-10 fixed w-full md:px-10'>
            <div className="navbar w-full max-w-7xl mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  btn-md btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-48 p-2 shadow">

                            <div className='flex items-center justify-center'>
                                <input onClick={handeltheme} type="checkbox" className="toggle" defaultChecked />
                            </div>
                            <NavLink to='/' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Home</NavLink>
                            <NavLink to='/find-tutors' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Find Tutors</NavLink>
                           
                            {
                                user && <>
                                    <NavLink to='/add-tutorial' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Add Tutorials</NavLink>
                                    <NavLink to='/my-tutorial' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> My Tutorials
                                    </NavLink>
                                    <NavLink to='/booked-tutor' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> My booked tutors</NavLink>
                                </>
                            }
                             <NavLink to='/contact' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Contact Us</NavLink>
                             <NavLink to='/support' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Support</NavLink>

                            {
                                user && user ? <div className="dropdown">
                                    <div tabIndex={0}  >
                                        <img className='md:w-12 w-8  rounded-full' referrerPolicy='no-referrer' src={user.photoURL} alt="" />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 mt-3  p-2 shadow">
                                        <li className='md:p-2 text-white bg-purple-500 p-2 md:text-xl md:font-medium'>{user.displayName}</li>
                                    </ul>
                                </div> : ''
                            }

                        </ul>
                    </div>
                    <NavLink to='/' className='flex items-center md:text-4xl text-3xl  gap-1 md:font-bold text-black'>
                        <GiTeacher size={28} />Tutors
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <NavLink to='/' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Home</NavLink>
                        <NavLink to='/find-tutors' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Find Tutors</NavLink>
                       
                        {
                            user && <>
                                <NavLink to='/add-tutorial' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Add Tutorials</NavLink>
                                <NavLink to='/my-tutorial' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> My Tutorials
                                </NavLink>
                                <NavLink to='/booked-tutor' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> My booked tutors</NavLink>
                            </>
                        }
                         <NavLink to='/contact' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Contact Us</NavLink>
                         <NavLink to='/support' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}> Support</NavLink>
                    </ul>
                </div>
                <div className="navbar-end items-center">
                    <div className='hidden md:block mr-4'>
                        <input onClick={handeltheme} type="checkbox" className="toggle" defaultChecked />
                    </div>

                    {
                        user && user ? <div className='flex gap-1 items-center justify-center'>
                            <div className="dropdown hidden md:block">
                                <div tabIndex={0}  >
                                    <img className='md:w-12 w-8  rounded-full' referrerPolicy='no-referrer' src={user.photoURL} alt="" />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-green-500 rounded-box z-[1] w-24 md:w-48 mt-1  p-2 shadow">
                                    <li className='md:p-2 text-white md:text-xl md:font-medium'>{user.displayName}</li>
                                </ul>
                            </div>
                            <button onClick={handelLogOut} className="font-medium text-lg text-green-500 hover:text-green-300">Logout</button>
                        </div> : <div>
                            <NavLink to='/login' className={({ isActive }) => isActive ? ' font-medium text-lg text-green-500 hover:text-green-300' : ' font-medium text-lg text-white hover:text-green-300 '}>Login</NavLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;