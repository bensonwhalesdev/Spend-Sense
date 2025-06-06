import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeaderBar = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-4 py-8 bg-white shadow-sm">

      <div className="flex items-center flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <ChevronLeft size={20} className="text-gray-500 cursor-pointer" />
          <div className="text-lg font-semibold">June 2025</div>
          <ChevronRight size={20} className="text-gray-500 cursor-pointer" />
        </div>
        <input type="text" placeholder="Enter a note..." className="px-3 py-1 border border-gray-300 rounded text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <div className="text-sm bg-gray-100 px-4 py-2 rounded-md font-medium text-gray-700 whitespace-nowrap">
        $2215.00 <span className="ml-2 text-green-600">All Money Assigned ✓</span>
      </div>
    </header>
  );
};

export default HeaderBar;
