import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GuidePage = () => {
  return (
    <div className="min-h-screen bg-[#12134C] text-white px-6 py-12">
        <Link to="/dashboard" className="flex items-center gap-2 text-white hover:text-[#D5D5E0] transition mb-6"> <ChevronLeft size={24} />
        <span className="text-lg font-medium">Back to Dashboard</span>
      </Link>
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Your Finance Dashboard!</h1>

        <div className="bg-[#1F1F4A] p-6 rounded-2xl shadow space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">📘 Plan Your Budget</h2>
            <p className="text-gray-300">
              Use the <strong>Budget Table</strong> to set financial goals by assigning amounts to different categories 
              like rent, groceries, savings, etc. You can even create custom items. Total assigned updates automatically.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center mt-3 text-blue-400 hover:underline"
            >
              Go to Planner <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">🏦 Manage Accounts</h2>
            <p className="text-gray-300">
              In the <strong>Sidebar</strong>, you can add multiple cash accounts, assign initial balances, and delete any unnecessary ones. 
              These balances are used to calculate your current available funds.
            </p>
            <Link
              to="/allaccounts"
              className="inline-flex items-center mt-3 text-blue-400 hover:underline"
            >
              View All Accounts <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">📊 Reflect on Your Progress</h2>
            <p className="text-gray-300">
              The <strong>Reflect</strong> page helps you visualize how much you’ve spent and saved over time. 
              Navigate between months to see your financial progress using a dynamic bar chart.
            </p>
            <Link
              to="/reflect"
              className="inline-flex items-center mt-3 text-blue-400 hover:underline"
            >
              Go to Reflect <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">📄 Account Summary</h2>
            <p className="text-gray-300">
              On the <strong>Account Overview</strong> page, view the summary of your assigned budget and current balance 
              from all accounts. It gives you a quick snapshot of your financial standing.
            </p>
            {/* <Link
              to="/accounts-overview"
              className="inline-flex items-center mt-3 text-blue-400 hover:underline"
            >
              View Overview <ChevronRight className="ml-2 w-4 h-4" />
            </Link> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
