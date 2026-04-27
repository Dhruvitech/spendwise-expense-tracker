import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div style={{
            width: "220px",
            height: "100vh",
            background: "#1e1e2f",
            color: "white",
            padding: "20px"
        }}>
            <h2>SpendWise</h2>

            <nav style={{ marginTop: "30px" }}>
                <p><Link to="/dashboard" style={linkStyle}>Dashboard</Link></p>
                <p><Link to="/add-expense" style={linkStyle}>Add Expense</Link></p>
                <p><Link to="/history" style={linkStyle}>History</Link></p>
                <p><Link to="/reports" style={linkStyle}>Reports</Link></p>
            </nav>
        </div>
    );
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px"
};

export default Sidebar;