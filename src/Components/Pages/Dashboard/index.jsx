import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";
import BudgetTable from "./BudgetTable";
import SummaryPanel from "./SummaryPanel";
import Button from "../../LandingPage/Button";
import { useFinance } from "./Hook/useFinance";

const Dashboard = () => {
  const { accounts,
    setAccounts,
    updateAccountBalance,
    budgetCategories,
    setBudgetCategories,
    totalAssigned,
    setTotalAssigned,
    currentBalance,
    isLoading,
    saveBudget,} = useFinance();

  return (
    <div className="relative">
      <div className="flex md:flex-row min-h-screen left-0 w-full z-10">
        <Sidebar accounts={accounts} setAccounts={setAccounts} updateAccountBalance={updateAccountBalance} />
        <div className="flex-1 bg-gray-50">
          <HeaderBar availableBalance={currentBalance} totalAssigned={totalAssigned} />
          <div className="flex flex-col lg:flex-row gap-4 p-4">
            <div className="flex-1">
              <BudgetTable availableBalance={currentBalance} initialCategories={budgetCategories}
                onAssignedChange={(total, updated) => { setTotalAssigned(total); setBudgetCategories(updated); }} />
              <Button isLoading={isLoading} text={isLoading ? "Saving..." : "Save Budget"}
                classStyle="border bg-green-500 text-white font-semibold px-4 py-2 rounded-md mt-4"
                onClick={saveBudget} />
            </div>
            <div className="w-full lg:w-1/3">
              <SummaryPanel currentBalance={currentBalance} totalAssigned={totalAssigned} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;