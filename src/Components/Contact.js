import React, { useEffect, useRef, useState } from 'react';
import './Contact.css'
import emailjs from 'emailjs-com';
import { FloatingLabel, Form } from 'react-bootstrap';
import { MdLocationOn } from "react-icons/md";
import Validation from "./Validation";


const Contact = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    }

    const form = useRef();

  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
});

const [errors, setErrors] =useState({});
const [dataIsCorrect, setDataIsCorrect] = useState(false);

const handleChange = (e) => {
    setValues({
        ...values,
        [e.target.name]: e.target.value,
    })
}

const handleFormSubmit = (e) => {
e.preventDefault();
setErrors(Validation(values));
setDataIsCorrect(true);

emailjs.sendForm('service_6q9k4th', 'template_by0ire3', form.current, 'user_aCMxxel78ibbnYlIXML9e')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
};

useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
        submitForm(true);
    }
});
/** Validation */

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
                <Form ref={form} onSubmit=  {handleFormSubmit} >

                <Form.Group className="mb-3" controlId="formBasicName">
                <FloatingLabel
                    controlId="floatingInputGrid" label="Name">
                        <Form.Control  type="text" placeholder="Your Name Here"  name="user_name" value={values.user_name} 
                            onChange={handleChange}/>
                            {errors.user_name && <p>{errors.user_name}</p>}
                    </FloatingLabel>
                    </Form.Group>
                    

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel
                    controlId="floatingInputGrid" label="Email address">
                        <Form.Control type="email" placeholder="Your Email Here"  name="user_email" value={values.user_email}
                        onChange={handleChange}/>
                        {errors.user_email && <p>{errors.user_email}</p>}
                        </FloatingLabel>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <FloatingLabel
                    controlId="floatingInputGrid" label="Message">
                    <Form.Control as="textarea" rows={3}   name="user_message" value={values.user_message}
                        onChange={handleChange}/>
                        {errors.user_message && <p>{errors.user_message}</p>}
                    </FloatingLabel>
                    </Form.Group>
                    <button className="submit-button" type="submit" onClick= {handleFormSubmit} >
                        Submit
                    </button>
                    { !formIsSubmitted ? " " : <div>
                        <p style={{ fontSize:"20px", color:"purple", paddingTop:"5px"}}>Success!!</p>
                    </div> }
                </Form>
            </div>
            <div className="contact-map">
                    <h4>You can find us here!</h4>
                    <button>
                    <MdLocationOn className="contact-location" />
                        <a href="https://goo.gl/maps/ooUx1Ax6ywhFQ4P59" target="_blank" rel="noreferrer" className="contact-clickhere"> CLICK HERE
                        </a> 
                    </button>
                    
             </div>
        </div>
    )
}
  

export default Contact

//Nts143@!*#
