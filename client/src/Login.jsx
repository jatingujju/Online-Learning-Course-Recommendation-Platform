import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("LOGIN DATA:", formData);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      console.log("LOGIN SUCCESS:", res.data);
console.log("USER:", res.data.user);
console.log("USER ID:", res.data.user?._id);
      localStorage.setItem("token", res.data.token);
localStorage.setItem("userId", res.data.user._id);

      alert("Login Successful");

      navigate("/home");
    } catch (error) {
      console.log("LOGIN ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("DATA:", error.response?.data);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  const handleResetPassword = async () => {
    const email = prompt("Enter your Email");

    if (!email) return;

    const newPassword = prompt("Enter New Password");

    if (!newPassword) return;

    try {
      const res = await axios.put(
        "http://localhost:5000/api/auth/reset-password",
        {
          email,
          newPassword,
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error.response?.data);

      alert(
        error.response?.data?.message ||
        "Password Reset Failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b, #2563eb)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "500px",
          padding: "40px",
          borderRadius: "25px",
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          Welcome Back
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "18px",
          }}
        >
          Login to continue
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Login
          </button>

          <p
            onClick={handleResetPassword}
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "20px",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.1)",
  color: "white",
  fontSize: "18px",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "18px",
  borderRadius: "12px",
  border: "none",
  background: "#3b82f6",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Login;