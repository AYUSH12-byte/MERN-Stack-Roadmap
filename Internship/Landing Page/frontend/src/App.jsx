import React from 'react'
import './App.css'
import Navbar from './pages/navbar'
import Hero from './pages/hero/Hero'
import Features from './pages/Feature/Features'
import Preference from './pages/preference/Preference'
import Steps from './pages/Step/Steps'
import Mission from './pages/Mission/Mission'
import Footer from './pages/Flooter/Footer'


const App = () => {
  return (
    <div className='bg-gray-100 '>
      <Navbar />
      <Hero />
      <Features />
      <Preference />
      <Steps/>
      <Mission/>
      <Footer/>
    </div>
  )
}

export default App
