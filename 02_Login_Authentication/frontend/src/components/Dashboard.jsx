import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/verify")
            .then((res) => {
                if (res.data.status) {
                    console.log("verified");
                } else {
                    navigate("/login");
                }
            })
            .catch((err) => {
                console.error(err);
                navigate("/login");
            });
    }, []);

    return <div>Dashboard</div>;
}

export default Dashboard;