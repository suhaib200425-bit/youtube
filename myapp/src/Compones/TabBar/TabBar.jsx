import React, { useEffect, useState } from 'react'
import './TabBar.css'
import { useYouTube } from '../../context/youtube'
import { Category } from '../../assets/assets'
import axios from 'axios'
function TabBar({ API }) {
    const { ActiveTabBar, setActiveTabBar } = useYouTube()
    const [AllCategory, setAllCategory] = useState([])
    useEffect(() => {
        async function GetCategory() {
            const response =await axios.get(API)
            setAllCategory(response.data.items)
        }
        GetCategory()
    }, [])
    return (
        <div className='TabBar'>
            {
                AllCategory&&AllCategory.map(elem => {
                    return <div onClick={() => {
                        setActiveTabBar({
                            name:elem.snippet.title,
                            id:elem.id
                        })
                    }} key={elem.id} className={ActiveTabBar.name == elem.snippet.title ? "Item ItemActive" : "Item"} >{elem.snippet.title}</div>
                })
            }
        </div>
    )
}

export default TabBar