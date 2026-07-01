import React from 'react'
import './Skill.css'

const Skill = () => {
   const fontFormant = {
    fontFamily: "'Exo 2', sans-serif",
  }

  return (
    <div >
        <div className='container'>
          <div className="head-skill">
            <h1  style={fontFormant}>SKILL</h1>
             <div className='gradient-line-skill'></div>
          </div>
          <div className='content'>
              <div className='_Video Editing' style={fontFormant}>
                <h6>Video Editing</h6>
                <div >
                  <ul className='skill-bar'>
                    <li>Premiere Pro</li>
                    <li>After Effects</li>
                    <li>DaVinci Resolve</li>
                    <li>CapCut</li>
                    <li>Alight Motion</li>
                    <li>VN Editor</li>
                  </ul>
                </div>
              </div>
              <div className='_Video Editing' style={fontFormant}>
                <h6>Motion Graphics</h6>
                  <div >
                  <ul className='skill-bar'>
                    <li>Logo animations</li>
                    <li>Product animations</li>
                    <li>Social media motion design</li>
                  </ul>
                </div>
              </div>
              <div  className='_Video Editing' style={fontFormant}> 
                <h6>Graphic Design</h6>
                  <div >
                  <ul className='skill-bar'>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                     <li>Canva</li>
                      <li>PicsArt</li>
                  </ul>
                </div>
              </div>
              <div className='_Video Editing' style={fontFormant}>
                  <h6>Social Media Marketing</h6>
                  <div >
                  <ul className='skill-bar'>
                    <li>Content planning</li>
                    <li>Instagram & Facebook marketing</li>
                    <li>Reels creation</li>
                     <li>Campaign strategy</li>
                      <li>Engagement improvement</li>
                      <li>Product marketing visuals</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Skill