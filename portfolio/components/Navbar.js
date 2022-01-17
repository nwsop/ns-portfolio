import React from 'react'

export const Navbar = () => {
    return (
        <nav className="hover:shadow-inner shadow-2xl flex items-center justify-between flex-wrap bg-n-tan p-7">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-5xl tracking-tight mr-10 hover:text-black">N \ S</span>
            </div>
        
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-xl lg:flex-grow">
                    <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-white hover:underline mr-4">About Me</a>
                    <a href="#responsive-header" className="block mt-4 ml-6 lg:inline-block lg:mt-0 text-black-200 hover:text-white hover:underline mr-4">Projects</a>
                    <a href="#responsive-header" className="block mt-4 ml-6 lg:inline-block lg:mt-0 text-black-200 hover:text-white hover:underline mr-4">Education</a>
                    <a href="#responsive-header" className="block mt-4 ml-6 lg:inline-block lg:mt-0 text-black-200 hover:text-white hover:underline">Experience</a>
                    <a href="#responsive-header" className="block mt-4 ml-6 lg:inline-block lg:mt-0 text-black-200 hover:text-white hover:underline">Skills</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;