import React, { useState } from 'react'
import { Collapse, Fade } from 'reactstrap';
import webdev from './Images/webdev.jpg';
import network from './Images/network.jpg';
import linux from './Images/linux.jpg';
import automation from './Images/automation.jpg';
import computer from './Images/computer.jpg';
import cctv from './Images/cctv.jpg';
import system from './Images/system.jpg';
import mobile from './Images/mobile.jpg';
import digitalmarketing from './Images/digitalmarketing.jpg';
import SEO from './Images/SEO.jpg';
import './Serve.css';

const Serve = () => {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);

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
                                    {!open && <button onClick={() => setOpen(!open)}
                                        aria-controls="collapse"
                                        aria-expanded={open}>Read More</button> }
                                        <Fade in={open}>
                                            <div id="collapse">
                                            We provide you time to time free counseling about your site promotion of digital market to grow your business. We provide both static and dynamic website services.
                                            </div>
                                        </Fade>
                                    { open && <button onClick={() => setOpen(!open)} aria-controls="collapse">Read Less</button> }
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
                                    {!open1 && <button onClick={() => setOpen1(!open1)}
                                        aria-controls="collapse"
                                        aria-expanded={open1}>Read More</button> }
                                        <Fade in={open1}>
                                            <div id="collapse">
                                            It also connects your employee to your company network to access them digitally to individual employee to their working station/table.
                                            </div>
                                        </Fade>
                                    { open1 && <button onClick={() => setOpen1(!open1)} aria-controls="collapse">Read Less</button> }
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
                                    {!open2 && <button onClick={() => setOpen2(!open2)}
                                        aria-controls="collapse"
                                        aria-expanded={open2}>Read More</button> }
                                        <Fade in={open2}>
                                            <div id="collapse">
                                            We also provide Linux based server installation and configuration for the organization. Linux provides high security features for the data manipulation and connection in network to share data enterprises.
                                            </div>
                                        </Fade>
                                    { open2 && <button onClick={() => setOpen2(!open2)} aria-controls="collapse">Read Less</button> }
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
                                    {/* <div className="serve-desc-button">
                                    {!open3 && <button onClick={() => setOpen3(!open3)}
                                        aria-controls="collapse"
                                        aria-expanded={open3}>Read More</button> }
                                        <Fade in={open3}>
                                            <div id="collapse">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            </div>
                                        </Fade>
                                    { open3 && <button onClick={() => setOpen3(!open3)} aria-controls="collapse">Read Less</button> }
                                    </div> */}
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
                                    {/* <div className="serve-desc-button">
                                    {!open4 && <button onClick={() => setOpen4(!open4)}
                                        aria-controls="collapse"
                                        aria-expanded={open4}>Read More</button> }
                                        <Fade in={open4}>
                                            <div id="collapse">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            </div>
                                        </Fade>
                                    { open4 && <button onClick={() => setOpen4(!open4)} aria-controls="collapse">Read Less</button> }
                                    </div> */}
                            </div>
                        </div>
                        </div>


                        <div className="aaa">
                        <div className="serve-first">
                        
                            <div className="serve--desc">
                            <h4>CCTV Camera and Other Security Services</h4>
                                <p>We provide various types of security services for the home and offices such as CCTV camera, fire alarms, gas sensors, biometric attendance machine, door locks, body scanning machine etc are available & install.
                                </p> 
                                    {/* <div className="serve-desc-button">
                                    {!open5 && <button onClick={() => setOpen5(!open5)}
                                        aria-controls="collapse"
                                        aria-expanded={open5}>Read More</button> }
                                        <Fade in={open5}>
                                            <div id="collapse">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            </div>
                                        </Fade>
                                    { open5 && <button onClick={() => setOpen5(!open5)} aria-controls="collapse">Read Less</button> }
                                    </div> */}
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
                                    {!open6 && <button onClick={() => setOpen6(!open6)}
                                        aria-controls="collapse"
                                        aria-expanded={open6}>Read More</button> }
                                        <Fade in={open6}>
                                            <div id="collapse">
                                            We strive to deliver efficiency and more value from these services to the clients business operation.
                                            </div>
                                        </Fade>
                                    { open6 && <button onClick={() => setOpen6(!open6)} aria-controls="collapse">Read Less</button> }
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
                                    {/* <div className="serve-desc-button">
                                    {!open7 && <button onClick={() => setOpen7(!open7)}
                                        aria-controls="collapse"
                                        aria-expanded={open7}>Read More</button> }
                                        <Fade in={open7}>
                                            <div id="collapse">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                            </div>
                                        </Fade>
                                    { open7 && <button onClick={() => setOpen7(!open7)} aria-controls="collapse">Read Less</button> }
                                    </div> */}
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
                                    {!open8 && <button onClick={() => setOpen8(!open8)}
                                        aria-controls="collapse"
                                        aria-expanded={open8}>Read More</button> }
                                        <Fade in={open8}>
                                            <div id="collapse">
                                            We also provide digital marketing for our customer to grow their business online we provide the best and effective tools and methods to promote their products and brands according to the nature of the product and specific targeted customer.
                                            </div>
                                        </Fade>
                                    { open8 && <button onClick={() => setOpen8(!open8)} aria-controls="collapse">Read Less</button> }
                                    </div>
                            </div>
                        </div>
                        </div>

            </div>
            
        </div>
    )
}

export default Serve
