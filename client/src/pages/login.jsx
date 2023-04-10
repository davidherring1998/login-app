import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };
  return (
    <>
      <header className="login-header">
        <h1>
          <FaSignInAlt /> Sign In
        </h1>
      </header>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-div">
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

export default Login;
