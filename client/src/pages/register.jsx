import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { name, username, email, password } = data;

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      username,
      email,
      password,
    };
  };
  return (
    <>
      <header className="login-header">
        <h1>
          <FaUser /> Register
        </h1>
      </header>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-div">
            <input
              type="text"
              className="form-input"
              name="name"
              id="name"
              placeholder="Please enter your name"
              onSubmit={onChange}
            />
            <input
              type="text"
              className="form-input"
              name="username"
              id="username"
              placeholder="Please enter your username"
              onSubmit={onChange}
            />

            <input
              type="text"
              className="form-input"
              name="email"
              id="email"
              placeholder="Please enter your email"
              onSubmit={onChange}
            />
            <input
              type="text"
              className="form-input"
              name="password"
              id="password"
              placeholder="Please enter a password"
              onSubmit={onChange}
            />
          </div>
          <div className="form-btn">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default Register;
