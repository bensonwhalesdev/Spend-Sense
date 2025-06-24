import { addMonths, format, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Reflect = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
      }
    }, []);

  const data = [
    { name: "Jan", spent: 50000, saved: 38500 },
    { name: "Feb", spent: 65000, saved: 19400 },
    { name: "Mar", spent: 28800, saved: 15000 },
    { name: "Apr", spent: 45890, saved: 10278 },
    { name: "May", spent: 69750, saved: 54350 },
    { name: "Jun", spent: 42700, saved: 38539 },
  ];

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="min-h-screen bg-[#12134C] text-[#D5D5E0] px-6 py-8">
      <div className="mb-6">
        <Link
                to="/dashboard"
                className="flex items-center gap-2 text-white hover:text-[#D5D5E0] transition mb-6"
              >
                <ChevronLeft size={24} />
                <span className="text-lg font-medium">Back to Dashboard</span>
              </Link>
      </div>

      

      <div className="bg-[#1F1F4A] p-6 rounded-2xl shadow-xl">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#D5D5E0" />
            <YAxis
              stroke="#D5D5E0"
              tickFormatter={(value) => `₦${value.toLocaleString()}`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#2A2A60", border: "none" }}
              labelStyle={{ fontWeight: "bold", color: "#D5D5E0" }}
              itemStyle={{ color: "#D5D5E0" }}
              formatter={(value) => `₦${value.toLocaleString()}`}
            />
            <Legend
              wrapperStyle={{ color: "#D5D5E0" }}
            />
            <Bar dataKey="spent" fill="#EF4444" name="Amount Spent" barSize={40} />
            <Bar dataKey="saved" fill="#10B981" name="Amount Saved" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Reflect;
