import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../1.jpg";
import { useNavigate } from "react-router-dom";

function FundTransfer() {
    const [ac, setAc] = useState("");
    const [bac, setBac] = useState("");
    const [pin, setPin] = useState("");
    const [amt, setAmt] = useState("");
    const [msg, setMsg] = useState("");
    const [isError, setIsError] = useState(false);

    const nav = useNavigate();

    useEffect(() => {
        async function checkLogin() {
            const res = await axios.get("http://localhost:3000/uinfo");
            if (res.data.length === 0) {
                nav("/login");
            } else {
                setAc(res.data[0].acno);
            }
        }

        checkLogin();
    }, [nav]);

    async function getFund() {
        setMsg("");
        setIsError(false);

        const amount = Number(amt);
        if (!bac.trim() || !pin.trim() || !amount || amount <= 0) {
            setMsg("Enter beneficiary account, PIN, and a valid amount.");
            setIsError(true);
            return;
        }

        try {
            const res = await axios.get("http://localhost:3000/account");

            const sender = res.data.find(item => item.acno === ac && String(item.pin) === String(pin));
            const receiver = res.data.find(item => item.acno === bac.trim());

            if (!sender) {
                setMsg("Invalid account or PIN.");
                setIsError(true);
                return;
            }

            if (!receiver) {
                setMsg("Beneficiary account not found.");
                setIsError(true);
                return;
            }

            if (sender.acno === receiver.acno) {
                setMsg("Sender and beneficiary accounts must be different.");
                setIsError(true);
                return;
            }

            const senderBalance = Number(sender.amount) || 0;
            if (amount > senderBalance) {
                setMsg("Insufficient balance.");
                setIsError(true);
                return;
            }

            const updatedSender = { ...sender, amount: senderBalance - amount };
            const updatedReceiver = { ...receiver, amount: (Number(receiver.amount) || 0) + amount };

            await axios.put(`http://localhost:3000/account/${sender.id}`, updatedSender);
            await axios.put(`http://localhost:3000/account/${receiver.id}`, updatedReceiver);

            const date = new Date().toLocaleDateString();
            await axios.post("http://localhost:3000/mytrans", { acno: sender.acno, amount, date, des: "transfer" });
            await axios.post("http://localhost:3000/mytrans", { acno: receiver.acno, amount, date, des: "receive" });

            setMsg(`₹${amount} transferred successfully. Your balance is ₹${updatedSender.amount}`);
        } catch (error) {
            console.error(error);
            setMsg("Something went wrong while transferring money.");
            setIsError(true);
        }
    }

    return (
        <div className="page-shell">
            <div className="page-title">
                <h2>Transfer Money Instantly</h2>
                <p>Send funds securely from account {ac || ""}.</p>
            </div>

            <div className="row form-row">
                <div className="col-md-6 premium-card form-card">
                    {msg && (
                        <div className={`alert ${isError ? "alert-danger" : "alert-success"} app-alert`}>
                            <h4>{msg}</h4>
                        </div>
                    )}

                    <div className="form-field">Beneficiary Account Number
                        <input className="form-control premium-input" onChange={(e) => setBac(e.target.value)} />
                    </div>

                    <div className="form-field">Your PIN
                        <input type="password" className="form-control premium-input" onChange={(e) => setPin(e.target.value)} />
                    </div>

                    <div className="form-field">Amount to Transfer
                        <input type="number" className="form-control premium-input" onChange={(e) => setAmt(e.target.value)} />
                    </div>

                    <center>
                        <button className="premium-btn" onClick={getFund}>
                            Transfer
                        </button>
                    </center>
                </div>
            </div>

            <div className="app-footer">
                <p>
                    <img src={img} alt="Creasta Bank" />
                    <span>© 2026 Creasta Bank | Fast, Reliable Money Transfers</span>
                </p>
            </div>
        </div>
    );
}

export default FundTransfer;
