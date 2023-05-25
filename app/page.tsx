import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Metadata } from 'next'

const page = () => {
  return <>

    <Hero />
    <Projects />

  </>
}

export default page