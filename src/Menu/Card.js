import React from 'react'
import './card.css'

export default function Card(props) {
    return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="menu-item">{props.name}</p>
                    </div>
                    <div className="flip-card-back">
                        <p className="menu-item">${props.price}</p>
                    </div>
                </div>

            </div>

    )
}
