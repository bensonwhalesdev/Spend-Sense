import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const FourthSection = () => {
  const data = [
    { name: "Jan", spent: 100000, saved: 34500 },
    { name: "Feb", spent: 65500, saved: 90400 },
    { name: "Mar", spent: 78800, saved: 20000 },
    { name: "Apr", spent: 60890, saved: 10278 },
    { name: "May", spent: 69750, saved: 54350 },
    { name: "Jun", spent: 42700, saved: 38539 },
  ];

  return (
    <section className="bg-[#D5D5E0] py-20 px-6 md:px-20 border-t-10 border-[#1C1F58] rounded-tl-[180px] border-l-10 border-[#1C1F58]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1C1F58] mb-4">Track Your Finances Monthly</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Stay in control with a clear breakdown of what you spend and what you save every month. With Spend-Sense, your financial journey is always visual and measurable.</p>

      <div className="w-full max-w-5xl mx-auto">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `₦${value}`} />
            <Tooltip formatter={(value) => `₦${value.toLocaleString()}`} labelStyle={{ fontWeight: "bold" }} />
            <Legend />
            <Bar dataKey="spent" fill="#EF4444" name="Amount Spent" />
            <Bar dataKey="saved" fill="#10B981" name="Amount Saved" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default FourthSection;
