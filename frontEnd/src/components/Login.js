import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = user;
    const res = await fetch("http://localhost:5000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await res.json();

    if (res.status === 200 || !data) {
      window.alert("Invalid User");
      console.log("Invalid User");
    } else {
      window.alert("Login Successfully");
      console.log("Successful Login");
      navigate("/");
    }
  };

  return (
    <>
      <div
        className="container"
        style={{
          paddingTop: "100px",
          height: "100%",
          width: "100%",
          marginBottom: "165px"
        }}
      >
        <h2 className="text-center text-white text-2xl font-bold mb-6">
          Login Form
        </h2>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="col-md-4 mx-auto my-4"
        >
          <div className="mb-4 ">
            <label htmlFor="uname" className="form-label">
              Username
            </label>
            <input
              type="text"
              value={user.username}
              placeholder="Enter Username"
              name="username"
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="psw" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={user.password}
              required
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
