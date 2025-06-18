import 'animate.css'
import { Zap } from 'lucide-react';

const SummaryPanel = ({ currentBalance = 0, totalAssigned = 0 }) => {
  const available = currentBalance;


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
    </div>
  );
};

export default SummaryPanel;
