import React, { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../styles/login.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError({ ...error, email: "provide a valid email" });
    } else {
      setError({ ...error, email: "" });
    }
    setUserInfo({ ...userInfo, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;

    if (password.length < 6) {
      setError({ ...error, password: "password must be six character" });
      setUserInfo({ ...userInfo, password: e.target.value });
    } else {
      setError({ ...error, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };

  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          required
          value={userInfo.email}
          onChange={handleEmailChange}
        />
        {error.email && <p className="error-message">{error.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={handlePasswordChange}
          required
        />
        {error.password && <p className="error-message">{error.password}</p>}
        <button>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button>Google</button>
    </div>
  );
};

export default Login;
