import { useState, useEffect } from "react";
import "./styles.css";

const Clock = () => {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  let day = current.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="mainWrapper">
      <div className="clock">
        <span className="time_container time_hours">
          {convertToTwoDigit(time.hours)}
        </span>
        <span className="time_colon">:</span>
        <span className="time_container time_minutes">
          {convertToTwoDigit(time.minutes)}
        </span>
        <span className="time_colon">:</span>

        <span className="time_container time_seconds">
          {convertToTwoDigit(time.seconds)}
        </span>
        <span className="time_meridien">
          {time.hours >= 12 ? " PM" : " AM"}
        </span>
      </div>
      <div className="date">{date}</div>
      <div className="day">{days[day]}</div>
    </div>
  );
};

export default Clock;
