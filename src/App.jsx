// Project: Portfolio
import { useState } from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import './App.css'

export default function App() {

  
  return (
  <>
  <Header/>
    <div className='App'>
      {/* About section */}
      <About/>

      {/* Skills Section */}
      
      <div className='skillSection'>
      <Skills/>
      </div>

      {/* Projects section */}
      <Projects/>

      {/* Contact section */}
      <Contact/>

     {/* Footer */}
     <Footer/>


    </div>
  </>

  )
}





