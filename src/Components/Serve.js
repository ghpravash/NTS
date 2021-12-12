import React, { useState } from 'react'
import webdev from './Images/webdev.jpg';
import network from './Images/network.jpg';
import linux from './Images/linux.jpg';
import automation from './Images/automation.jpg';
import computer from './Images/computer.jpg';
import cctv from './Images/cctv.jpg';
import system from './Images/system.jpg';
import mobile from './Images/mobile.jpg';
import SEO from './Images/SEO.jpg';
import './Serve.css';

const Serve = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
   
      

    return (
        <div className="container--serve">
            <div className="serve-inner">
                <h1>Our Services</h1>


                    <div className="aaa">
                        <div className="serve-first">
                            <img src={webdev}/>
                        
                            <div className="serve--desc">
                                <h4>Web Development</h4>
                                <p>NASA technical solutions provide you to choose the perfect Domain Name & Website Designs to start your own business website today. To enhance your business we provide you 24/7 support 365 days.
                                </p> 
                                <div className="serve-desc-button">
                                    
                                    <button onClick={() => setIsOpen(!isOpen)}>
                                        {isOpen ? 'Read Less' : 'Read More'}
                                    </button>
                                    {isOpen && <div className="collapseww">We Provide you time to time free counseling about your site promotion of the digital market to grow your business. We provide both static and dynamic website services.</div>}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="aaa">
                        <div className="serve-first">
                            <div className="serve--desc">
                                <h4>Networking</h4>
                                <p>We provide you best networking solutions for your enterprise to connect your business in digital and global market it will help to connect your branches in different places to connect and share shame data at a real time to built your business efficiency and make your work digital and smart. 
                                </p> 
                                <div className="serve-desc-button">
                                <button onClick={() => setIsOpen1(!isOpen1)}>
                                        {isOpen1 ? 'Read Less' : 'Read More'}
                                    </button>
                                    {isOpen1 && <div className="collapseww">It also connects your employee to your company network to access them digitally to individual employee to their working station/table.</div>}
                                </div>
                            </div>
                            <img src={network}/>
                        </div>
                    </div>



                    <div className="aaa">
                        <div className="serve-first">
                            <img src={linux} />
                        
                            <div className="serve--desc">
                                <h4>Windows/Linux Server Installation</h4>
                                <p>NASA technical solutions provides you to manage and configure powerful and secured operating system of Microsoft server to maintain the system digitally in every branches of enterprises and to manage the authority to access the system services and data files In particular branch and individual department of branches or individual computer of specific authorized person in organization.
                                </p> 
                                <div className="serve-desc-button">
                                    <button onClick={() => setIsOpen2(!isOpen2)}>
                                        {isOpen2 ? 'Read Less' : 'Read More'}
                                    </button>
                                    {isOpen2 && <div className="collapseww">We also provide Linux based server installation and configuration for the organization. Linux provides high security features for the data manipulation and connection in network to share data enterprises.</div>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="aaa">
                        <div className="serve-first">
                        
                            <div className="serve--desc">
                                <h4>Home Automation</h4>
                                <p>NASA technical solutions provides you facility of home automation to make your home and you smart as the modern generation and digital days are increasing day by day we give you best solutions to do your work and be connected to your things live every time through home automation facility with the help of AI (artificial intelligence) based system.
                                </p> 
                                <div className="serve-desc-button">
                                    
                                </div>
                            </div>
                            <img src={automation}/>
                        </div>
                    </div>



                        <div className="aaa">
                            <div className="serve-first">

                            <img src={computer} />
                        
                            <div className="serve--desc">
                            <h4>Computer and Laptop Accessories Available</h4>
                                <p>We provide all computer and laptops accessories for all brand of desktop and laptops with best price rate and warranty/guaranty we also deal with server computer and gaming desktop and laptops.
                                </p> 
                            </div>
                        </div>
                        </div>


                        <div className="aaa">
                        <div className="serve-first">
                        
                            <div className="serve--desc">
                            <h4>CCTV Camera and Other Security Services</h4>
                                <p>We provide various types of security services for the home and offices such as CCTV camera, fire alarms, gas sensors, biometric attendance machine, door locks, body scanning machine etc are available & install.
                                </p> 
                            </div>
                            <img src={cctv} />
                        </div>
                        </div>


                        <div className="aaa">
                            <div className="serve-first">

                            <img src={system} />
                        
                            <div className="serve--desc">
                                <h4>System Software Development</h4>
                                <p>We provide with the service of development of System Software. We provide the service of development of custom software that fits the clients business procedures. 
                                </p> 
                                    <div className="serve-desc-button">
                                        <button onClick={() => setIsOpen3(!isOpen3)}>
                                            {isOpen3 ? 'Read Less' : 'Read More'}
                                        </button>
                                        {isOpen3 && <div className="collapseww">We strive to deliver efficiency and more value from these services to the clients business operation.</div>}
                                    </div>
                            </div>
                        </div>
                        </div>

                        <div className="aaa">
                        <div className="serve-first">
                        
                            <div className="serve--desc">
                            <h4>Mobile Application</h4>
                                <p>We provide a comprehensive service in application development, along with development of application in platforms such as Android, IOS or both. We keep the client, their requirements as well as the value they gain in mind during the development of the application.
                                </p> 
                                </div>
                            <img src={mobile} />
                        
                        </div>
                        </div>

                        <div className="aaa">
                            <div className="serve-first">

                                <img src={SEO} />
                        
                                <div className="serve--desc">
                                    <h4>Digital Marketing and SEO</h4>
                                    <p>We provide avarious types of digital marketing and SEO for our customers to rank their website on top to hit the customers and gather more traffic on their site.
                                    </p> 
                                    <div className="serve-desc-button">
                                        <button onClick={() => setIsOpen4(!isOpen4)}>
                                            {isOpen4 ? 'Read Less' : 'Read More'}
                                        </button>
                                        {isOpen4 && <div className="collapseww">We also provide digital marketing for our customers to grow their business online we provide the best and effective tools and methods to promote their products and brands according to the nature of the product and specific targeted customer.</div>}
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

            </div>
            
        </div>
    )
}

export default Serve
