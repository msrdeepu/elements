import "./login.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { loginFeature } from "../services/apiAuth";
import { Link } from "react-router-dom";

//use-login-hook
import { useLogin } from "../services/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("mspreddy2023@gmail.com");
  const [password, setPassword] = useState("Sandeep@12345");

  const [login, isLoading] = useLogin();

  const handleSubmit = (e) => {
    // console.log(data);
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  };

  return (
    <>
      <div className="login-main-container">
        <Card sx={{ maxWidth: 390 }}>
          <CardContent>
            <div className="img-container-section">
              {" "}
              <div className="login-img"></div>
            </div>

            <Typography
              gutterBottom
              variant="h5"
              className="login-title"
              component="div"
            >
              LOGIN
            </Typography>
            <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="emailItem">User Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="emailItem"
                type="text"
                id="emailItem"
                disabled={isLoading}
              />
              <label htmlFor="passwordItem/">Password</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                typeof="password"
                id="passwordItem"
                disabled={isLoading}
              />
              <div className="btn-container">
                <Button
                  type="submit"
                  startIcon={<LockOpenIcon />}
                  className="login-btn"
                  variant="contained"
                  disabled={isLoading}
                >
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
          <CardActions>
            <Link to="/signup">
              <Button
                className="signup-btn"
                startIcon={<AccountCircleIcon />}
                size="small"
              >
                Sign Up
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
