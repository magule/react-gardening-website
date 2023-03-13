import React from 'react'
import "../styles/Body.css"
import Elma from "../assets/elma.jpg"

function Body() {
    return (
        <div className="body">
            <div className="leftSide"style={{ backgroundImage: `url(${ Elma })`}} > </div>
            <div className="rightSide">
                <h1>Hakkımızda</h1>
                <p>Müşterilerimize en kaliteli ürünleri ve hizmetleri sunmayı amaçlıyoruz. Geniş bir ürün yelpazesi sunarak, ağaç ve bahçe ihtiyaçlarınızı karşılamak için her şeyi bulabileceğiniz bir online mağaza olmayı hedefliyoruz.</p>
            </div>

            
        </div>
    )
}


export default Body
