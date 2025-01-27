import React, { useState } from "react";

const Dashboard = () => {
  // Simulated data
  const initialUserData = {
    name: "Mmathapelo",
    email: "mathy@nutri.com",
    city: "South Africa",
    company: "Healthify",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [mealLogs, setMealLogs] = useState([]);
  const [newMeal, setNewMeal] = useState("");

  // Add a meal to the log
  const handleAddMeal = () => {
    if (newMeal.trim() === "") return; // Avoid empty inputs
    setMealLogs([...mealLogs, newMeal]);
    setNewMeal("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>

      {/* User Info Section */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Welcome, {userData.name}!</h2>
        <p style={styles.cardText}>📧 Email: {userData.email}</p>
        <p style={styles.cardText}>📍 Location: {userData.city}</p>
        <p style={styles.cardText}>💼 Company: {userData.company}</p>
      </div>

      {/* Meal Logging Section */}
      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Meal Logs</h2>
        <ul style={styles.list}>
          {mealLogs.length > 0 ? (
            mealLogs.map((meal, index) => <li key={index}>{meal}</li>)
          ) : (
            <p>No meals logged yet.</p>
          )}
        </ul>

        <div style={styles.inputGroup}>
          <input
            type="text"
            value={newMeal}
            onChange={(e) => setNewMeal(e.target.value)}
            placeholder="Add a meal (e.g., Salad)"
            style={styles.input}
          />
          <button onClick={handleAddMeal} style={styles.button}>
            Add Meal
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "#27ae60",
  },
  cardText: {
    fontSize: "1.2rem",
    marginBottom: "8px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "0 0 10px",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Dashboard;
