import React from 'react'
import LeftBody from './LeftBody';
import RightBody from './RightBody';



const Hero = () => {
  return (
    <div className='bg-gray-100 h-screen w-7xl max-w-7xl flex mx-auto '>
      <LeftBody />
      <RightBody />
      
    </div>
  )
}

export default Hero;
