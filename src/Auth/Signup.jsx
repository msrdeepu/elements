import "./signup.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Link } from "react-router-dom";

const Signup = () => {
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
            <input type="text" id="username" />
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
