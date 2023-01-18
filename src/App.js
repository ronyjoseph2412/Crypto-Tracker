import './App.css'
import { useState } from 'react'
import { Hero } from './Components/Hero'
import { Navbar } from './Components/Navbar'
import { PricesLanding } from './Components/Prices/PricesLanding'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='md:bg-gradient-to-r md:from-[#F8FAFC] md:to-[#f8fafc1a]'>
        <Hero />
        <PricesLanding />
      </div>
      <Footer />

    </>
  )
}

export default App