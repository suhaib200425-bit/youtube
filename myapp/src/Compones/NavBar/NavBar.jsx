import React from 'react'
import { Logo } from '../../assets/assets'
import './NavBar.css'
import { useYouTube } from '../../context/youtube'
import { useNavigate } from 'react-router-dom'
function NavBar() {
    const {setactivebar}=useYouTube()
    const Navigate=useNavigate()
    return (
        <div className='NavBar'>
            <div className="LeftBox">
                <div className="MenuBtn" onClick={()=>{
                    setactivebar(prev=>!prev)
                }}>
                    <svg fill='white' width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" /></svg>
                </div>
                <div className="AppLogo">
                    <img src={Logo} alt="" srcset="" />
                </div>
            </div>
            <div className="CenterBox">
                <div className="SearchBox">
                    <div className="SearchInput">
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="SearchIcon">
                        <svg width={25} height={25} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" /></svg>
                    </div>
                </div>
                <div className="MicIcon">
                    <svg width={25} height={25} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M320 64C267 64 224 107 224 160L224 288C224 341 267 384 320 384C373 384 416 341 416 288L416 160C416 107 373 64 320 64zM176 248C176 234.7 165.3 224 152 224C138.7 224 128 234.7 128 248L128 288C128 385.9 201.3 466.7 296 478.5L296 528L248 528C234.7 528 224 538.7 224 552C224 565.3 234.7 576 248 576L392 576C405.3 576 416 565.3 416 552C416 538.7 405.3 528 392 528L344 528L344 478.5C438.7 466.7 512 385.9 512 288L512 248C512 234.7 501.3 224 488 224C474.7 224 464 234.7 464 248L464 288C464 367.5 399.5 432 320 432C240.5 432 176 367.5 176 288L176 248z" /></svg>
                </div>
            </div>
            <div className="RightBox"> 
                <div className="SearchIcon_phone">
                    <svg width={25} height={25} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" /></svg>
                    
                </div>
                <div className="CreatePost">
                    <div className="Icon">
                        <svg width={25} height={25} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /></svg>
                    </div>
                    <div className="Text">Create</div>
                </div>
                <div className="Notification">
                    <svg width={30} height={30} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M320 64C302.3 64 288 78.3 288 96L288 99.2C215 114 160 178.6 160 256L160 277.7C160 325.8 143.6 372.5 113.6 410.1L103.8 422.3C98.7 428.6 96 436.4 96 444.5C96 464.1 111.9 480 131.5 480L508.4 480C528 480 543.9 464.1 543.9 444.5C543.9 436.4 541.2 428.6 536.1 422.3L526.3 410.1C496.4 372.5 480 325.8 480 277.7L480 256C480 178.6 425 114 352 99.2L352 96C352 78.3 337.7 64 320 64zM258 528C265.1 555.6 290.2 576 320 576C349.8 576 374.9 555.6 382 528L258 528z" /></svg>
                </div>
                <div className="NavBarProfile" onClick={()=>{
                    Navigate('/profile')
                }}>
                    <img src="https://yt3.ggpht.com/ytc/AIdro_kN0vHjIDhTA7B0t2l-8jw4du0Fp3Q4NWDxREtZ0wG6prM4O5dykKEJAxt14lhBl9HMMQ=s88-c-k-c0x00ffffff-no-rj" alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar