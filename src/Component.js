import React from 'react';
import image1 from './images/web_design.jpg'
import './Component.css'

function Component() {
    return (
        <div className="component">
            <div className="leftimg">
               <img src={image1} alt=""/>
            </div>
            <div className="rightintro">
                <h1>Web Design</h1>
                <p>Slogfy, a Canada based digital company specializes in professional website design
                and development which focus on reaching your business goals. We are experienced in web page
                design, developing and hosting websites that suit your requirements. The different areas of 
                web design include graphic website design, attractive responsive website designs, and cool 
                website layouts. Looking for a web development company for your enterprise, then we are the 
                one.
                </p>
            </div>
        </div>
    )
}

export default Component
