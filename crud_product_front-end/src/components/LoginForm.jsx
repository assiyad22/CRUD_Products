import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", null, {
        params: { username, password },
      });

  const token = response.data;
    // Save token in localStorage
    localStorage.setItem("token", token);

    alert("Login successful!");
    navigate("/");
    } catch (error) {
    console.error("Login failed", error);
    alert("Invalid username or password");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4 text-center" style={{ color: '#1bb392'}}>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group mb-4">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success me-2">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
