import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">

                <div className="contact-us">
                    <h3>Contact Us</h3>
                    <h5>Address: <br /> House No. 08, Road No. 08 <br />
                    Thamel-Sukrabhawan, Kathmandu, Nepal
                    </h5>
                    <h5>Email: <br/> nasatechnicalsolutions@gmail.com</h5>
                    <h5 className="phone">Phone:(+977 9815582996) <br /> (+977 9868220077)</h5>
                </div>

                <div className="open-hours">
                    <h3>Open Hours</h3>
                    <h5>We provide every day services</h5>
                    <h5>Sunday-Friday 10 AM - 7 PM</h5>
                    <h5>Saturday 12 Am - 4 PM</h5>
                </div>

                <div className="social-media">
                    <h3>Social Media</h3>
                        <div className="social-icons">
                            <div className="facebook">
                            <a className="a-a" href="https://www.facebook.com/NasaTechnicalSolutions" target="_blank">
                                 <FaFacebookF /> 
                            </a>
                            </div>
                            <div className="instagram">
                            <a className="a-a" href="https://www.instagram.com/nasatechnicalsolutions" target="_blank">
                                <FaInstagram />
                            </a>
                            </div>
                            <div className="tiktok">
                            <a className="a-a" href="https://www.tiktok.com/@nasatechnicalsolutions" target="_blank">
                                <FaTiktok />
                            </a>
                            </div>
                            <div className="twitter">
                            <a className="a-a" href="#" target="_blank">
                                <FaTwitter />
                            </a>
                            </div>
                            <div className="youtube">
                            <a className="a-a" href="#" target="_blank">
                                <FaYoutube />
                            </a>
                            </div>
                        </div>
                </div>
            </div>
            <div className="footer-bottom">
            <p>Copyright &copy; Nasatechnicalsolutions 2020. All Right Reserved. Created by NTS </p>
            </div>
            {/* <svg className="footer-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B85DD1" fill-opacity="0.35" d="M0,32L40,64C80,96,160,160,240,202.7C320,245,400,267,480,261.3C560,256,640,224,720,197.3C800,171,880,149,960,122.7C1040,96,1120,64,1200,80C1280,96,1360,160,1400,192L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg> */}
            
        </div>
    )
}

export default Footer
