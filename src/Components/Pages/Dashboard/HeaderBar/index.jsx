import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeaderBar = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b bg-white">
      <div className="flex items-center gap-4">
        <ChevronLeft size={20} className="text-gray-500" />
        <div className="text-lg font-semibold">June 2025</div>
        <ChevronRight size={20} className="text-gray-500" />
        <input
          placeholder="Enter a note..."
          className="ml-4 px-2 py-1 border rounded text-sm"
        />
      </div>
      <div className="bg-gray-100 p-2 rounded text-sm font-medium text-gray-700">
        $0.00 <span className="ml-2">All Money Assigned ✓</span>
      </div>
    </header>
  );
};

export default HeaderBar;