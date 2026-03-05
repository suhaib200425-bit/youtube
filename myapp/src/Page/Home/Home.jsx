import React from 'react'
import './Home.css'
import { DisplayData } from '../../assets/assets'
import TabBar from '../../Compones/TabBar/TabBar'
import LeftBar from '../../Compones/LeftBar/LeftBar';
function Home() {
    function formatViews(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(".0", "") + "M";
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(".0", "") + "K";
        }
        return num;
    }

    function timeAgo(dateString) {
        const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);

        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        for (let key in intervals) {
            const value = Math.floor(seconds / intervals[key]);
            if (value >= 1) {
                return value + " " + key + (value > 1 ? "s" : "") + " ago";
            }
        }

        return "Just now";
    }
    return (
        <div className='Home'>
            <LeftBar />
            <div className="ContentBox row">
                <TabBar />
                
                {
                    DisplayData.map(elem => {
                        return <div className="col-12 col-md-4 p-2">
                            <div className="CARD">
                                <div className="media">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${elem.videoId}/?iv_load_policy=3&autoplay=1&fs=0&disablekb=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=${elem.videoId}`}
                                        className="reel-video"
                                        frameBorder="0"
                                        allow="autoplay"
                                        allowFullScreen
                                    />
                                    <img className='thumbnail' src={elem.thumbnail} alt="" srcset="" />
                                </div>
                                <div className="BottomDetails">
                                    <div className="channelProfile">
                                        <img src={elem.channel.channelProfilePic} alt="" srcset="" />

                                    </div>
                                    <div className="ChannelDetails">
                                        <h6 className="description">{elem.description}</h6>
                                        <p className='channelName'>{elem.channel.channelName}</p>
                                        <div className="ViewAndPost">

                                            <p className=''>{formatViews(elem.views)}</p>
                                            <p>  {timeAgo(elem.uploadedAt)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Home