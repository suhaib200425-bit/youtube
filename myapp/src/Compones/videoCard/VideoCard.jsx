import React from 'react'
import './VideoCard.css'
function VideoCard({ Thumbnail,Type }) {
    return (
        <div className='VideoCard'>
            <div className="VideoBanner" style={{ height:Type=='Video'?'150px':'250px', backgroundImage: `url(${Thumbnail})` }}>
            </div>
            <div className="VideoDescription">
                Build & Deploy Full Stack AI Mock Interview App with Next.js | React, Drizzle ORM, Gemini AI, Clerk
            </div>
            <div className="VideoOther">
                29K views
                1 year ago</div>
        </div>
    )
}

export default VideoCard