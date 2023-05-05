import React from 'react'
import './banner.css'
import '../universal.css'
import banner from './banner.png'

export default function Banner() {
    return (
        <div className="banner">
            <img src={banner} className="center" alt=""></img>
        </div>
    )
}
