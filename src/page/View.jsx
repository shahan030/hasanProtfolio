import React from 'react'
import './View.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Mousewheel } from "swiper/modules";
import 'swiper/css'
import video1 from '../assets/video/video3.mp4'
import video2 from '../assets/video/video2.mp4'
import video3 from '../assets/video/video1.mp4'
import video4 from '../assets/video/video4.mp4'
import video5 from '../assets/video/video5.mp4'
import video6 from '../assets/video/video6.mp4'
import video7 from '../assets/video/video7.mp4'
import Skill from './Skill';
  const videos = [
        {
            src: video1,
            title: "Urban Challenge",
            date: "August 2, 2025",
        },
        {
            src: video2,
            title: "Urban Challenge",
            date: "August 2, 2025",
        },
        {
            src:video3,
             title: "Urban Challenge",
            date: "August 2, 2025",
        },
        {
            src:video4,
             title: "Urban Challenge",
            date: "August 2, 2025",
        },
        {
            src:video5,
             title: "Urban Challenge",
            date: "August 2, 2025",
        },
        {
            src:video6,
             title: "Urban Challenge",
            date: "August 2, 2025",
        },

    ]
const View = () => {
    const fontFormant = { fontFamily: "'Exo 2', sans-serif", }
  
  return (
    <div>
        <div className='rightup-glow'></div>
        <div className='leftdown-glow'></div>
        <div className='container view-page  '>
            <h1 className='text-white ' style={fontFormant}>MY BEST EDIT</h1>
            <div className='gradient-line-view'></div>
            <Swiper
            modules={[Mousewheel]}
            mousewheel={true}
             grabCursor={true}
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={40}
            speed={1000}
            className='video-slider'
            breakpoints={{
                575:{
                    spaceBetween:90,
                },

            }}
            >
            {
                videos.map((video, index)=>{
                    return (

                    
                    <SwiperSlide key={index} className='video-slide'>
                        <div className='video-box'>
                            <video src={video.src}
                            muted
                            autoPlay
                            loop
                            playsInline>

                            </video>

                        </div>

                    </SwiperSlide>
                    )
                })
            }

            </Swiper>
        </div>
        <Skill/>
    </div>
  )
}

export default View