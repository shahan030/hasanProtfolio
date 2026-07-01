import React from 'react'
import './About.css'
import View from './View'

const About = () => {
  const fontFormant = {
    fontFamily: "'Exo 2', sans-serif",
  }

  return (
    <div>
      <div className='d-flex flex-column align-items-center justify-content-center my-5'>
        <h1
          className="text-white"
          style={{ ...fontFormant, fontSize: '3rem' }}
        >
          ABOUT
        </h1>
         <div className='gradient-line-about'></div>

        <div className=' aboutText' style={fontFormant}><p>A creative multimedia professional with strong expertise in video editing, motion graphics, product marketing, and graphic design. Skilled at creating engaging content for brands and managing end-to-end social media campaigns</p></div>
      </div>
      <div>
        
      </div>


      <View />
    </div>
  )
}

export default About