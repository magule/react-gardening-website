import React from 'react';  
import ContactImage from '../assets/abov.jpg';
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide"style={{ backgroundImage: `url(${ContactImage})`}} > </div>
            <div className="rightSide">
                <h1>Bizimle iletişime geçin:</h1>
                <p>Email: contactus@fakesite.com
                    Phone: 1-800-FAKE-CNT (1-800-325-3268)
                    
                </p>
            </div>

            
        </div>
    )
}

export default Contact
