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
                    <img src={mi} alt="pic"  />
                </div>

                <div className ="partner-logo">
                    <img  src={ ktm } alt="pic"  />
                </div> 

                <div className ="partner-logo">
                    <img src={nagarik} alt="pic"  />
                    
                </div> 

                <div className ="partner-logo">
                    <img src={ship} alt="pic" />
                </div> 

            </div>

            <div className ="our-partner1">
                <div className ="partner-logo">
                    <img src={scenic} alt="pic" />
                </div>

                <div className ="partner-logo">
                    <img src={MV} alt="pic" />
                </div> 

                <div className ="partner-logo">
                    <img src={high} alt="pic" />
                </div> 

                <div className ="partner-logo">
                    <img src={arts} alt="pic" /> 
                </div> 

            </div>
        </div>
    )
}

export default Partner
