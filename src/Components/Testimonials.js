import React from 'react';
import './Testimonials.css';
import abc from './Images/abc.jpg';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="container">
                <h1 className="title text-center"> Client's Views</h1>
                <div className="row offset-1">
                    <div className="col-md-5 testimonials">
                        <p>We provide avarious types of digital marketing and SEO for our customers to rank their website on top to hit the customers and gather more traffic on their site.</p>
                        <img src={abc} alt="pic" />
                        <p className="user-details"><b>Angelina</b><br /> Director at MeroPasal</p>
                    </div>
                    <div className="col-md-5 testimonials">
                        <p>We provide avarious types of digital marketing and SEO for our customers to rank their website on top to hit the customers and gather more traffic on their site.</p>
                        <img src={abc} alt="pic" />
                        <p className="user-details"><b>Nicky Stegen</b><br /> Director at Cpewa</p>
                    </div>
                    <div className="col-md-5 testimonials">
                        <p>We provide avarious types of digital marketing and SEO for our customers to rank their website on top to hit the customers and gather more traffic on their site.</p>
                        <img src={abc} alt="pic" />
                        <p className="user-details"><b>Nicky Stegen</b><br /> Director at Cpewa</p>
                    </div>
                    <div className="col-md-5 testimonials">
                        <p>We provide avarious types of digital marketing and SEO for our customers to rank their website on top to hit the customers and gather more traffic on their site.</p>
                        <img src={abc} alt="pic" />
                        <p className="user-details"><b>Nicky Stegen</b><br /> Director at Cpewa</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
