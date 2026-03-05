import React from 'react'
import './TabBar.css'
import { useYouTube } from '../../context/youtube'
function TabBar() {
    const {ActiveTabBar,setActiveTabBar}=useYouTube()
    const list = [
        'All',
        'News',
        'Live',
        'Music',
        'Gaming',
        'Ai',
        'Flutter',
        'Source Code',
        'Mix',
        'Tamil Movies',
        'News',
        'Live',
        'Music',
        'Gaming',
        'Ai',
        'Flutter',
        'Source Code',
        'Mix',
        'Tamil Movies',
        'News',
        'Live',
        'Music',
        'Gaming',
        'Ai',
        'Flutter',
        'Source Code',
        'Mix',
        'Tamil Movies'
    ]
  return (
    <div className='TabBar'>
{
    list.map(elem=>{
        return <div onClick={()=>{
            setActiveTabBar(elem)
        }} className={ActiveTabBar==elem?"Item ItemActive":"Item"} >{elem}</div>
    })
}
    </div>
  )
}

export default TabBar