import React from "react";
import img from "../1.jpg";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", marginTop: "8px" }}>

            <div
                style={{ background: "#0A1F44", color: "#D4AF37", padding: "80px 20px", textAlign: "center", }}>

                <h1 style={{  color: "#D4AF37", fontFamily: "emoji", marginTop: "-85px", fontWeight: "bold" }}>
                    Welcome to Creasta Bank</h1>

                <p style={{ fontSize: "20px", maxWidth: "700px", margin: "20px auto" }}>
                    Experience secure, fast, and smart banking with a premium digital
                    platform designed for your financial success.
                </p>

                <div style={{ marginTop: "30px" }}>
                    <Link to="/createaccount">
                        <button style={{
                            padding: "12px 25px", marginRight: "15px", backgroundColor: "#D4AF37", color: "#0A1F44",
                            border: "none", borderRadius: "25px", cursor: "pointer", fontWeight: "bold",
                        }}>
                            Open Account
                        </button>
                    </Link>

                    <Link to="/learnmore">
                        <button style={{
                            padding: "12px 25px", backgroundColor: "transparent", border: "2px solid #D4AF37",
                            borderRadius: "25px", color: "#D4AF37", cursor: "pointer",
                        }}>
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>


            <div style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#f8f9fa", }}>

                <h1 style={{ color: "#0A1F44", marginBottom: "40px", fontStyle: "italic", fontWeight: "bold" }}>
                    Why Choose Creasta Bank?
                </h1>

                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", margin: "20px" }}>

                    {/* CARD 1 */}
                    <div className="cardHome">
                        <h4 style={{ color: "#0A1F44", fontWeight: "bold" }}>
                            <i className="fa-solid fa-shop-lock fa-beat"></i> Secure Banking
                        </h4>
                        <p>
                            Your data and money are safeguarded using advanced security systems, ensuring safe transactions, privacy protection, and reliable banking services you can trust at all times.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="cardHome">
                        <h4 style={{ color: "#0A1F44", fontWeight: "bold" }}>
                            <i className="fa-solid fa-money-bill-transfer fa-beat"></i>  Fast Transactions
                        </h4>
                        <p>
                            Send and receive money instantly with secure, real-time processing, ensuring quick transfers, minimal delays, and a smooth banking experience whenever you need it.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="cardHome">

                        <h4 style={{ color: "#0A1F44", fontWeight: "bold" }}>
                            <i className="fa-solid fa-mobile-screen-button fa-bounce"></i>  Digital Banking
                        </h4>
                        <p>
                            Manage your account anytime, anywhere with our smart digital platform, offering secure access, real-time updates, and complete control over your finances with ease and convenience.
                        </p>
                    </div>
                </div>
            </div>

            {/* ABOUT PREVIEW */}
            <div style={{ backgroundColor: "#0A1F44", color: "white", padding: "60px 20px", textAlign: "-webkit-left", }}>

                {/* <h1 style={{ color: "#D4AF37" }}>About Creasta Bank</h1>
                <p style={{ maxWidth: "700px", margin: "20px auto" }}>
                    Creasta Bank combines innovation and trust to deliver modern banking solutions tailored to today’s needs. We focus on simplicity, security, and customer satisfaction, ensuring a smooth and reliable banking experience for everyone. Our advanced digital platform allows you to manage your finances anytime and anywhere.
                </p> */}
                <p style={{ maxWidth: "700px", margin: "20px auto" }}>
                    "At Creasta Bank, we are committed to redefining modern banking by combining innovation, trust, and advanced technology to deliver a seamless financial experience. Your security is our highest priority, and we use robust systems and reliable processes to safeguard your money and personal information at every step. We believe in building strong, long-lasting relationships with our customers through transparency, honesty, and dependable services you can rely on anytime".<hr></hr>

                    "Our platform is designed to make banking simple, fast, and accessible, allowing you to manage your finances with ease, whether you are at home or on the go. From everyday transactions to long-term financial planning, we provide smart solutions tailored to your needs. At Creasta Bank, we continuously evolve and innovate to stay ahead in a rapidly changing world, ensuring that you always receive efficient, secure, and user-friendly services".<hr></hr>

                    "Our mission is to empower you to achieve your financial goals with confidence. We strive to create opportunities, support your growth, and help you build a stable and successful future with banking you can truly trust."</p>

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
                    /> &emsp; © 2026 Creasta Bank | Smart & Secure Banking
                </p>
            </div>
        </div>
    );
}

export default Home;
