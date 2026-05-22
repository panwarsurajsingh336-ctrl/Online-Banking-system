import React, { useState } from "react";
import img from "../1.jpg";
function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
    };

    const cardStyle = {
        backgroundColor: "#ffffff",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "280px",
        margin: "15px",
        textAlign: "center",
        borderTop: "9px solid #D4AF37",
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", marginTop: "8px" }}>

            {/* HEADER */}
           <div style={{
  background: "#0A1F44",
  color: "white",
  padding: "60px 20px",
  textAlign: "center",
}}>

  <h2 style={{ color: "#D4AF37", marginTop: "-60px", fontWeight: "bold" }}>
    Get in Touch with Us
  </h2>

  <p>
    We are here to assist you anytime with dedicated support and reliable service.
    <br />
    Our team is committed to resolving your queries quickly and efficiently, ensuring a smooth and secure banking experience.
    <br />
    Whether it’s guidance, transactions, or assistance, you can always count on us whenever you need help.
  </p>

  {/* Social Media Section */}

  <div style={{ marginTop: "30px" }}>
   <h5 style={{
  color: "#D4AF37",
  fontFamily: "serif",
  letterSpacing: "1.5px",
  fontWeight: "bold"
}}>
  Connect & Engage With Creasta Bank
</h5>

    <div style={{ display: "flex", justifyContent: "center", gap: "20px",marginTop:"40px" }}>

      <a href="#" className="social-icon fb">
        <i class="fa-brands fa-facebook fa-beat-fade fa-2xl"></i>
      </a>

      <a href="#" className="social-icon insta">
        <i class="fa-brands fa-instagram fa-beat-fade fa-2xl" style={{color: "#E1306C",}} ></i>
      </a>

      <a href="#" className="social-icon tw">
        <i className="fa-brands fa-x-twitter fa-beat-fade fa-2xl"></i>
      </a>

      <a href="#" className="social-icon yt">
        <i className="fa-brands fa-youtube fa-beat-fade fa-2xl"style={{color:"#E1306C",}}></i>
      </a>

      <a href="#" className="social-icon wa">
        <i className="fa-brands fa-whatsapp fa-beat-fade fa-2xl" style={{color:"#128C7E",}}></i>
      </a>

    </div>
  </div>

</div>

            {/* CONTACT CARDS */}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "40px 40px", backgroundColor: "#f8f9fa", }}>

                <div style={cardStyle}>
                    <h5 style={{ fontWeight: "bolder", color: "#0A1F44" }}>
                        <i class="fa-solid fa-location-crosshairs fa-beat"></i> Address</h5>
                    <p>Karanpur Dehradun, Uttarakhand ,India - 248001</p>
                </div>

                <div style={{ ...cardStyle, borderTop: "9px solid #0A1F44" }}>
                    <h5 style={{ fontWeight: "bolder", color: "#0A1F44",}}>
                        <i class="fa-solid fa-phone fa-bounce"></i> Phone</h5>
                    <p>+91 7900405730 <br></br>+91 9876543210</p>

                </div>

                <div style={cardStyle}>
                    <h5 style={{ fontWeight: "bolder", color: "#0A1F44" }}>
                       <i class="fa-regular fa-envelope fa-bounce"></i> Email</h5>
                    <p>support@creastabank.com</p>
                </div>
            </div>

            {/* CONTACT FORM */}
            <div style={{ padding: "50px 400px", textAlign: "center" , borderRadius: "10px" }}>
                <h5 style={{ color: "#0A1F44", backgroundColor: "#0A1F44", color: "white", padding: "10px", 
                            height: "50px", marginBottom: "10px", borderRadius: "50px", marginTop: "-50px", fontWeight: "bold",
                    }}>Reach Out Through Email</h5>

                <form
                    onSubmit={handleSubmit}
                    style={{ maxWidth: "500px", margin: "auto", display: "flex", flexDirection: "column",}}> 

                    <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange}

                        required
                        style={{ padding: "12px", margin: "10px 0", borderRadius: "8px", border: "1.5px solid #D4AF37", }} />



                    <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange}

                        required
                        style={{ padding: "12px", margin: "10px 0", borderRadius: "8px", border:"1.5px solid #D4AF37", }} />

                    <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange}

                        required
                        rows="4"
                        style={{ padding: "12px", margin: "10px 0", borderRadius: "8px", border: "1.5px solid #D4AF37", }}>

                    </textarea>
                    <button type="submit"
                        style={{
                            padding: "12px", backgroundColor: "#D4AF37", color: "#0A1F44", border: "none",
                            borderRadius: "25px", cursor: "pointer", marginTop: "10px", fontWeight: "bold",
                        }}>
                        Send Message
                    </button>
                </form>
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
                    /> &emsp; © 2026 Creasta Bank | Always Here to Assist You
                </p>
            </div>
        </div>
    );
}

export default Contact;