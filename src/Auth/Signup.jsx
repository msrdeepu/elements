import "./signup.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Link } from "react-router-dom";
import supabase from "../services/supabase";

const Signup = () => {
  const [formData, setFormData] = useState({
    nameuser: "",
    useremail: "",
    password: "",
  });

  console.log(formData);
  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
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
            SIGNUP
          </Typography>
          <form className="login-form">
            <label htmlFor="username">User Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="nameuser"
              id="username"
            />
            <label htmlFor="emailItem">User Email</label>
            <input
              onChange={handleChange}
              type="text"
              name="useremail"
              id="emailItem"
            />
            <label htmlFor="passwordItem/">Password</label>
            <input
              onChange={handleChange}
              type="text"
              name="password"
              typeof="password"
              id="passwordItem"
            />
            <div className="btn-container">
              <Button
                startIcon={<AccountCircleIcon />}
                className="login-btn"
                variant="contained"
                type="submit"
              >
                Signup
              </Button>
            </div>
          </form>
        </CardContent>
        <CardActions>
          <Link to="/login">
            {" "}
            <Button
              className="signup-btn"
              startIcon={<LockOpenIcon />}
              size="small"
            >
              Login
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Signup;
