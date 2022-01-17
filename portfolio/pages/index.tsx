import Head from 'next/head'
import Navbar from "../components/Navbar"
import About from "../components/About"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Experience from "../components/Experience"
import Skills from "../components/Skills"


export default function Home() {
  return (
    <div className="h-screen bg-violet ">
      { /* Navbar */ }
      <div className="static border-b-2 invert">
        <Navbar />
      </div>

      { /* Main Sections */ }
      <div>
        <div className="lg:drop-shadow-2xl shadow-red-800 md:shadow-none">
          <About />
        </div>

        <div className="lg:drop-shadow-2xl shadow-red-800 md:shadow-none">
          <Projects />
        </div>

        <div className="lg:drop-shadow-2xl shadow-red-800 md:shadow-none">
          <Education />
        </div>

        <div className="lg:drop-shadow-2xl shadow-red-800 md:shadow-none">
          <Experience />
        </div>
      </div>

      <div className="">
          <Skills />
        </div>

    </div>
  )
}
