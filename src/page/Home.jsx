import React from 'react'
import '../page/Home.css'
import hasan from '../assets/hasanblack.png'
import About from './About'

const Home = () => {
  const fontFormant = { fontFamily: "'Exo 2', sans-serif", }
  return (
    <div>
      <div className='home-page'>
        <div className='left-glow'></div>
        <div className='right-glow'></div>

        <div className='home-content container'>
          <div className='row align-items-center'>

            <div className='left-content col-lg-6 col-md-6'>
              <h5 className='text-white'>Hasan Basheer</h5>
              <div className='gradient-line'></div>
              <h1 className='text-white'>PROFESSIONAL VIDEO EDITOR</h1>
              <p className='text-white'>Making your videos look more cool.</p>

              <a
                href="https://api.whatsapp.com/send?phone=917736951512&text=Hello%20Hasan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-white"
                style={{ backgroundColor: "purple" }}
              >
                LET'S TALK
              </a>
            </div> {/* <-- left-content ends here */}

            <div className='right-content col-lg-6 col-md-6 text-center'>
              <img src={hasan} alt="noimg" className="img-fluid" />
            </div>

          </div>
        </div>

      </div>
       <About />
    </div>
   

  )
}

export default Home