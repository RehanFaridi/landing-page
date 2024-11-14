// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import busiImg from '../assets/bussiness.jpg'

const Home = () => (
    <div>
        <Header />
        <Navbar />
        <section>
            <img src={busiImg} className='main-img'/>
        </section>
        <section className='center'>
            <h2 >Why Choose Us?</h2>
            <p>We are dedicated to providing the best experiences tailored just for you. Our team of experts curates unique adventures, ensuring you create memories that last a lifetime.</p>
        </section>
        <section className='center'>
            <h2>Our Services</h2>
            <div className='services'>
                <div className='item'>
                    <h3>Personalized Travel Planning</h3>
                    <p>Our travel experts work with you to design a customized itinerary based on your interests and preferences.</p>
                </div>
                <div className='item'>
                    <h3>Guided Tours</h3>
                    <p>Explore new destinations with our knowledgeable guides who ensure you experience the culture and sights to the fullest.</p>
                </div>
                <div className='item'>
                    <h3>Exclusive Deals and Discounts</h3>
                    <p>Benefit from our partnerships to access exclusive offers and discounts on hotels, tours, and activities.</p>
                </div>
                <div className='item'>
                    <h3>24/7 Customer Support</h3>
                    <p>We are always here for you, providing support before, during, and after your journey.</p>
                </div>
            </div>
        </section>
    </div>
);

export default Home;
