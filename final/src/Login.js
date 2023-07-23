import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Mock user credentials (replace with your actual login logic)
    const users = [
      { email: "user1@example.com", password: "password1" },
      { email: "user2@example.com", password: "password2" },
    ];

    // Check if the provided email and password match any entry in the users array
    const user = users.find(
      (user) =>
        user.email === formData.email.trim() &&
        user.password === formData.password.trim()
    );

    if (user) {
      localStorage.setItem("isLoggedIn", true); // Store the user's login state in local storage.
      navigate("/"); // Redirect to the home page after successful login.
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="username" 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
        </div>

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
