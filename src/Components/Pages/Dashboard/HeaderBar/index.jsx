import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths } from "date-fns";
import "animate.css";
import { useCountdown } from "../Hook/useCountdown";
import { apiClient } from "../../../../lib/client";

const HeaderBar = ({ availableBalance, totalAssigned }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [signupDate, setSignupDate] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?._id;

    const fetchSignupDate = async () => {
      try {
        const res = await apiClient.get(`/users/${userId}`);
        setSignupDate(res.data.signupDate);
      } catch (error) {
        console.error("Error fetching signup date", error);
      }
    };

    if (userId) fetchSignupDate();
  }, []);

  const countdown = useCountdown(signupDate);

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const balanceColorClass = availableBalance < 0 ? "text-red-600" : "text-green-600";

  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-4 py-8 bg-white shadow-sm animate__animated animate__fadeInRight">
      
      <div className="flex flex-col gap-2 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
          <ChevronLeft size={30} className="text-gray-500 cursor-pointer" onClick={handlePrevMonth} />
          <div className="text-lg font-semibold">{format(currentDate, "MMMM yyyy")}</div>
          <ChevronRight size={30} className="text-gray-500 cursor-pointer" onClick={handleNextMonth} />
        </div>

        <input
          type="text"
          placeholder="Enter a note..."
          className="px-3 py-1 border border-gray-300 rounded text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        {/* Countdown Block */}
        <div className="text-sm mt-2 md:mt-0 p-2 text-green-600 rounded bg-gray-100">
          {countdown ? (
            <span>
              Free Trial ends in:{" "}
              <span className="font-medium">
                {countdown.days}d {countdown.hours}h {countdown.minutes}m
              </span> {" "}
              <button className="text-white p-2 bg-green-500 hover:bg-green-700 font-medium rounded cursor-pointer ">Subscribe Now</button>
            </span>
          ) : (
            <>
            <span className="text-red-500">Trial expired</span>
            <button className="text-white p-2 bg-green-500 hover:bg-green-700 font-medium rounded cursor-pointer ">Subscribe Now</button>
            </>
          )}
        </div>
      </div>

      <div>
        <div className="text-sm bg-gray-100 px-4 py-2 rounded-md font-medium text-gray-700 mb-2 whitespace-nowrap">
          ₦ {availableBalance.toFixed(2)}{" "}
          <span className={`ml-2 ${balanceColorClass}`}>Current Balance ✓</span>
        </div>
        <div className="text-sm bg-gray-100 px-4 py-2 rounded-md font-medium text-gray-700 whitespace-nowrap">
          ₦ {totalAssigned.toFixed(2)}{" "}
          <span className="ml-2 text-green-600">All Money Assigned ✓</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;