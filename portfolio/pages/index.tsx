import Head from 'next/head'
import Navbar from "../components/Navbar"
import About from "../components/About"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Skills from "../components/Skills"


export default function Home() {
  return (
    <div className="h-screen bg-black">
      { /* Navbar */ }
      <div className="static">
        <Navbar />
      </div>

      <div className='bg-gray-900 w-100 h-1/2'>

      </div>

    </div>
  )
}
