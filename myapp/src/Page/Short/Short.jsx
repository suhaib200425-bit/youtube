import React, { useEffect, useRef } from 'react'
import './Short.css'
import LeftBar from '../../Compones/LeftBar/LeftBar'
import { shorts } from '../../assets/assets'
function Short() {

  const videoRefs = useRef([])

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target

          if (entry.isIntersecting) {
            video.play()
            video.muted = false
          } else {
            video.pause()
            video.muted = true
          }
        })
      },
      { threshold: 0.6 }
    )

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video)
    })

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video)
      })
    }

  }, [])

  return (
    <div className='Short'>
      <LeftBar />
      <div className="ShortContent row">
        <div className="col-12 col-md-7 leftBox">
          <div className="shorts-container">
            {
              shorts.map((elem, index) => {
                return (
                  <div key={elem.id} className="short">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={elem.videoUrl}
                      loop
                      muted
                    ></video>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="col-0 col-md-5 rightBox">

        </div>
      </div>
    </div>
  )
}

export default Short