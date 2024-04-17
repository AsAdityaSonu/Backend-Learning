import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
    axios.defaults.withCredentials = true;
    const handleLogout = async () => {
        axios
            .get("http://localhost:3000/api/logout")
            .then((res) => {
                console.log(res.data);
                window.location.href = "/";
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#333",
            fontFamily: "Arial, sans-serif",
        },
        title: {
            fontSize: "2em",
            color: "#f5f5f5",
        },
        button: {
            margin: "10px",
            padding: "10px 20px",
            fontSize: "1em",
            color: "#333",
            backgroundColor: "#f5f5f5",
            border: "none",
            borderRadius: "5px",
            textDecoration: "none",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Home</h1>
            <Link to="/dashboard" style={styles.button}>
                Go to Dashboard
            </Link>
            <Link to="/logout" onClick={handleLogout} style={styles.button}>
                Logout
            </Link>
        </div>
    );
}

export default Home;
