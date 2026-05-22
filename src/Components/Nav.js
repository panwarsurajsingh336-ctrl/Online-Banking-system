import React, { useState, useEffect } from "react";
import img from "../1.jpg";
import img4 from "../4.jpg";
import img5 from "../5.jpg";
import img6 from "../6.jpg";
import img7 from "../7.jpg";
import img8 from "../8.jpg";
import img10 from "../10.jpg";
import img12 from "../12.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Nav() {
  const images = [img, img10, img5, img4, img6, img7, img12, img8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [uname, setUname] = useState("");
  const [st, setSt] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    checkLogin();
  }, [location.pathname]);

  async function checkLogin() {
    const res = await axios.get("http://localhost:3000/uinfo");
    if (res.data.length > 0) {
      setUname(res.data[0].name);
      setSt(true);
    } else {
      setUname("");
      setSt(false);
    }
  }

  async function lout() {
    const res = await axios.get("http://localhost:3000/uinfo");
    await Promise.all(res.data.map(item => axios.delete(`http://localhost:3000/uinfo/${item.id}`)));
    setMenuOpen(false);
    setUname("");
    setSt(false);
    nav("/");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img
            src={images[currentIndex]}
            onError={(e) => (e.target.src = img)}
            alt="slider"
            style={{
              width: "520px", height: "465px", marginBottom: "0px", transition: ".10s ease-in-out",
              marginTop: "0px", borderColor: "#D4AF37"
            }}
          />
        </div>

        <div className="col-md-8">
          <div className="col">
            <div style={{
              marginRight: "1px", marginLeft: "90px", marginTop: "0px", height: "465px", width: "745px", borderRadius: "0px",
            }} className="card text-left">

              <div className="card-header bg-transparent" style={{ borderColor: "#D4AF37" }}>
                <div style={{ textAlign: "center", marginLeft: "5px", height: "45px", width: "500px", backgroundColor: "#0A1F44", borderRadius: "50px" }}>
                  <h6 style={{ fontSize: "35px", color: "#D4AF37", fontFamily: "emoji", fontWeight: "bold" }}>Welcome to Creasta Bank
                    <img
                      src={img}
                      alt="My Image"
                      style={{ width: "60px", height: "40px", borderRadius: "10px", marginLeft: "12px" }}
                    />
                  </h6>
                </div>
              </div>

              <div className="card-body text-success">
                <h6 style={{ color: "#D4AF37", fontFamily: "emoji", fontWeight: "bold", fontSize: "20px", marginTop: "-5px" }}>
                  <i className="fa-solid fa-house fa-beat"></i> Redefining Elite Banking </h6>
                <p style={{ color: "#0A1F44", fontFamily: "sans-serif", fontSize: "15px", fontWeight: "bold", marginTop: "-5px" }}> At Creasta Bank, we elevate modern banking by blending innovation, trust, and cutting-edge technology to craft a refined financial experience tailored for individuals and businesses seeking sophistication, reliability, and seamless service.</p>

                <h6 style={{ color: "#D4AF37", fontFamily: "emoji", fontWeight: "bold", fontSize: "20px", marginTop: "-6px" }}>
                  <i className="fa-solid fa-mobile fa-beat"></i> Effortless Digital Banking</h6>
                <p style={{ color: "#0A1F44", fontFamily: "sans-serif", fontSize: "15px", marginBottom: "-5px", fontWeight: "bold", marginTop: "-5px" }}>Experience seamless digital banking designed for modern lifestyles. Our intuitive, fast, and accessible services empower you to manage finances anytime, anywhere, offering unmatched convenience, efficiency, and a smooth banking journey every day.</p>

                <h6 style={{ color: "#D4AF37", fontFamily: "emoji", fontWeight: "bold", fontSize: "20px", marginTop: "8px" }}>
                  <i className="fa-solid fa-building-lock fa-beat"></i>  Uncompromised Protection</h6>
                <p style={{ color: "#0A1F44", fontFamily: "sans-serif", fontSize: "15px", fontWeight: "bold", marginTop: "-4px" }}> Your security is our highest priority. With state-of-the-art protection systems, we safeguard your finances and personal data, ensuring every transaction remains secure, smooth, and worry-free, delivering complete confidence in every banking interaction.</p>
              </div>

              <div className="card-footer bg-transparent" style={{ borderColor: "#0A1F44" }}>
                <div style={{ textAlign: "center", marginLeft: "205px", height: "45px", width: "500px", backgroundColor: "#D4AF37", borderRadius: "50px" }}>
                  <h3 style={{ fontSize: "35px", color: "#0A1F44", fontFamily: "emoji", fontWeight: "bold" }}>Banking at Your Doorstep</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar custom-navbar sticky-top">
        <div className="nav-inner">
          <Link className="brand-link" to="/" onClick={closeMenu}>
            <img src={img} alt="Creasta Bank" />
            <span style={{fontSize:"20px"}}>Creasta Bank</span> &emsp; &emsp; 
          </Link>

          <button
            className="navbar-toggler nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav nav-links">
              <li className="nav-item"><Link className="nav-link nav-custom" to="/" onClick={closeMenu}>Home</Link></li>
              <li className="nav-item"><Link className="nav-link nav-custom" to="/about" onClick={closeMenu}>About</Link></li>
              <li className="nav-item"><Link className="nav-link nav-custom" to="/contact" onClick={closeMenu}>Contact</Link></li>
              <li className="nav-item"><Link className="nav-link nav-custom" to="/createaccount" onClick={closeMenu}>Create Account</Link></li>
              <li className="nav-item"><Link className="nav-link nav-custom" to="/withdraw" onClick={closeMenu}>Withdraw</Link></li>
              <li className="nav-item"><Link className="nav-link nav-custom" to="/deposit" onClick={closeMenu}>Deposit</Link></li>
              <li className="nav-item"><Link className="nav-link nav-custom" to="/fundtransfer" onClick={closeMenu}>Fund Transfer</Link></li>
              <li className="nav-item"><Link className="nav-link nav-custom" to="/balanceinquiry" onClick={closeMenu}>Balance Inquiry</Link></li>
              <li className="nav-item"><Link className="nav-link nav-custom" to="/pinchange" onClick={closeMenu}>Pin Change</Link></li>
              <li className="nav-item"><Link className="nav-link nav-custom" to="/accountsummary" onClick={closeMenu}>Account Summary</Link></li>
            </ul>

            <div className="nav-user">
              {st ? (
                <>
                  <span className="welcome-text" title={`Welcome ${uname}`}>Welcome <br/>{uname}</span>
                  <button className="logout-btn" onClick={lout}>Logout</button>
                </>
              ) : (
                <Link className="login-btn" to="/login" onClick={closeMenu}>Login</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
