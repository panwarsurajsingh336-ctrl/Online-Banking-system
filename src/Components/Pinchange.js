import React, { useEffect, useState } from "react";
import axios from "axios";
import img from "../1.jpg";
import { useNavigate } from "react-router-dom";

function ChangePin() {
    const [acno, setAcno] = useState("");
    const [oldpin, setOldpin] = useState("");
    const [newpin, setNewpin] = useState("");
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

    async function changePin() {
        setMsg("");
        setIsError(false);

        if (!oldpin || !newpin) {
            setMsg("Enter both PINs.");
            setIsError(true);
            return;
        }

        if (String(oldpin) === String(newpin)) {
            setMsg("New PIN must be different from the old PIN.");
            setIsError(true);
            return;
        }

        if (!/^\d{4}$/.test(String(newpin))) {
            setMsg("New PIN must be exactly 4 digits.");
            setIsError(true);
            return;
        }

        const res = await axios.get("http://localhost:3000/account");
        const account = res.data.find(item => item.acno === acno && String(item.pin) === String(oldpin));

        if (account) {
            await axios.put(`http://localhost:3000/account/${account.id}`, {
                ...account,
                pin: Number(newpin)
            });
            setMsg("PIN changed successfully.");
        } else {
            setMsg("Old PIN is incorrect.");
            setIsError(true);
        }
    }

    return (
        <div className="page-shell">
            <div className="page-title">
                <h2>Change Your PIN Securely</h2>
                <p>Update the PIN for account {acno || ""}.</p>
            </div>

            <div className="row form-row">
                <div className="col-md-6 premium-card form-card">
                    {msg && (
                        <div className={`alert ${isError ? "alert-danger" : "alert-success"} app-alert`}>
                            <h4>{msg}</h4>
                        </div>
                    )}

                    <div className="form-field">Enter Old PIN
                        <input type="password" className="form-control premium-input" onInput={(e) => setOldpin(e.target.value)} />
                    </div>

                    <div className="form-field">Enter New PIN
                        <input type="password" maxLength="4" className="form-control premium-input" onInput={(e) => setNewpin(e.target.value)} />
                    </div>

                    <center>
                        <button className="premium-btn" onClick={changePin}>
                            Change PIN
                        </button>
                    </center>
                </div>
            </div>

            <div className="app-footer">
                <p>
                    <img src={img} alt="Creasta Bank" />
                    <span>© 2026 Creasta Bank | Secure PIN Management</span>
                </p>
            </div>
        </div>
    );
}

export default ChangePin;
