import React from "react";
import { useState, useEffect } from "react";
import img from "../1.jpg";
import img8 from "../8.jpg";
import img9 from "../9.jpg";
import img11 from "../11.jpg";
import img13 from "../13.jpg";

function About() {

    const images = [img8, img9, img11, img13];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    const cardStyle = {
        backgroundColor: "#ffffff",
        padding: "25px",
        borderRadius: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "260px",
        margin: "15px",
        textAlign: "center",
        borderTop: "7px solid #D4AF37",


    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", marginTop: "8px" }}>

            {/* HEADER */}
            <div style={{ backgroundColor: "#0A1F44", color: "white", padding: "60px 20px", textAlign: "center", }}>

                <h2 style={{ color: "#D4AF37",marginTop:"-60px",fontWeight: "bold" }}>About Creasta Bank</h2>
                <p>Creasta Bank is dedicated to delivering reliable and modern financial solutions tailored to meet the evolving needs of its customers. We believe that trust is the foundation of every successful banking relationship, and we strive to earn it by consistently providing safe, transparent, and efficient services. By combining advanced technology with robust security measures, we ensure that every transaction is protected and every interaction is smooth and hassle-free.</p>
                <p>At Creasta Bank, our focus is on creating a seamless banking experience that is both convenient and dependable. Our digital platform is designed to offer easy access to essential financial services anytime and anywhere, empowering customers to manage their finances with confidence. We continuously innovate to enhance our services while maintaining the highest standards of security and performance With a strong commitment to customer satisfaction, </p>
                <p>Creasta Bank aims to build lasting relationships and support your financial journey, helping you achieve stability, growth, and a secure future.</p>

            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <img
                    src={images[currentIndex]}
                    onError={(e) => (e.target.src = img)}
                    alt="slider"
                    style={{
                        width: "80%",
                        height: "450px",
                        marginTop:"40Px",
                        borderRadius:"60px",
                        transition: "0.3s ease-in-out"
                    }}
                />
            </div>

            {/* CARD SECTION */}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "50px 20px", 
                backgroundColor: "#f8f9fa", }}>

                {/* WHO WE ARE */}
                <div style={{...cardStyle,borderBottom: "7px solid #0A1F44"}}>
                    <h4 style={{ color: "#0A1F44",fontFamily:"emoji",fontWeight: "bolder" }}>Who We Are</h4>
                    <p>
                        Creasta Bank is a modern digital banking platform providing secure,
                        fast, and user-friendly financial services.
                    </p>
                </div>

                {/* MISSION */}
                <div style={{...cardStyle,borderTop: "7px solid #0A1F44",borderBottom: "7px solid #D4AF37"}}>
                    <h4 style={{ color: "#0A1F44", fontFamily: "emoji", fontWeight: "bolder" }}>Our Mission</h4>
                    <p>
                        To empower users with reliable financial tools that make banking
                        simple, transparent, and efficient.
                    </p>
                </div>

                {/* VISION */}
                <div style={{...cardStyle,borderBottom: "7px solid #0A1F44"}}>
                    <h4 style={{ color: "#0A1F44",fontFamily:"emoji",fontWeight: "bolder" }}>Our Vision</h4>
                    <p>
                        To become a leading digital bank known for innovation, trust, and
                        customer satisfaction.
                    </p>
                </div>

                {/* WHY CHOOSE US */}
                    <div style={{...cardStyle,borderTop: "7px solid #0A1F44",borderBottom: "7px solid #D4AF37"}}>                    <h4 style={{ color: "#0A1F44", fontWeight: "bolder",fontFamily:"emoji",}}>Why Choose Us</h4>
                    <p>
                        Secure transactions, fast services, easy-to-use platform, and 24/7
                        customer support for a seamless experience.
                    </p>
                </div>

            </div>

            {/* EXTRA INFO SECTION */}
            <div style={{ backgroundColor: "#0A1F44", fontWeight: "bolder", color: "white", 
                textAlign: "center", padding: "50px 20px", }}>

                <h2 style={{ color: "#D4AF37",fontFamily:"emoji" }}>Our Commitment</h2>
                <p style={{ maxWidth: "700px", margin: "20px auto" ,fontSize:"17px" }}>
                    At Creasta Bank, we are committed to delivering secure and innovative
                    financial solutions while maintaining the highest level of customer
                    trust and satisfaction.
                </p>
            </div>

            {/* FOOTER */}
<div
                style={{
                    backgroundColor: "#0A1F44", color: "white", textAlign: "center", padding: "20px", textAlign: "center", borderTop: "2px solid #D4AF37", marginTop: "50px", height: "60px", display: "flex", alignItems: "center",
                    marginTop: "50px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                <p style={{ color: "#D4AF37" }}>
                    <img src={img} alt="My Image"
                        style={{ width: "80px", borderRadius: "20px" }}
                    /> &emsp; © 2026 Creasta Bank | Built on Trust, Driven by Innovation
                </p>
            </div>
        </div>
    );
}

export default About;