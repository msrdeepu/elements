import React, { useState } from "react";
import "./home.css";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link } from "react-router-dom";
const Home = () => {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <div className="top-home-container">
        <h3>Please Enter Your Name to Start</h3>
        <input
          className="name-holder"
          placeholder="Please Enter Your Name to Start"
          onChange={handleName}
        />
        {name !== "" ? (
          <Link to="/quiz">
            {" "}
            <Button
              style={{ marginTop: "8px", width: "125%" }}
              startIcon={<AccountCircleIcon />}
              className="login-btn"
              variant="contained"
            >
              Start
            </Button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
