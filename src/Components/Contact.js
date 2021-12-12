import React from 'react'
import './Contact.css'
import { FloatingLabel, Form } from 'react-bootstrap';
import { MdLocationOn } from "react-icons/md";


const Contact = () => {


    return (
        <div className="contact-container">
            <div className="contact-top">
                <h1>Contact</h1>
                <p>Feel free to contact us.</p>
            </div>

            <div className="contact-content">
                <h4>Get In Touch</h4>
                <p><b>Phone:</b> (+977 9815582996)
                    (+977 9868220077) </p>
                   <p> <b>Address: </b>
                     Thamel, Sukrabhawan <br />
                     Kathmandu, Nepal 44600 </p>
                    <p><b>Email: </b>
                    nasatechnicalsolutions@gmail.com <br />
                    infonts@nasatechnicalsolutions.com <br />
                    nts@nasatechnicalsolutions.com
                    </p>
            </div>

            <div className="contact-form">

                <h6>We'd love to help you !!</h6>
                <Form>

                <Form.Group className="mb-3" controlId="formBasicName">
                <FloatingLabel
                    controlId="floatingInputGrid" label="Name">
                        <Form.Control  type="text" placeholder="Your Name Here" />
                    </FloatingLabel>
                    </Form.Group>
                    

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                    controlId="floatingInputGrid" label="Email address">
                        <Form.Control type="email" placeholder="Your Email Here" />
                        </FloatingLabel>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <FloatingLabel
                    controlId="floatingInputGrid" label="Message">
                    <Form.Control as="textarea" rows={3} />
                    </FloatingLabel>
                    </Form.Group>
                    <button className="submit-button" type="submit">
                        Submit
                    </button>
                </Form>
            </div>
            <div className="contact-map">
                    <h4>You can find us here!</h4>
                    <button>
                    <MdLocationOn className="contact-location" />
                        <a href="https://goo.gl/maps/ooUx1Ax6ywhFQ4P59" target="_blank" className="contact-clickhere"> CLICK HERE
                        </a> 
                    </button>
                    
             </div>
        </div>
    )
}
  

export default Contact
