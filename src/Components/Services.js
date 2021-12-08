import React from 'react';
import './Services.css';
import { Link } from "react-router-dom";
import tech from "./tech.jpeg";

const Services = () => {
    return (
        <div className="Services">
        
            <div className="serve">
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, libero. Rem dolorum, beatae sit officiis recusandae. Non, ea tempore debitis dolorem aperiam ipsum ut. Consequuntur?</p>
            </div>  

            <div className="services-wave">
                <div className="web-dev1">
                    <div className="web-dev">
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, libero. Rem dolorum, beatae sit officiis recusandae. Non, ea tempore debitis dolorem aperiam ipsum ut. Consequuntur?</p>
                        <div className="web-dev-btn">
                        <Link className="web-dev-btn" to="serve" >  <button >Read More</button>
                        </Link>
                        </div>
                    </div>
                    <div className="web-dev-img">
                        <img src= {tech} />
                    </div>
                    <svg className="services-wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A757CF" fill-opacity="1" d="M0,256L48,213.3C96,171,192,85,288,69.3C384,53,480,107,576,149.3C672,192,768,224,864,202.7C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg> 
                </div>
                
            </div>   
                  
        </div>
    )
}

export default Services
