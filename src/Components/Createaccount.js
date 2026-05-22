import axios from "axios";
import img from "../1.jpg";
import React, { useState } from "react";

function CreateAccount() {
    const [account, setAccount] = useState({
        acno: "",
        pin: "",
        name: "",
        fname: "",
        email: "",
        phone: "",
        gender: "",
        country: "",
        state: "",
        city: "",
        amount: ""
    });

    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    function handleInput(e) {
        setAccount({ ...account, [e.target.name]: e.target.value });
    }

    function generateAccountNumber(accounts) {
        const highestNumber = accounts.reduce((max, item) => {
            const match = String(item.acno || "").match(/^CB(\d+)$/i);
            return match ? Math.max(max, Number(match[1])) : max;
        }, 100);

        // Always save the generated account number in the required acno field.
        return `CB${highestNumber + 1}`;
    }

    async function cAccount() {
        setMsg("");
        setError("");

        const requiredFields = ["pin", "name", "fname", "email", "phone", "gender", "country", "state", "city"];
        const missingField = requiredFields.find(field => !String(account[field] || "").trim());

        if (missingField) {
            setError("Please fill all required account details.");
            return;
        }

        if (!/^\d{4}$/.test(String(account.pin))) {
            setError("PIN must be exactly 4 digits.");
            return;
        }

        const res = await axios.get("http://localhost:3000/account");
        const ac = generateAccountNumber(res.data);

        const newAccount = {
            acno: ac,
            pin: Number(account.pin),
            name: account.name.trim(),
            fname: account.fname.trim(),
            email: account.email.trim(),
            phone: account.phone.trim(),
            gender: account.gender.trim(),
            country: account.country.trim(),
            state: account.state.trim(),
            city: account.city.trim(),
            amount: Number(account.amount) || 0
        };

        // json-server persists this object in bank.json with acno as the account number key.
        await axios.post("http://localhost:3000/account", newAccount);
        setAccount(newAccount);
        setMsg("Account created successfully. Your account number is " + ac);
    }

    return (
        <div className="page-shell">
            <div className="page-title">
                <h2>Create Your Account</h2>
                <p>Open a secure Creasta Bank account in a few simple steps.</p>
            </div>

            <div className="row form-row">
                <div className="col-lg-8 premium-card form-card">
                    {msg && (
                        <div className="alert alert-success app-alert">
                            <h4>{msg}</h4>
                            {account.acno && <p className="mb-0">Use <strong>{account.acno}</strong> with your PIN to log in.</p>}
                        </div>
                    )}
                    {error && (
                        <div className="alert alert-danger app-alert">
                            <h4>{error}</h4>
                        </div>
                    )}

                    <div className="form-field">Enter PIN
                        <input type="password" maxLength="4" className="form-control premium-input" name="pin" onInput={handleInput} />
                    </div>

                    <div className="row g-3">
                        <div className="col-md-6 form-field">Name
                            <input className="form-control premium-input" name="name" onInput={handleInput} />
                        </div>
                        <div className="col-md-6 form-field">Father Name
                            <input className="form-control premium-input" name="fname" onInput={handleInput} />
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-6 form-field">Email
                            <input type="email" className="form-control premium-input" name="email" onInput={handleInput} />
                        </div>
                        <div className="col-md-6 form-field">Phone
                            <input className="form-control premium-input" name="phone" onInput={handleInput} />
                        </div>
                    </div>

                    <div className="form-field">Gender
                        <input className="form-control premium-input" name="gender" onInput={handleInput} />
                    </div>

                    <div className="row g-3">
                        <div className="col-md-4 form-field">Country
                            <input className="form-control premium-input" name="country" onInput={handleInput} />
                        </div>
                        <div className="col-md-4 form-field">State
                            <input className="form-control premium-input" name="state" onInput={handleInput} />
                        </div>
                        <div className="col-md-4 form-field">City
                            <input className="form-control premium-input" name="city" onInput={handleInput} />
                        </div>
                    </div>

                    <div className="form-field">Opening Amount
                        <input type="number" className="form-control premium-input" name="amount" onInput={handleInput} />
                    </div>

                    <center>
                        <button className="premium-btn" onClick={cAccount}>
                            Open Account
                        </button>
                    </center>
                </div>
            </div>

            <div className="app-footer">
                <p>
                    <img src={img} alt="Creasta Bank" />
                    <span>© 2026 Creasta Bank | Start Your Banking Journey Today</span>
                </p>
            </div>
        </div>
    );
}

export default CreateAccount;
