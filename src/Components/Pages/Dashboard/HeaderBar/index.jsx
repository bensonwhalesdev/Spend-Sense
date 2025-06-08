import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths } from "date-fns";
import "animate.css";

const HeaderBar = ({ availableBalance, totalAssigned }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-4 py-8 bg-white shadow-sm animate__animated animate__fadeInRight">
      <div className="flex items-center flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <ChevronLeft
            size={30}
            className="text-gray-500 cursor-pointer"
            onClick={handlePrevMonth}
          />
          <div className="text-lg font-semibold">{format(currentDate, "MMMM yyyy")}</div>
          <ChevronRight
            size={30}
            className="text-gray-500 cursor-pointer"
            onClick={handleNextMonth}
          />
        </div>
        <input
          type="text"
          placeholder="Enter a note..."
          className="px-3 py-1 border border-gray-300 rounded text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <div className="text-sm bg-gray-100 px-4 py-2 rounded-md font-medium text-gray-700 mb-2 whitespace-nowrap">
          ₦ {availableBalance.toFixed(2)}{" "}
          <span className="ml-2 text-green-600">Current Balance ✓</span>
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
