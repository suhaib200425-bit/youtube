import React, { useState } from 'react'
import { useYouTube } from '../../context/youtube'
import { channels } from '../../assets/assets'
import './LeftBar.css'
import { useNavigate } from 'react-router-dom'
function LeftBar() {
    const Navigate=useNavigate()
    const [dispaly, setdisplay] = useState(false)
    const { activebar,ActiveLeftBar,setActiveLeftBar,setactivebar } = useYouTube()

    return (
        <div
            className="LeftBar"
            style={{ width: activebar ? "215px" : "max-content" }}
        >
            {
                !activebar ?
                    <div className="Unactive">
                        <div className={ActiveLeftBar=='Home'?"IconBtn ActiveColor":"IconBtn"} onClick={()=>{
                            setActiveLeftBar('Home')
                            Navigate('/')
                            }}>
                            <svg width={30} height={30} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" /></svg>
                            <p>Home</p>
                        </div>
                        <div className={ActiveLeftBar=='Short'?"IconBtn ActiveColor":"IconBtn"} onClick={()=>{
                            setActiveLeftBar('Short')
                            Navigate('/shorts')
                        }}>
                            <svg width={30} height={30} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M64 480L64 272L200.2 272C213.7 251.8 232.2 235.2 253.9 224L64 224L64 189.7C64 154.4 92.7 125.7 128 125.7L128.1 125.7C129.3 109.1 143.1 96 160 96L192 96C208.9 96 222.7 109.1 223.9 125.7L256 125.7L307.2 101.9C315.6 98 324.8 95.9 334.1 95.9L512 96C547.3 96 576 124.7 576 160L576 224L386 224C407.7 235.2 426.2 251.8 439.7 272L575.9 272L575.9 480C575.9 515.3 547.2 544 511.9 544L128 544C92.7 544 64 515.3 64 480zM320 256C284.9 254.9 252.1 272.9 234.2 303.1C216.3 333.3 216.3 370.8 234.2 401C252.1 431.2 284.9 449.2 320 448.1C355.1 449.2 387.9 431.2 405.8 401C423.7 370.8 423.7 333.3 405.8 303.1C387.9 272.9 355.1 254.9 320 256z" /></svg>
                            <p>Short</p>
                        </div>
                        <div className={ActiveLeftBar=='Sub'?"IconBtn ActiveColor":"IconBtn"} onClick={()=>setActiveLeftBar('Sub')}>
                            <svg width={30} height={30} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" /></svg>
                            <p>Sub</p>
                        </div>
                        <div className={ActiveLeftBar=='Profile'?"IconBtn ActiveColor":"IconBtn"} onClick={()=>{
                            setActiveLeftBar('Profile')
                            Navigate('/profile')
                        }}>
                            <svg width={30} height={30} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M463 448.2C440.9 409.8 399.4 384 352 384L288 384C240.6 384 199.1 409.8 177 448.2C212.2 487.4 263.2 512 320 512C376.8 512 427.8 487.3 463 448.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 336C359.8 336 392 303.8 392 264C392 224.2 359.8 192 320 192C280.2 192 248 224.2 248 264C248 303.8 280.2 336 320 336z"/></svg><p>Profile</p>
                        </div>
                    </div> :
                    <div className="Active">
                        <div className={ActiveLeftBar=='Home'?"IconBtn ActiveColor":"IconBtn"} onClick={()=>{
                            console.log('Home');
                            
                            setActiveLeftBar('Home')
                            Navigate('/')
                        }}>
                            <svg width={25} height={25} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" /></svg>
                            <h6 className='ps-3'>Home</h6>
                        </div>
                        <div className={ActiveLeftBar=='Short'?"IconBtn ActiveColor":"IconBtn"} onClick={()=>{
                            console.log('Short');
                            
                            setActiveLeftBar('Short')
                            Navigate('/shorts')
                        }}>
                            <svg width={25} height={25} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M64 480L64 272L200.2 272C213.7 251.8 232.2 235.2 253.9 224L64 224L64 189.7C64 154.4 92.7 125.7 128 125.7L128.1 125.7C129.3 109.1 143.1 96 160 96L192 96C208.9 96 222.7 109.1 223.9 125.7L256 125.7L307.2 101.9C315.6 98 324.8 95.9 334.1 95.9L512 96C547.3 96 576 124.7 576 160L576 224L386 224C407.7 235.2 426.2 251.8 439.7 272L575.9 272L575.9 480C575.9 515.3 547.2 544 511.9 544L128 544C92.7 544 64 515.3 64 480zM320 256C284.9 254.9 252.1 272.9 234.2 303.1C216.3 333.3 216.3 370.8 234.2 401C252.1 431.2 284.9 449.2 320 448.1C355.1 449.2 387.9 431.2 405.8 401C423.7 370.8 423.7 333.3 405.8 303.1C387.9 272.9 355.1 254.9 320 256z" /></svg>
                            <h6 className='ps-3'>Shorts</h6>
                        </div>
                        <hr />

                        <div className={ActiveLeftBar=='Subcription'?"IconBtn ActiveColor":"IconBtn"} onClick={()=>{
                            setActiveLeftBar('Subcription')
                        }}>
                            <h6 className='ps-3'>Subcription</h6>
                            <svg width={25} height={25} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path d="M439.1 297.4C451.6 309.9 451.6 330.2 439.1 342.7L279.1 502.7C266.6 515.2 246.3 515.2 233.8 502.7C221.3 490.2 221.3 469.9 233.8 457.4L371.2 320L233.9 182.6C221.4 170.1 221.4 149.8 233.9 137.3C246.4 124.8 266.7 124.8 279.2 137.3L439.2 297.3z" /></svg>
                        </div>

                        {/* SUBCRIBED CHANNELS */}

                        {
                            channels.slice(0, dispaly ? channels.length : 5).map(elem => {
                                return <div key={elem.channelId} className="IconBtn ">
                                    <img src={elem.profilePic} alt="" srcset="" />
                                    <h6 className='ps-3'>{elem.channelName}</h6>
                                </div>
                            })
                        }
                        <div className="IconBtn " onClick={() => {
                            setdisplay(prev => !prev)
                        }}>
                            {dispaly ?
                                <svg width={25} height={25} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M297.4 201.4C309.9 188.9 330.2 188.9 342.7 201.4L502.7 361.4C515.2 373.9 515.2 394.2 502.7 406.7C490.2 419.2 469.9 419.2 457.4 406.7L320 269.3L182.6 406.6C170.1 419.1 149.8 419.1 137.3 406.6C124.8 394.1 124.8 373.8 137.3 361.3L297.3 201.3z" /></svg>
                                : <svg width={25} height={25} fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" /></svg>

                            }
                            <h6 className='ps-3'>{dispaly ? 'Show Less' : 'Show More'}</h6>
                        </div>

                    </div>
            }


        </div>
    )
}

export default LeftBar