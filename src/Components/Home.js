import React from 'react'
import landing1 from "./landing1.png";
import './Home.css';
import Serve from './Serve';

const Home = () => {
    
    return (
        <>
        <div className="home">
            <div className="subhome">

            {/* <svg className="vector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e8e8e8" fill-opacity="1" d="M0,320L1440,288L1440,320L0,320Z"></path>
            </svg> */}

            <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B85DD1" fill-opacity="0.35" d="M0,32L40,64C80,96,160,160,240,202.7C320,245,400,267,480,261.3C560,256,640,224,720,197.3C800,171,880,149,960,122.7C1040,96,1120,64,1200,80C1280,96,1360,160,1400,192L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
            <div className="xs-6">
                <h2>Welcome to NTS </h2> 
                <p>Nasa Technical Solutions</p>
            </div>
            <div className="landing">
                <img className="landing1" src={landing1} alt="landing1" />
            </div>
            </div>
        </div>

        <Serve />
        </>
    )

}

export default Home;