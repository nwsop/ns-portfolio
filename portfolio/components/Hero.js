import React from 'react'
import Image from 'next/image'

import backing from "../public/img/face.jpg"

const Hero = () => {
    return (
        <div className="container mt-16 flex justify-between items-center mx-auto px-8 w-full">
            <div className="flex flex-wrap md:flex-nowrap">
                <nav className='inline-block left-10 lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block'>
                    <div className='absolute left-50 transform -translate-x-1/2 space-y-6 mt-36'>
                        <a className='nav-dot block w-7 h-7 rounded-tl-full border-4 border-nav bg-body hover:invert' href="#">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Top</span>
                        </a>

                        <a className='nav-dot block w-7 h-7 rounded-br-full border-4 border-nav bg-body hover:invert' href="#work">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Projects</span>
                        </a>

                        <a className='nav-dot block w-7 h-7 rounded-tr-full border-4 border-nav bg-body hover:invert' href="#experience">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Experience</span>
                        </a>

                        <a className='nav-dot block w-7 h-7 rounded-bl-full border-4 border-nav bg-body hover:invert' href="#skills">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Skills</span>
                        </a>

                        <a className='nav-dot block w-7 h-7 rounded-t-lg border-4 border-nav bg-body hover:invert' href="#links">
                            <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>Links</span>
                        </a>
                    </div>
                </nav>

                <div className='flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36'>
                    <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left'><span className='text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello,</span> <br />I enjoy building things.</h1>
                    
                    <div class="w-full flex justify-center md:justify-start">
                        <a href='#work'>
                        <button class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 rounded-3xl hover:bg-orange-500 -z-1">
                            <div>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                    <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                                </svg>								
                            </div>
                            
                            <span>View my projects</span>
                        </button>
                        </a>
                    </div>
                
                </div>
                <div className='hidden md:hidden lg:block absolute pointer-events-none'>
                <Image className='opacity-10 hidden md:hidden lg:block rounded-xl pr-40'
			    src={backing}
				alt="Picture of a face"
				width={1500}
				height={800}
                />
                </div>
            </div>
        </div>
        
        
    )
}

export default Hero
