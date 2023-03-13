import React from 'react';
import Idk from '../assets/idk.jpg';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${Idk})` }}></div>
            <div className="aboutBottom">
                <h1>Hakkımızda</h1>
                <p>Müşterilerimize en kaliteli ürünleri ve hizmetleri sunmayı amaçlıyoruz. Geniş bir ürün yelpazesi sunarak, ağaç ve bahçe ihtiyaçlarınızı karşılamak için her şeyi bulabileceğiniz bir online mağaza olmayı hedefliyoruz.</p>
            </div>

        </div>
    )
}

export default About 
