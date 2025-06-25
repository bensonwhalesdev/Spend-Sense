import { useEffect, useState } from "react";

export const useCountdown = (startDate) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    if (!startDate) return;

    const endDate = new Date(new Date(startDate).getTime() + 30 * 24 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return timeLeft;
};
