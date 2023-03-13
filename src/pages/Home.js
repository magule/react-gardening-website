import React from 'react'
import {Link} from "react-router-dom";
import BigImage from '../assets/fert.jpg'
import '../styles/Home.css';
import Body from '../components/Body';


function Home() {
    return (
        <div>
            <div className="home" style={{ backgroundImage: `url(${BigImage})` }}>
                <div className="headerContainer" >
                    <h1>Insert Company Name</h1>
                    <p>A farming company</p>
                    <Link to="/about"><button>Hakkımızda</button></Link>
                </div>
            </div>
            <Body />
            
        </div>
            
    )
}

export default Home;
