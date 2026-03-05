import React from 'react'
import './Home.css'
import { DisplayData } from '../../assets/assets'
import TabBar from '../../Compones/TabBar/TabBar'
import LeftBar from '../../Compones/LeftBar/LeftBar';
import VideoCard from '../../Compones/videoCard/VideoCard';
import { useNavigate } from 'react-router-dom';
function Home() {
    const Navigate=useNavigate()
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
                    DisplayData.splice(0,4).map(elem => {
                        return <div className="col-12 col-md-3 p-2">
                            <div className="CARD" onClick={()=>{
                                Navigate('/watch/100')
                            }}>
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
                <div className="row col-12 m-0 p-">
                    <div className="col-md-2 col-6 p-sm-2 p-1">
                        <VideoCard Type={'Shorts'} Thumbnail='https://yt3.ggpht.com/proxy/_h_sTMBPKqGyElKgRKtIQZstLbUot27-jHHDXGNUzhx2zYcJQpHuf620mZ5vbSNeqgx_H0_1gVE1pfOIeYqrpSCwvj15EWkxy7guK-WR4rYzcWO4OFq7jGdAIOQhh0xgPg=w1152-h603-nd' />
                    </div>
                    <div className="col-md-2 col-6 p-sm-2 p-1">
                        <VideoCard Type={'Shorts'} Thumbnail='https://i.ytimg.com/vi/B9lV_HfXk_U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAxsm2EWa0--ifEWwItKikMsez2Xw' />
                    </div>
                    <div className="col-md-2 col-6 p-sm-2 p-1">
                        <VideoCard Type={'Shorts'} Thumbnail='https://i.ytimg.com/vi/o3IqOrXtxm8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCYE8M_cvBQcxOoHeQUpkH7Dj2llQ' />
                    </div>
                    <div className="col-md-2 col-6 p-sm-2 p-1">
                        <VideoCard Type={'Shorts'} Thumbnail='https://yt3.ggpht.com/proxy/_h_sTMBPKqGyElKgRKtIQZstLbUot27-jHHDXGNUzhx2zYcJQpHuf620mZ5vbSNeqgx_H0_1gVE1pfOIeYqrpSCwvj15EWkxy7guK-WR4rYzcWO4OFq7jGdAIOQhh0xgPg=w1152-h603-nd' />
                    </div>
                    <div className="col-md-2 col-6 p-sm-2 p-1">
                        <VideoCard Type={'Shorts'} Thumbnail='https://yt3.ggpht.com/proxy/_h_sTMBPKqGyElKgRKtIQZstLbUot27-jHHDXGNUzhx2zYcJQpHuf620mZ5vbSNeqgx_H0_1gVE1pfOIeYqrpSCwvj15EWkxy7guK-WR4rYzcWO4OFq7jGdAIOQhh0xgPg=w1152-h603-nd' />
                    </div>

                    <div className="col-md-2 col-6 p-sm-2 p-1">
                        <VideoCard Type={'Shorts'} Thumbnail='https://i.ytimg.com/vi/o3IqOrXtxm8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCYE8M_cvBQcxOoHeQUpkH7Dj2llQ' />
                    </div>
                </div>
                {
                    DisplayData.splice(3,6).map(elem => {
                        return <div className="col-12 col-md-3 p-2">
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