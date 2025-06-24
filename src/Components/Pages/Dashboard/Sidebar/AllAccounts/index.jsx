import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useFinance } from "../../Hook/useFinance"; // make sure this path is correct

const AccountsOverview = () => {
  const {
    accounts,
    currentBalance,
    totalAssigned,
    loading,
  } = useFinance();

  if (loading) return <p className="p-8 text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-[#12134C] text-white p-8">
      {/* Back Button */}
      <Link
        to="/dashboard"
        className="flex items-center gap-2 text-white hover:text-[#D5D5E0] transition mb-6"
      >
        <ChevronLeft size={24} />
        <span className="text-lg font-medium">Back to Dashboard</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Account Summary</h1>

      {/* Summary Cards */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#1E1F5C] rounded-2xl p-4 shadow">
          <h2 className="text-lg font-medium">Total Assigned</h2>
          <p className="text-2xl font-semibold text-green-400">
            ₦{totalAssigned.toLocaleString()}
          </p>
        </div>
        <div className="bg-[#1E1F5C] rounded-2xl p-4 shadow">
          <h2 className="text-lg font-medium">Current Balance</h2>
          <p className="text-2xl font-semibold text-blue-400">
            ₦{currentBalance.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Account Table */}
      <div className="bg-[#D5D5E0] rounded-xl overflow-hidden shadow">
        <table className="min-w-full text-black">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">Account Name</th>
              <th className="py-3 px-4 text-left">Balance</th>
            </tr>
          </thead>
          <tbody>
            {accounts.length > 0 ? (
              accounts.map((account) => (
                <tr key={account._id} className="border-t">
                  <td className="py-3 px-4">{account.name}</td>
                  <td className="py-3 px-4">
                    ₦{account.balance?.toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-4 px-4" colSpan="2">
                  No accounts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountsOverview;
