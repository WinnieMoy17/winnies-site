import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useState, useEffect } from 'react';

function App() {
  return (
    <>
    <div className="relative min-h-screen bg-[#F5E3FF] text-black overflow-hidden">
      <div className="fixed top-[-150px] left-[-150px] w-[700px] h-[700px] bg-pink-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="fixed top-[200px] right-[-200px] w-[500px] h-[500px] bg-yellow-200 rounded-full filter blur-3xl opacity-10"></div>
      <div className="fixed bottom-[-300px] left-[50%] transform -translate-x-1/2 w-[800px] h-[600px] bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
      <main className="relative mx-[120px]">
        <NavBar />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      </div>
    </>
  )
}

export default App
