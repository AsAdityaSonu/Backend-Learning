import React from "react";
import "../css/Signup.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/signup", {
                username,
                email,
                password,
            })
            .then((res) => {
                console.log(res.data);
                if(res.data.status){
                    navigate('/login');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <div className="sign-up-container">
                <h2>Sign Up</h2>
                <form
                    action=""
                    className="sign-up-form"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Sign Up</button>
                    <h6>Have an account? </h6>
                    <Link to="/login" className="login-btn">Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
