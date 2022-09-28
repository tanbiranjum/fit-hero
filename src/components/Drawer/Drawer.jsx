import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import profilepic from "../../assets/profile.jfif";
import "./Drawer.css";

const Drawer = () => {
  const [time, setTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  return (
    <div className="drawer">
      <div className="profile">
        <img src={profilepic} alt="image" className="profile__img" />
        <div className="profile-info">
          <h3>Tanbir Anjum</h3>
          <p>
            <FaMapMarkerAlt /> Dhaka, Bangladesh
          </p>
        </div>
      </div>
      <p>Add A Break</p>
      <div className="break-btn">
        <button className="break-btn__btn">10s</button>
        <button className="break-btn__btn">20s</button>
        <button className="break-btn__btn">30s</button>
        <button className="break-btn__btn">40s</button>
        <button className="break-btn__btn">50s</button>
      </div>
      <p>Exercise Details</p>
      <div className="time">
        <h3 className="time__heading">Exercise time</h3>
        <p className="time__count">{time} seconds</p>
      </div>
      <div className="break">
        <h3 className="break__heading">Break time</h3>
        <p className="break__count">{breakTime} seconds</p>
      </div>
    </div>
  );
};

export default Drawer;
