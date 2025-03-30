import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px", // Added for better mobile spacing
  },
  errorMessage: {
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "40px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    maxWidth: "450px",
    width: "90%",
    animation: "fadeIn 0.6s ease-in-out",
  },
  heading: {
    fontSize: "clamp(60px, 10vw, 90px)", // Responsive heading size
    margin: "0",
    color: "#ff4d4d",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "clamp(18px, 3vw, 22px)", // Responsive paragraph size
    marginBottom: "25px",
    color: "#333",
  },
  button: {
    display: "inline-block",
    padding: "clamp(10px, 2vw, 12px) clamp(20px, 4vw, 24px)", // Responsive padding
    fontSize: "clamp(16px, 3vw, 18px)", // Responsive font size
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#ff4d4d",
    border: "none",
    borderRadius: "6px",
    textDecoration: "none",
    cursor: "pointer",
    transition: "background 0.3s ease-in-out, transform 0.2s ease",
  },
};

const NotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.errorMessage}>
        <h1 style={styles.heading}>404</h1>
        <p style={styles.paragraph}>Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#d93636";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#ff4d4d";
            e.target.style.transform = "scale(1)";
          }}
        >
          Take me home 🏠
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
