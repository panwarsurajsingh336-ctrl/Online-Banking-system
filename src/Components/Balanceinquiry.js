import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../1.jpg";
import { useNavigate } from "react-router-dom";

function BalanceInquiry() {
    const [acno, setAcno] = useState("");
    const [msg, setMsg] = useState("");
    const [account, setAccount] = useState(null);
    const [isError, setIsError] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        async function checkLogin() {
            const res = await axios.get("http://localhost:3000/uinfo");
            if (res.data.length === 0) {
                nav("/login");
            } else {
                setAcno(res.data[0].acno);
            }
        }

        checkLogin();
    }, [nav]);

    async function getBalance() {
        setMsg("");
        setIsError(false);

        const res = await axios.get("http://localhost:3000/account");
        const foundAccount = res.data.find(item => item.acno === acno);

        if (foundAccount) {
            setAccount(foundAccount);
            setMsg(`Your balance is ₹${foundAccount.amount}`);
        } else {
            setMsg("Logged-in account was not found.");
            setIsError(true);
        }
    }

    return (
        <div className="page-shell">
            <div className="page-title">
                <h2>View Your Account Balance</h2>
                <p>Check the latest available balance for account {acno || ""}.</p>
            </div>

            <div className="row form-row">
                <div className="col-md-6 premium-card form-card">
                    {account && (
                        <div className="dashboard-grid compact-grid">
                            <div className="summary-card">
                                <span>Account Number</span>
                                <strong>{account.acno}</strong>
                            </div>
                            <div className="summary-card accent">
                                <span>Available Balance</span>
                                <strong>₹{account.amount}</strong>
                            </div>
                        </div>
                    )}

                    {msg && (
                        <div className={`alert ${isError ? "alert-danger" : "alert-success"} app-alert`}>
                            <h4>{msg}</h4>
                        </div>
                    )}

                    <center>
                        <button className="premium-btn" onClick={getBalance}>
                            Show Balance
                        </button>
                    </center>
                </div>
            </div>

            <div className="app-footer">
                <p>
                    <img src={img} alt="Creasta Bank" />
                    <span>© 2026 Creasta Bank | Stay Updated, Stay in Control</span>
                </p>
            </div>
        </div>
    );
}

export default BalanceInquiry;
