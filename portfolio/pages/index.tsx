import Head from 'next/head'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Work from "../components/Work"
import Experience from "../components/Experience"
import Links from "../components/Links"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <html>
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/> 
        </head>
        <body className='bg-body text-white font-poppins'>
          <div className='w-100'>
            <Navbar />
            <Hero />
            <div id="work">
            <Work />
            </div>

            <div id="experience">
            <Experience />
            </div>
            <div id="skills">
            <Skills />
            </div>
            <div id="links">
            <Links />
            </div>
          </div>
        </body>
    </html>
  )
}