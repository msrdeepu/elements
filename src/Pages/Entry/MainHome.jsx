import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import newatomanimation from "../../../public/lottie/newatomanimation.json";
import "./main-home.css";

const MainHome = () => {
  return (
    <>
      <div
        className="animation-top-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Lottie
          animationData={newatomanimation}
          style={{ width: 400, height: 400 }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/elements">
          {" "}
          <button href="#" className="go-to-ele-btn">
            GO TO ELEMENTS
          </button>
        </Link>
      </div>
    </>
  );
};

export default MainHome;
