import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time <= 0) {
      navigate("/about", {
        state: `This is the state: ${Math.random()}`,
      });
    }
    return () => {
      clearTimeout(timeout.current);
    };
  }, [time]);

  return (
    <div>
      <h1>Get out off here in: {time}</h1>
    </div>
  );
};
