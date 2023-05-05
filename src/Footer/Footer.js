import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer">
            {/* <img src={hours} alt="" className="center"></img> */}

            <div className="top" />
            
            <div className="bottom"> 
                <div className="grid">
    
                    <p className="footer-font">Hours</p>
                
                    <p className="footer-font">Location</p>
                
                    <p className="footer-font">Contact</p>
                    
                    <p className="small-footer-font">
                        Sunday - Saturday
                        <br />
                        9 AM - 8 PM
                    </p>

                    <p className="small-footer-font"> 
                        361 Myrtle Ave,
                        <br />
                        Brooklyn, NY 11205
                    </p>
                    <p className="small-footer-font"> 
                        (718) 596-6328
                    </p>
                </div>
            </div>
        </div>
    )
}
