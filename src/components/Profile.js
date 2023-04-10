// import { useState } from 'react'
import userImg from '../images/image-jeremy.png'

export default function Profile() {
    return (
        <div className='container'>
            <div className='container-profile container-tab'>
                <section className='user-details flex'>
                    <img className='user-img' src={userImg} alt="Jeremy Robson" height={50} width={50}></img>
                    <div className='user-text column'>Report for <div className='user-name'>Jeremy Robson</div></div>
                </section>
            </div>
            <section className='details flex'>
                <button className='time-selection'>Daily</button>
                <button className='time-selection'>Weekly</button>
                <button className='time-selection'>Monthly</button>
            </section>
        </div>
    )
}