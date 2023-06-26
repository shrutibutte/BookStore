import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, phone } = user;
    try {
      const res = await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          phone,
        }),
      });

      const data = await res.json();

      if (res.status === 200 || !data) {
        window.alert("Invalid registration");
        console.log("Invalid registration");
      } else {
        window.alert("Registration Successful");
        console.log("Successful registration");
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div
        className="container"
        style={{
          marginTop: "70px",
          height: "100%",
          width: "100%",
          marginBottom: "75px",
        }}
      >
        <h2 className="text-center text-white text-2xl font-bold mb-6">
          Register Now
        </h2>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="col-md-4 mx-auto my-4"
        >
          <div className="mb-4">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              className="form-control"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter Email"
              name="email"
              required
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter Password"
              name="password"
              required
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="phone"
              placeholder="Enter Phone"
              name="phone"
              required
              className="form-control"
              value={user.phone}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
