import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to DAILY NUTRI</h1>
        <p style={styles.heroSubtitle}>
          Track your meals, monitor your nutrition, and achieve your health
          goals with ease.
        </p>
        <div>
          <Link to="/login">
            <button style={styles.button}>Login</button>
          </Link>
          <Link to="/signup">
            <button style={styles.button}>Sign Up</button>
          </Link>
          <Link to="/dashboard">
            <button style={styles.button}>Go to Dashboard</button>
          </Link>
        </div>
      </div>

      {/* Story Section */}
      <section style={styles.storySection}>
        <h2 style={styles.storyTitle}>Our Story</h2>
        <p style={styles.storyText}>
          DailyNutri was born from a passion for health and nutrition. The app
          was designed to make tracking your meals and achieving your health
          goals easier than ever.
        </p>
        <p style={styles.storyText}>
          This project was built by a dedicated team of developers:
        </p>
        <div style={styles.teamGrid}>
          <div>
            <h3 style={styles.teamMember}>Mmathapelo Sebela</h3>
            <p>Back-End Developer</p>
          </div>
          <div>
            <h3 style={styles.teamMember}>Mabula Thakgatso Tevin</h3>
            <p>Full-Stack Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <h2 style={styles.contactTitle}>Contact Us</h2>
        <p style={styles.contactText}>
          We’d love to hear from you! Reach out to us for feedback, support, or
          general inquiries:
        </p>
        <p style={styles.contactInfo}>
          📧 Email: <a href="mathy:info@dailynutri.com" style={styles.contactLink}>info@dailynutri.com</a>
        </p>
        <p style={styles.contactInfo}>
          ☎️ Phone: <a href="mob:+27685438227" style={styles.contactLink}>+27685438227</a>
        </p>
        <p style={styles.contactInfo}>
          📍 Address: kempton park   1619
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('ram.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  heroSection: {
    textAlign: "center",
    padding: "50px 20px",
    background: "rgba(0, 0, 0, 0.5)",
  },
  heroTitle: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "1.5rem",
    marginBottom: "30px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    cursor: "pointer",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  storySection: {
    padding: "50px 20px",
    background: "#f9f9f9",
    textAlign: "center",
  },
  storyTitle: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  storyText: {
    fontSize: "1.2rem",
    marginBottom: "15px",
    color: "#555",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  teamMember: {
    fontSize: "1.5rem",
    color: "#27ae60",
    marginBottom: "10px",
  },
  contactSection: {
    padding: "50px 20px",
    background: "#e0f7fa", 
    textAlign: "center",
    color: "#004d40",
  },
  contactTitle: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  contactText: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  contactInfo: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  contactLink: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default LandingPage; 
