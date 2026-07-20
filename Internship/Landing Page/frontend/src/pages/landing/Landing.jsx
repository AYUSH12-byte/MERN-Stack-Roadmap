import React from 'react'
import Hero from './hero/Hero'
import Features from './Feature/Features'
import Preference from './preference/Preference'
import Mission from './Mission/Mission'
import Steps from './Step/Steps'
// import Hero from '../hero/Hero'
// import Features from '../Feature/Features'
// import Preference from '../preference/Preference'
// import Steps from '../Step/Steps'
// import Mission from '../Mission/Mission'

const Landing = () => {
  return (
    <div>
          <Hero />
          <Features />
          <Preference />
          <Steps />
          <Mission />
      
    </div>
  )
}

export default Landing
