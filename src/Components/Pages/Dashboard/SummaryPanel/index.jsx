import 'animate.css'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Zap } from 'lucide-react';

const SummaryPanel = ({ currentBalance = 0, totalAssigned = 0 }) => {
  const available = currentBalance;
  const data = [
    { name: "Jan", spent: 50000, saved: 38500 },
    { name: "Feb", spent: 65000, saved: 19400 },
    { name: "Mar", spent: 28800, saved: 15000 },
    { name: "Apr", spent: 45890, saved: 10278 },
    { name: "May", spent: 69750, saved: 54350 },
    { name: "Jun", spent: 42700, saved: 38539 },
  ];


  return (
    <div className="p-4 bg-gray-50 flex flex-col gap-6 animate__animated animate__fadeInUp">
      <div>
        <h2 className="font-semibold text-gray-700">June's Summary</h2>
        <div className="text-sm mt-2">
          <div className="flex justify-between">
            <span>Left Over</span>
            <span>₦{available.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Assigned in June</span>
            <span>₦{totalAssigned.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Activity</span>
            <span>₦0.00</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-700">
            <span>Available</span>
            <span>₦{available.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2 text-sm text-gray-700">
          <Zap size={16} /> Auto-Assign
        </div>
        <div className="flex justify-between text-sm">
          <span>Underfunded</span>
          <span>₦0.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Assigned Last Month</span>
          <span>₦0.00</span>
        </div>
      </div>
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
    </div>
  );
};

export default SummaryPanel;
