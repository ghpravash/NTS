import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText
} from "reactstrap";
import './About.css';
import anik  from './Images/anik.jpg'
import sahil  from './Images/sahil.jpg'
import sajal  from './Images/sajal.jpeg'
import bigyan from './Images/bigyan.jpg'
import Pravash  from './Images/Pravash.jpg'
import Prakash  from './Images/Prakash.jpg'
import nabin from './Images/nabin.jpg'
import Partner from './Partner';
import Testimonials from './Testimonials';
const About = () => {
    return (
        <>
        <div className="about-container">
            <div className="about-top">
                <h1>About</h1>
                <p className="about-top-paragraph">
                NTS is an emerging software company which was established in 2076. With an enthusiastic team NTS is ready to help you anywhere at any time. NTS provides service with hightech technology and user friendly interface. NTS makes your dream come to reality .NTS stays with clients and helps achieve their goal.
                Located at the heart of thamel NTS provides software and hardware services.
                </p>
            </div>
            <div className="about-content">
                
                <h4>Our Vision</h4>
                <p>To be a purely Nepali number one IT solutions company Establishing a company with core competence in e-commerce, all kind of electronic hardware, iot base services, security and surveillance, all kind of software's development, Network solutions and Automation in Nepal.</p>
                <h4>Our Mission</h4>
                <ul type="disc">
                <li>Understanding customer actual needs and meet their needs with safe and effective service along with best product. </li>
                <li>Providing quality service with talented technicians and engineer in demanding technical market.</li> <li>Collecting our talented technical young guns from all cities and work together make local think global.</li> 
                <li>We help our customer to discover,plan,design,creat fulfil,enhance and manage their IT technology solutions to become the most admired tech company in Nepal.</li>
                </ul>

            </div>
            <div className="why-choose-us">
                <h3>Why Choose Us?</h3>
                <p>
                Our approach is unique because we deliver end-to-end solutions within complex, fully integrated multivendor environments. We take the time to understand the individual business issues of each of our customers to ensure their information technology strategies position them to maintain leadership in their respective markets.
                Building on a strong base of IT tehnology and solutions expertise, strategic parternships and professional consulting services, we deliver globally to give your organizations the edge in knowledge revolution.</p>
            </div>

            <div className="our-team">
                <h3>Our Team </h3>
            
            <div className="our-team-card">

            <Card className="card">
                <CardImg className="about-image"
                src={nabin}
                    alt="G " />
                <CardBody>
                    <CardTitle tag="h5">Basudev Subedi</CardTitle>
                    <CardText>Managing Director</CardText>
                </CardBody>
            </Card>


            <Card className="card">
                <CardImg className="about-image"
                src={Prakash}
                    alt="G" />
                <CardBody>
                    <CardTitle tag="h5">Prakash Ghimire</CardTitle>
                    <CardText>Co-founder</CardText>
                </CardBody>
            </Card>


            <Card className="card">
                <CardImg className="about-image"
                src={bigyan}
                    alt="G" />
                <CardBody>
                    <CardTitle tag="h5">Bigyan Pokhrel</CardTitle>
                    <CardText>Marketing Officer</CardText>
                </CardBody>
            </Card>
            </div>
           

            <div className="our-team-card1">

            <Card className="card">
                <CardImg className="about-image"
                src={Pravash}
                    alt="GFG Logo" />
                <CardBody>
                    <CardTitle tag="h5">Pravash Ghimire</CardTitle>
                    <CardText>Web Developer</CardText>
                </CardBody>
            </Card>

            <Card className="card">
                <CardImg className="about-image"
            src={sahil}
                    alt="GFG Logo" />
                <CardBody>
                    <CardTitle tag="h5">Shahil Jha</CardTitle>
                    <CardText>Mobile App Developer</CardText>
                </CardBody>
            </Card>


            <Card className="card">
                <CardImg className="about-image"
                src={sajal}
                    alt="GFG Logo" />
                <CardBody>
                    <CardTitle tag="h5">Sajal Maharjan</CardTitle>
                    <CardText>Graphic Designer</CardText>
                </CardBody>
            </Card>
            </div>

            <div className="our-team-card1">

            <Card className="card">
                <CardImg className="about-image"
                src={anik}
                    alt="GFG Logo" />
                <CardBody>
                    <CardTitle tag="h5">Anik Karki</CardTitle>
                    <CardText>SEO and Digital Marketing</CardText>
                </CardBody>
            </Card>

            </div>

        </div>
        </div>
        <Testimonials />
        <Partner />
        </>
    )
}

export default About
