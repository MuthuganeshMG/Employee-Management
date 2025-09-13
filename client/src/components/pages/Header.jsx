import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import axios from 'axios';

function Header({ name, img, handleLogout }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const handleLogouts = async () => {
    //     try {
    //         // Make the logout request to the server
    //         const response = await axios.post('http://localhost:3030/auth/logout', {}, {
    //             withCredentials: true // Ensure cookies are sent with the request
    //         });
    
    //         // After successful logout, clear any saved credentials (e.g., tokens)
    //         localStorage.removeItem('token'); // If you are storing a token in localStorage
    //         // setIsLoggedIn(false);  // Set to false after logout to reflect the logged-out state
    //         handleLogout();
    //         navigate('/signin'); // Redirect to signin page after logout
    //         setIsMenuOpen(false);  // Close the menu after logging out
    //     } catch (error) {
    //         console.error('Logout failed:', error);
    //     }
    // };
    

    return (
        <div className="flex flex-col">
            <div className="hidden md:flex w-full bg-blue-600 h-16 items-center justify-between px-4">
                <div className="flex items-center">
                    <img
                        src={img ? `http://localhost:3030/uploads/${img}` : 'assets/logo.jpg'}
                        alt="profile image"
                        className="rounded-full w-20 h-20 p-3" />
                    <div className="flex flex-col ml-4">
                        <h1 className="font-extrabold text-white">
                            Solar Attendance
                        </h1>
                        <span className="text-white">
                            {name || 'Guest'}
                        </span>
                    </div>
                </div>
                <nav className="flex gap-8 ">
                    <Link
                        to="/home"
                        className="flex items-center px-2 h-8 text-white hover:bg-orange-500 rounded"
                    >
                        Home
                    </Link>
                    <Link
                        to="/attendance"
                        className="flex items-center px-2 h-8 text-white hover:bg-orange-500 rounded"
                    >
                        Attendance
                    </Link>
                    <Link
                        to="/present"
                        className="flex items-center px-2 h-8 text-white hover:bg-orange-500 rounded">
                        Present
                    </Link>
                    <Link
                        to="/place"
                        className="flex items-center px-2 h-8 text-white hover:bg-orange-500 rounded">
                        Services
                    </Link>
                    <Link
                        to="/profile"
                        className="flex items-center px-2 h-8 text-white hover:bg-orange-500 rounded">
                        Profile
                    </Link>
                    <Link
                        to="/about"
                        className="flex items-center px-2 h-8 text-white hover:bg-orange-500 rounded">
                        About
                    </Link>
                    <Link
                        to="/signin"
                        className="flex items-center px-2 h-8 text-white hover:bg-orange-500 rounded"
                        onClick={handleLogout}>
                        Logout
                    </Link>
                </nav>
            </div>

            {/* Mobile navbar with hamburger menu */}
            <div className="md:hidden flex items-center bg-blue-600 h-16 px-4 justify-between">
                {/* Logo and User info */}
                <div className="flex items-center">
                    <img
                        src={img ? `http://localhost:3030/uploads/${img}` : 'assets/logo.jpg'}
                        alt="profile image"
                        className="rounded-full w-20 h-20 p-3" />
                    <div className="flex flex-col ml-4">
                        <h1 className="font-extrabold text-white">
                            Solar Attendance
                        </h1>
                        <span className="text-white">
                            {name || 'Guest'}
                        </span>
                    </div>
                </div>

                {isMenuOpen ? (
                    <HiMenuAlt1
                        onClick={toggleMenu}
                        className="text-white cursor-pointer"
                        size={30}
                    />
                ) : (
                    <HiMenuAlt3
                        onClick={toggleMenu}
                        className="text-white cursor-pointer"
                        size={30}
                    />
                )}
            </div>

            {/* Side Menu for Mobile */}
            <div
                className={`fixed left-0 top-0 h-full bg-gradient-to-r from-blue-300 to-fuchsia-300 text-white transition-transform duration-300 ${isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
                    } md:hidden`}
                style={{ minWidth: '' }}
            >
                <nav className="flex flex-col gap-2 p-3">
                    <Link
                        to="/home"
                        className="px-2 w-fit shadow hover:bg-orange-500 rounded"
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="/attendance"
                        className="px-2 w-fit shadow hover:bg-orange-500 rounded"
                        onClick={toggleMenu}
                    >
                        Attendance
                    </Link>
                    <Link
                        to="/present"
                        className="px-2 w-fit shadow hover:bg-orange-500 rounded"
                        onClick={toggleMenu}
                    >
                        Present
                    </Link>
                    <Link
                        to="/place"
                        className="px-2 w-fit shadow hover:bg-orange-500 rounded"
                        onClick={toggleMenu}
                    >
                        Services
                    </Link>
                    <Link
                        to="/profile/:id"
                        className="px-2 w-fit shadow hover:bg-orange-500 rounded"
                        onClick={toggleMenu}
                    >
                        Profile
                    </Link>
                    <Link
                        to="/about"
                        className="px-2 w-fit shadow hover:bg-orange-500 rounded"
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                    <Link
                        to="/signin"
                        className="flex items-center px-2 h-8 text-white hover:bg-orange-500 rounded"
                        onClick={handleLogout}
                    >
                        Logout
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;
