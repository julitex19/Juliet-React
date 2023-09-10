import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Moment() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const futureDate = moment().add(1, 'months');
    const timerInterval = setInterval(() => {
      const currentDate = moment();
      const duration = moment.duration(futureDate.diff(currentDate));
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      
      setCountdown({days, hours, minutes, seconds });
      
      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div>
      <p>   <span>Days</span> <span>ours</span>   <span>Minute</span> <span>Seconds</span></p>
      <h1>
      {countdown.days} <span>:</span> {countdown.hours} <span>:</span> {countdown.minutes} <span>:</span> {countdown.seconds} 
      </h1>
    </div>
  );
}

export default Moment;

