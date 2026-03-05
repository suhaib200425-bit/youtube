import React, { useState } from 'react'
import './Profile.css'
import LeftBar from '../../Compones/LeftBar/LeftBar'
import { profile } from '../../assets/assets'
import VideoCard from '../../Compones/videoCard/VideoCard'
function Profile() {
    const list = ['Home', 'Video', 'Shorts']
    const [profilTabActive, setprofilTabActive] = useState('Home')
    return (
        <div className='Profile'>
            <LeftBar />
            <div className="ProfileContent">
                <div className="ps-0 pe-0 ps-sm-5 pe-sm-5">
                    <div className="ProfileBanner" style={{ backgroundImage: `url(${profile.banner})` }}></div>
                    <div className="MainProfileContent">
                        <div className="ProfileImage" style={{ backgroundImage: `url(${profile.profilePic})` }}></div>
                        <div className="ProfileDetails">
                            <h1 className='ProfileName'>{profile.channelName}</h1>
                            <div className="shotdescription">
                                {profile.username} .
                                {profile.videos} video .
                                {profile.subscribers} subscribers

                            </div>
                            <p className='Description'>{profile.description}</p>

                            <button className='SubscribeBtn'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="ps-5 pe-5 profileTab">
                    {
                        list.map(elem => {
                            return <div onClick={() => setprofilTabActive(elem)} className={profilTabActive == elem ? "tabItem ActivetabItem" : "tabItem"}>{elem}</div>
                        })
                    }
                </div>
                <hr className='p-0 m-0' />
                {

                    (profilTabActive == 'Home' || profilTabActive == 'Video') &&
                    <>
                        <div className="ProfileHed">

                            <h5 className=''>Video</h5>
                            <div className="View" onClick={() => {
                                setprofilTabActive('Video')
                            }}>View All</div>
                        </div>
                        <div className="row col-12 videoCards">
                            <div className="col-md-3 col-12 p-2">
                                <VideoCard Type={'Video'} Thumbnail='https://yt3.ggpht.com/proxy/_h_sTMBPKqGyElKgRKtIQZstLbUot27-jHHDXGNUzhx2zYcJQpHuf620mZ5vbSNeqgx_H0_1gVE1pfOIeYqrpSCwvj15EWkxy7guK-WR4rYzcWO4OFq7jGdAIOQhh0xgPg=w1152-h603-nd' />
                            </div>
                            <div className="col-md-3 col-12 p-2">
                                <VideoCard Type={'Video'} Thumbnail='https://i.ytimg.com/vi/B9lV_HfXk_U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAxsm2EWa0--ifEWwItKikMsez2Xw' />
                            </div>
                            <div className="col-md-3 col-12 p-2">
                                <VideoCard Type={'Video'} Thumbnail='https://i.ytimg.com/vi/o3IqOrXtxm8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCYE8M_cvBQcxOoHeQUpkH7Dj2llQ' />
                            </div>
                            <div className="col-md-3 col-12 p-2">
                                <VideoCard Type={'Video'} Thumbnail='https://yt3.ggpht.com/proxy/_h_sTMBPKqGyElKgRKtIQZstLbUot27-jHHDXGNUzhx2zYcJQpHuf620mZ5vbSNeqgx_H0_1gVE1pfOIeYqrpSCwvj15EWkxy7guK-WR4rYzcWO4OFq7jGdAIOQhh0xgPg=w1152-h603-nd' />
                            </div>
                        </div>
                    </>
                }



                {
                    (profilTabActive == 'Home' || profilTabActive == 'Shorts') &&
                    <>
                        <div className="ProfileHed">

                            <h5 className=''>Shorts</h5>
                            <div className="View" onClick={() => {
                                setprofilTabActive('Shorts')
                            }}>View All</div>
                        </div>
                        <div className="row col-12">
                            <div className="col-md-2 col-6 p-2">
                                <VideoCard Type={'Shorts'} Thumbnail='https://yt3.ggpht.com/proxy/_h_sTMBPKqGyElKgRKtIQZstLbUot27-jHHDXGNUzhx2zYcJQpHuf620mZ5vbSNeqgx_H0_1gVE1pfOIeYqrpSCwvj15EWkxy7guK-WR4rYzcWO4OFq7jGdAIOQhh0xgPg=w1152-h603-nd' />
                            </div>
                            <div className="col-md-2 col-6 p-2">
                                <VideoCard Type={'Shorts'} Thumbnail='https://i.ytimg.com/vi/B9lV_HfXk_U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAxsm2EWa0--ifEWwItKikMsez2Xw' />
                            </div>
                            <div className="col-md-2 col-6 p-2">
                                <VideoCard Type={'Shorts'} Thumbnail='https://i.ytimg.com/vi/o3IqOrXtxm8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCYE8M_cvBQcxOoHeQUpkH7Dj2llQ' />
                            </div>
                            <div className="col-md-2 col-6 p-2">
                                <VideoCard Type={'Shorts'} Thumbnail='https://yt3.ggpht.com/proxy/_h_sTMBPKqGyElKgRKtIQZstLbUot27-jHHDXGNUzhx2zYcJQpHuf620mZ5vbSNeqgx_H0_1gVE1pfOIeYqrpSCwvj15EWkxy7guK-WR4rYzcWO4OFq7jGdAIOQhh0xgPg=w1152-h603-nd' />
                            </div>
                            <div className="col-md-2 col-6 p-2">
                                <VideoCard Type={'Shorts'} Thumbnail='https://yt3.ggpht.com/proxy/_h_sTMBPKqGyElKgRKtIQZstLbUot27-jHHDXGNUzhx2zYcJQpHuf620mZ5vbSNeqgx_H0_1gVE1pfOIeYqrpSCwvj15EWkxy7guK-WR4rYzcWO4OFq7jGdAIOQhh0xgPg=w1152-h603-nd' />
                            </div>

                            <div className="col-md-2 col-6 p-2">
                                <VideoCard Type={'Shorts'} Thumbnail='https://i.ytimg.com/vi/o3IqOrXtxm8/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCYE8M_cvBQcxOoHeQUpkH7Dj2llQ' />
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Profile