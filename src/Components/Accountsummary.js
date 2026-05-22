import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import img from "../1.jpg";
import { Link, useNavigate } from "react-router-dom";

function AccountSummary() {
    const [accn, setAccn] = useState("");
    const [account, setAccount] = useState(null);
    const [msg, setMsg] = useState("");
    const [trans, setTrans] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        async function checkLogin() {
            const res = await axios.get("http://localhost:3000/uinfo");
            if (res.data.length === 0) {
                nav("/login");
            } else {
                setAccn(res.data[0].acno);
            }
        }

        checkLogin();
    }, [nav]);

    const getSummary = useCallback(async () => {
        const res = await axios.get("http://localhost:3000/account");
        const currentAccount = res.data.find(item => item.acno === accn);

        if (currentAccount) {
            const res1 = await axios.get("http://localhost:3000/mytrans");
            const dt1 = res1.data
                .filter(item => item.acno === accn)
                .map(item => ({
                    ...item,
                    date: new Date(item.date).toLocaleDateString()
                }));

            setAccount(currentAccount);
            setTrans(dt1);
            setMsg("");
        } else {
            setMsg("No account data found.");
            setAccount(null);
            setTrans([]);
        }
    }, [accn]);

    useEffect(() => {
        if (accn) {
            getSummary();
        }
    }, [accn, getSummary]);

    return (
        <div className="page-shell">
            <div className="page-title">
                <h2>Your Account Overview</h2>
                <p>Review your profile, balance, account number, and recent transactions.</p>
            </div>

            {msg && (
                <div className="alert alert-danger app-alert summary-alert">
                    <h5>{msg}</h5>
                </div>
            )}

            {account && (
                <>
                    <div className="dashboard-grid">
                        <div className="summary-card accent">
                            <span>Account Holder</span>
                            <strong>{account.name}</strong>
                        </div>
                        <div className="summary-card accent">
                            <span>Account Number</span>
                            <strong>{account.acno}</strong>
                        </div>
                        <div className="summary-card accent">
                            <span>Available Balance</span>
                            <strong>₹{account.amount}</strong>
                        </div>
                    </div>

                    <div className="quick-actions">
                        <Link to="/deposit">Deposit</Link>
                        <Link to="/withdraw">Withdraw</Link>
                        <Link to="/fundtransfer">Fund Transfer</Link>
                        <Link to="/balanceinquiry">Balance Inquiry</Link>
                    </div>
                </>
            )}

            <div className="transaction-panel">
                <div className="transaction-header">
                    <h5>Transaction History</h5>
                    <button className="secondary-btn" onClick={getSummary}>Refresh</button>
                </div>

                <div className="table-responsive">
                    <table className="table app-table">
                        <thead>
                            <tr>
                                <th>Trans ID</th>
                                <th>Account</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trans.length > 0 ? trans.map(row =>
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.acno}</td>
                                    <td>₹{row.amount}</td>
                                    <td>{row.date}</td>
                                    <td>{row.des}</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan="5" className="empty-state">No transactions found for this account.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="app-footer">
                <p>
                    <img src={img} alt="Creasta Bank" />
                    <span>© 2026 Creasta Bank | Clear Insights, Better Control</span>
                </p>
            </div>
        </div>
    );
}

export default AccountSummary;
