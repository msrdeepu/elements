import "./login.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
// import { loginFeature } from "../services/apiAuth";
import { Link } from "react-router-dom";

//use-login-hook
// import { useLogin } from "../services/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("mspreddy2023@gmail.com");
  const [password, setPassword] = useState("Sandeep@12345");

  // const [login, isLoading] = useLogin();

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
            <form className="login-form">
              <label htmlFor="emailItem">User Email</label>
              <input type="text" id="emailItem" />
              <label htmlFor="passwordItem/">Password</label>
              <input type="text" typeof="password" id="passwordItem" />
              <div className="btn-container">
                <Button
                  startIcon={<AccountCircleIcon />}
                  className="login-btn"
                  variant="contained"
                >
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
          <CardActions>
            <Link to="/signup">
              {" "}
              <Button
                className="signup-btn"
                startIcon={<LockOpenIcon />}
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
