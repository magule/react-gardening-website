import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMed">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />

            </div>
            <p> &copy; 2023 test.com </p>
        </div>
    )
}

export default Footer
