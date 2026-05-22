import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../1.jpg";
import { useNavigate } from "react-router-dom";

function Login() {
    const [ac, setAc] = useState("");
    const [pin, setPin] = useState("");
    const [msg, setMsg] = useState("");
    const [isError, setIsError] = useState(false);

    const nav = useNavigate();

    useEffect(() => {
        async function checkLogin() {
            const res = await axios.get("http://localhost:3000/uinfo");
            if (res.data.length > 0) {
                nav("/accountsummary");
            }
        }

        checkLogin();
    }, [nav]);

    async function getLogin() {
        setMsg("");
        setIsError(false);

        if (!ac.trim() || !pin.trim()) {
            setMsg("Please enter account number and PIN.");
            setIsError(true);
            return;
        }

        const res = await axios.get("http://localhost:3000/account");
        const dt = res.data.filter((item) => item.acno === ac.trim() && String(item.pin) === String(pin));

        if (dt.length > 0) {
            const existing = await axios.get("http://localhost:3000/uinfo");
            await Promise.all(existing.data.map(item => axios.delete(`http://localhost:3000/uinfo/${item.id}`)));

            const d = { acno: dt[0].acno, name: dt[0].name };
            await axios.post("http://localhost:3000/uinfo", d);
            setMsg("Login successful.");
            nav("/accountsummary");
        } else {
            setMsg("Invalid account number or PIN.");
            setIsError(true);
        }
    }

    return (
        <div className="page-shell">
            <div className="page-title">
                <h2>User Login</h2>
                <p>Access your account using your generated account number and PIN.</p>
            </div>

            <div className="row form-row">
                <div className="col-md-6 premium-card form-card">
                    {msg && (
                        <div className={`alert ${isError ? "alert-danger" : "alert-success"} app-alert`}>
                            <h4>{msg}</h4>
                        </div>
                    )}

                    <div className="form-field">Enter Account Number
                        <input type="text" className="form-control premium-input" onInput={(e) => setAc(e.target.value)} />
                    </div>

                    <div className="form-field">Enter PIN
                        <input type="password" className="form-control premium-input" onInput={(e) => setPin(e.target.value)} />
                    </div>

                    <center>
                        <button className="premium-btn" onClick={getLogin}>
                            Login
                        </button>
                    </center>
                </div>
            </div>

            <div className="app-footer">
                <p>
                    <img src={img} alt="Creasta Bank" />
                    <span>© 2026 Creasta Bank | Safe & Secure Login</span>
                </p>
            </div>
        </div>
    );
}

export default Login;
