import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import profilepic from "../../assets/profile.jfif";
import "./Drawer.css";

const ShowBox = ({ data, name }) => {
  return (
    <div className="showbox">
      <h3 className="showbox__heading">{name}</h3>
      <p className="showbox__count">{data} seconds</p>
    </div>
  );
};

const BreakButton = ({
  activeBreak,
  time,
  setActiveBreak,
  id,
  setBreakTime,
}) => {
  const handleActiveButton = () => {
    setActiveBreak(id);
    setBreakTime(time);
    localStorage.setItem("activeBreakID", id);
    localStorage.setItem("breakTime", time);
  };
  return (
    <button
      className={
        activeBreak === id ? "break-btn__btn active" : "break-btn__btn"
      }
      onClick={handleActiveButton}
    >
      {time}
    </button>
  );
};

const Drawer = () => {
  const [time, setTime] = useState(0);
  const [breakTime, setBreakTime] = useState();
  const [activeBreak, setActiveBreak] = useState();

  useEffect(() => {
    if (localStorage.getItem("activeBreakID")) {
      const id = localStorage.getItem("activeBreakID");
      const time = localStorage.getItem("breakTime");
      setActiveBreak(id);
      setBreakTime(time);
    }
  });
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
        <BreakButton
          id="1"
          time="10"
          activeBreak={activeBreak}
          setBreakTime={setBreakTime}
          setActiveBreak={setActiveBreak}
        />
        <BreakButton
          id="2"
          time="20"
          activeBreak={activeBreak}
          setBreakTime={setBreakTime}
          setActiveBreak={setActiveBreak}
        />
        <BreakButton
          id="3"
          time="30"
          activeBreak={activeBreak}
          setBreakTime={setBreakTime}
          setActiveBreak={setActiveBreak}
        />
        <BreakButton
          id="4"
          time="40"
          activeBreak={activeBreak}
          setBreakTime={setBreakTime}
          setActiveBreak={setActiveBreak}
        />
        <BreakButton
          id="5"
          time="50"
          activeBreak={activeBreak}
          setBreakTime={setBreakTime}
          setActiveBreak={setActiveBreak}
        />
      </div>
      <p>Exercise Details</p>
      <ShowBox data={time} name="Exercise time" />
      <ShowBox data={breakTime} name="Break time" />
    </div>
  );
};

export default Drawer;
