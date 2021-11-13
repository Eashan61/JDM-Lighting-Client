import React, { useState } from "react";
import useAuth from "./../../../hooks/useAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useLocation, useHistory } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/home";

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must Be Atleast 6 Charracter Long");
      return;
    }

    if (isLogin) {
      processLogin(email, password, location, history);
    } else {
      registerNewUser(email, password);
    }
  };
  const processLogin = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const googleLogin = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect);
    });
  };
  return (
    <div>
      <h2>Please Login</h2>
      <form onSubmit={handleRegistration}>
        <h2 className="text-danger">Please {isLogin ? "Login" : "Register"}</h2>
        {!isLogin && (
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                onBlur={handleNameChange}
                class="form-control"
                id="inputName"
                placeholder="Your Name"
              />
            </div>
          </div>
        )}

        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                onChange={toggleLogin}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger"> {error}</div>
        <button type="submit" className="btn btn-primary">
          Please {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <div>-----------</div>
      <button onClick={googleLogin} className="btn btn-warning">
        Google Login
      </button>
    </div>
  );
};

export default Login;
