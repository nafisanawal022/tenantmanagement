import React, { useState, useEffect } from "react";
import "../viewcomponents/DefaultLayout";
import "../viewcomponents/style.css";
import "../index.css";
import arrow from "../viewimg/arrow.png";
import logo from "../viewimg/logo.png";
import phone from "../viewimg/phone.png";
import emergency from "../viewimg/emergency.png";
import bill from "../viewimg/bill.png";
import { Link } from "react-router-dom";

function MainMenu() {
  const circleRef = React.useRef(null);
  const [rotateValue, setRotateValue] = React.useState("");

  const handleUpButtonClick = () => {
    const rotateSum = rotateValue + "rotate(-90deg)";
    circleRef.current.style.transform = rotateSum;
    setRotateValue(rotateSum);
  };

  const handleDownButtonClick = () => {
    const rotateSum = rotateValue + "rotate(90deg)";
    circleRef.current.style.transform = rotateSum;
    setRotateValue(rotateSum);
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const date = currentDate.getDate();
    if (date === 10) {
      setNotification("Reminder: Rent payment due soon.");
    } else {
      setNotification("");
    }
  }, [currentDate]);

  return (
    <div className="main">
      <br></br>
      <br></br>
      <h1
        style={{
          color: "white",
          fontWeight: "bold",
          fontFamily: "Arial, sans-serif",
          textTransform: "uppercase",
          fontSize: "50px",
        }}
      >
        Rahman's Residence
      </h1>
      <div class="nav-links">
        <ul>
          <li>
            <a href="/">Log Out</a>
          </li>
        </ul>
      </div>
      <div className="information">
        <div className="overlay"></div>
        <div id="circle" ref={circleRef}>
          <div className="one">
            <img src={emergency} alt="emergency"></img>
          </div>

          <div className="two">
            <Link to="/rent">
              <img src={bill} alt="bill"></img>
            </Link>
          </div>
          <div className="three">
            <Link to="/contact">
              <img src={phone} alt="phone"></img>
            </Link>
          </div>
          <div className="four">
            <Link to="/">
              <img src={logo} alt="home"></img>
            </Link>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="controls">
        <img
          src={arrow}
          id="downButton"
          alt="downButton"
          onClick={handleUpButtonClick}
        ></img>
        <h3
          style={{
            color: "white",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            textTransform: "uppercase",
          }}
        >
          Navigate
        </h3>
        <div className="notification">{notification}</div>
        <img
          src={arrow}
          id="upButton"
          alt="upButton"
          onClick={handleDownButtonClick}
        ></img>
      </div>
    </div>
  );
}

export default MainMenu;
