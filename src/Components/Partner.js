import React from 'react';
import './Partner.css';
import scenic from './Images/scenic.png';
import ktm from './Images/ktm.png';
import nagarik from './Images/nagarik.png';
import ship from './Images/ship.png';
import mi from './Images/mi.png';
import MV from './Images/MV.png';
import high from './Images/high.png';
import arts from './Images/arts.png';

const Partner = () => {
    return (
        <div className="partner">
           <h1> Our Partners  </h1>
            <div className ="our-partner">
                <div className ="partner-logo">
                    <img src={mi} />
                </div>

                <div className ="partner-logo">
                    <img  src={ ktm } />
                </div> 

                <div className ="partner-logo">
                    <img src={nagarik} />
                    
                </div> 

                <div className ="partner-logo">
                    <img src={ship} />
                </div> 

            </div>

            <div className ="our-partner1">
                <div className ="partner-logo">
                    <img src={scenic} />
                </div>

                <div className ="partner-logo">
                    <img src={MV} />
                </div> 

                <div className ="partner-logo">
                    <img src={high} />
                </div> 

                <div className ="partner-logo">
                    <img src={arts} /> 
                </div> 

            </div>
        </div>
    )
}

export default Partner
