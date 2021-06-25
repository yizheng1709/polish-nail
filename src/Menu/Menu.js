import React, { Component } from 'react'
import Card from './Card'
import './menu.css'
import '../universal.css'

export default class Menu extends Component {

    render() {
        let menuOne = [
            {name: "Manicure",
             price: "12"},
            {name: "Pedicure",
             price: "20"},
            {name: "Manicure & Pedicure",
             price: "30"},
            {name: "2 in 1 Spa Pedicure",
             price: "28"},
            {name: "Color Gel Manicure",
             price: "28"},
            {name: "Color Gel Pedicure",
             price: "36"},
            {name: "Spa & Gel Pedicure",
             price: "44"},
            {name: "Pedicure Color Change Only",
             price: "9"},
            {name: "Manicure Color Change Only",
             price: "8"},
            {name: "Two Big Toe Nail Art",
             price: "5"},
            {name: "French Manicure",
             price: "17"},
            {name: "French Pedicure",
             price: "25"},
            {name: "French Gel Manicure",
             price: "36"},
            {name: "French Gel Pedicure",
             price: "45"},
            {name: "Gel Pedicure Color Change Only",
             price: "23"},
            {name: "Gel Manicure Color Change Only",
             price: "23"},
            {name: "Acrylic Full Set Tip",
             price: "28"},
            {name: "Gel Full Set Tip",
             price: "43"},
            {name: "Ombre Full Set Tip",
             price: "55"},
            {name: "Acrylic One Nail Fix",
             price: "7"},
            {name: "Gel Removal",
             price: "7"},
            {name: "SNS Full Set Tip",
             price: "45"},
            {name: "Pink & White Acrylic with UV Gel",
             price: "55"},
            {name: "Pink & White Acrylic Fill with UV Gel",
             price: "30"},
            {name: "Nail Trimming & Shaping",
             price: "5"},
            {name: "Arylic Fill",
             price: "23"},
            {name: "Arylic & Gel Fill",
             price: "28"},
            {name: "Arylic Nail Wrap",
             price: "28"}
        ]

        let menuTwo = [
            {name: "Eye Brows",
            price: "7"},
            {name: "Lip",
            price: "5"},
            {name: "Chin",
            price: "7"},
            {name: "Neck",
            price: "8"},
            {name: "Cheek or Jaw",
            price: "8"},
            {name: "Forehead",
            price: "6"},
            {name: "Whole Face",
            price: "30"},
            {name: "Full Legs",
            price: "50"},
            {name: "Half Legs",
            price: "28"},
            {name: "Full Arms",
            price: "30"},
            {name: "Half Arms",
            price: "20"},
            {name: "Under Arms",
            price: "15"},
            {name: "Bikini",
            price: "25"},
            {name: "Brazilian",
            price: "50"}
        ]

        return (
            <>
                <div className="center title">Nail Services</div>
                <div className="menu">
                    {menuOne.map( obj => <Card name={obj.name} price={obj.price} key={obj.name} /> )}
                </div>
                <div className="center title">Waxing Services</div>
                <div className="menu">
                    {menuTwo.map(obj => <Card name={obj.name} price={obj.price} key={obj.name} />)}
                </div>
            </>
        )
    }
}
