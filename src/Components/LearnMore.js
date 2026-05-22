import React from "react";
import { Link } from "react-router-dom";
import img from "../1.jpg";

function LearnMore() {
    return (
        <div className="page-shell">
            <div className="page-title">
                <h2>Welcome to Creasta Bank</h2>
                <p>Learn how our online banking services help you manage money safely, quickly, and confidently.</p>
            </div>

            <div className="transaction-panel learnmore-panel">
                <h3>Why Choose Our Online Banking?</h3>
                <p>
                    Creasta Bank is designed for customers who want dependable banking without unnecessary complexity.
                    You can open an account, check your balance, deposit funds, withdraw money, transfer funds, change
                    your PIN, and review your account summary from one simple digital platform.
                </p>

                <p>
                    Our goal is to keep everyday banking clear and convenient. Whether you are checking your available
                    balance, sending money to another account, or reviewing past transactions, each service is built to
                    give you better control over your finances while keeping your account details organized.
                </p>

                <div className="dashboard-grid">
                    <div className="summary-card">
                        <span>Account Features</span>
                        <strong>Simple Setup</strong>
                        <p>Create an account with your personal details, PIN, opening amount, and generated account number.</p>
                    </div>
                    <div className="summary-card accent">
                        <span>Transactions</span>
                        <strong>Fast Services</strong>
                        <p>Deposit, withdraw, and transfer funds with clear success and error messages.</p>
                    </div>
                    <div className="summary-card">
                        <span>Account Control</span>
                        <strong>Clear Overview</strong>
                        <p>Use balance inquiry and account summary to view your account number, balance, and history.</p>
                    </div>
                </div>

                <h3>Benefits of Digital Banking</h3>
                <p>
                    Online banking saves time by reducing the need to visit a branch for common tasks. You can view your
                    balance before making a payment, transfer money when needed, and keep track of account activity from
                    the account summary page. This helps you make better financial decisions and stay updated.
                </p>

                <h3>Safe Banking Tips</h3>
                <ul className="learnmore-list">
                    <li>Keep your PIN private and change it if you think someone else knows it.</li>
                    <li>Always confirm the beneficiary account number before fund transfer.</li>
                    <li>Review your account summary regularly to spot unusual activity.</li>
                    <li>Log out after finishing your banking session, especially on shared devices.</li>
                </ul>

                <h3>How To Get Started</h3>
                <p>
                    Open a new account, note your generated account number, and log in using your account number and PIN.
                    After login, you can access deposit, withdrawal, fund transfer, balance inquiry, PIN change, and
                    account summary services from the existing navigation menu.
                </p>

                <div className="quick-actions learnmore-actions">
                    <Link to="/createaccount">Open Account</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/balanceinquiry">Check Balance</Link>
                    <Link to="/accountsummary">Account Summary</Link>
                </div>
            </div>

            <div className="app-footer">
                <p>
                    <img src={img} alt="Creasta Bank" />
                    <span>© 2026 Creasta Bank | Banking Made Clear and Secure</span>
                </p>
            </div>
        </div>
    );
}

export default LearnMore;
