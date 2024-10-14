import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState(true);

    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-16 shadow h-16 bg-white fixed top-0 left-0'>
            <div className="flex justify-between items-center h-16">
                <div >
                    <Link to="/">
                        <h1 className=" font-bold text-sm md:text-xl  uppercase ">
                            <span className=" bg-black text-white  drop-shadow-lg p-1">
                                Hidden
                            </span>
                            <span className=" drop-shadow-lg p-1">
                                Horizon
                            </span>
                        </h1>
                    </Link>
                </div>
                {/* menu item desktop */}
                <div className='hidden md:flex'>
                    <ul className='flex space-x-6'>
                        <Link to="/">
                            <li className=" cursor-pointer font-bold text-gray-700 hover:text-yellow-500">Home</li>
                        </Link>
                        <Link to="/addCards">
                            <li className="cursor-pointer font-bold text-gray-700 hover:text-yellow-500">Add Places</li>
                        </Link>
                        <Link to="/contact">
                            <li className="cursor-pointer font-bold text-gray-700 hover:text-yellow-500">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className='text-2xl font-bold md:hidden ' onClick={() => setMenu(!menu)}>
                    {
                        menu ? <IoMenu /> : <RxCross1 />
                    }
                </div>
            </div>
            {/* menu item mobile */}
            <div className={menu ? "hidden" : ' md:hidden flex justify-center'}>
                <ul>
                    <li className="cursor-pointer font-bold text-gray-700 hover:text-yellow-500">Home</li>
                    <li className="cursor-pointer font-bold text-gray-700 hover:text-yellow-500">Explore</li>
                    <li className="cursor-pointer font-bold text-gray-700 hover:text-yellow-500">Feedback</li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar