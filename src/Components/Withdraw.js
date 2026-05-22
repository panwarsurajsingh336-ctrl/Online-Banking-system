import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../1.jpg";
import { useNavigate } from "react-router-dom";

function WithDraw() {
    const [acno, setAcno] = useState("");
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
                setAcno(res.data[0].acno);
            }
        }

        checkLogin();
    }, [nav]);

    async function getwith() {
        setMsg("");
        setIsError(false);

        const withdrawAmount = Number(amt);
        if (!withdrawAmount || withdrawAmount <= 0) {
            setMsg("Enter a valid withdrawal amount.");
            setIsError(true);
            return;
        }

        const res = await axios.get("http://localhost:3000/account");
        const account = res.data.find(item => item.acno === acno);

        if (!account) {
            setMsg("Logged-in account was not found.");
            setIsError(true);
            return;
        }

        const currentAmount = Number(account.amount) || 0;
        if (currentAmount < withdrawAmount) {
            setMsg("Insufficient balance.");
            setIsError(true);
            return;
        }

        const updatedAmount = currentAmount - withdrawAmount;
        await axios.put(`http://localhost:3000/account/${account.id}`, { ...account, amount: updatedAmount });

        const date = new Date().toLocaleDateString();
        await axios.post("http://localhost:3000/mytrans", {
            acno,
            amount: withdrawAmount,
            date,
            des: "withdraw"
        });

        setMsg("Withdrawal successful. Your current balance is ₹" + updatedAmount);
    }

    return (
        <div className="page-shell">
            <div className="page-title">
                <h2>Withdraw Funds Securely</h2>
                <p>Withdraw from account {acno || ""} with real-time balance validation.</p>
            </div>

            <div className="row form-row">
                <div className="col-md-6 premium-card form-card">
                    {msg && (
                        <div className={`alert ${isError ? "alert-danger" : "alert-success"} app-alert`}>
                            <h4>{msg}</h4>
                        </div>
                    )}

                    <div className="form-field">Enter Amount to Withdraw
                        <input type="number" className="form-control premium-input" onInput={(e) => setAmt(e.target.value)} />
                    </div>

                    <center>
                        <button className="premium-btn" onClick={getwith}>
                            Withdraw
                        </button>
                    </center>
                </div>
            </div>

            <div className="app-footer">
                <p>
                    <img src={img} alt="Creasta Bank" />
                    <span>© 2026 Creasta Bank | Safe & Hassle-Free Withdrawals</span>
                </p>
            </div>
        </div>
    );
}

export default WithDraw;
