import React, { useState, useEffect } from "react";

const Deploy = ({ targetDate }) => {
  //   const targetDate = new Date("2023-12-01T00:00:00").getTime();
  // const targetDate = new Date("2023-11-03T00:00:00").getTime();
  //   const [targetDate, setTargetDate] = useState(
  //     new Date("2023-12-01T00:00:00").getTime()
  //   );

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentTime = new Date().getTime();
      const timeDifference = targetDate - currentTime;

      if (timeDifference <= 0) {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    calculateTimeRemaining();
    const timerInterval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timerInterval);
  }, []);
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      LANZAMIENTO: {timeRemaining.days} días, {timeRemaining.hours} horas,{" "}
      {timeRemaining.minutes} minutos, {timeRemaining.seconds} segundos
    </div>
  );
};

export default Deploy;
