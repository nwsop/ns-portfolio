import React from 'react'

export const Navbar = () => {
    return (
        
        <header className='py-6 shadow-2xl black'>
        <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
            <div className='text-3xl font-bold'><span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>N\S</span></div>
            <div className='hidden md:flex space-x-12 items-center text-xl'>
                <a href="#" className='text-selected-text'>Home</a>
                <a href="#work" className='hover:text-orange-800'>My Projects</a>
                <a href="#experience" className='hover:text-orange-800'>Experience</a>
                <a href="#skills" className='hover:text-orange-800'>Skills</a>
            </div>

            <div className='md:hidden'>
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/></svg>
            </div>

        </div>
        </header>

    )
}

export default Navbar;