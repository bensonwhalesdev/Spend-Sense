import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";
import BudgetTable from "./BudgetTable";
import SummaryPanel from "./SummaryPanel";
import "animate.css";

const Dashboard = () => {
  const [accounts, setAccounts] = useState([{ id: 1, name: "Account 1", balance: 0 }]);

  const [budgetCategories, setBudgetCategories] = useState([
    {
      group: "Bills",
      items: [
        { id: 1, name: "Rent", amount: 0 },
        { id: 2, name: "Utilities", amount: 0 },
        { id: 3, name: "Insurance", amount: 0 },
      ],
    },
    {
      group: "Needs",
      items: [{ id: 4, name: "Groceries", amount: 0 }],
    },
    {
      group: "Wants",
      items: [
        { id: 5, name: "Charity", amount: 0 },
        { id: 6, name: "Shopping", amount: 0 },
      ],
    },
  ]);

  const [totalAssigned, setTotalAssigned] = useState(0);

  const totalAvailableBalance = accounts.reduce((acc, a) => acc + a.balance, 0);

  const updateAccountBalance = (accountId, newBalance) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === accountId ? { ...acc, balance: newBalance } : acc
      )
    );
  };

  const addAccount = () => {
    const newId = accounts.length > 0 ? Math.max(...accounts.map((a) => a.id)) + 1 : 1;
    setAccounts((prev) => [...prev, { id: newId, name: `Account ${newId}`, balance: 0 } ]);
  };

  const deleteAccount = (accountId) => {
    setAccounts((prev) => prev.filter((acc) => acc.id !== accountId));
  };

  const updateBudgetItemAmount = (groupIndex, itemId, newAmount) => {
    setBudgetCategories((prev) => {
      const copy = [...prev];
      const group = copy[groupIndex];
      if (!group) return prev;
      group.items = group.items.map((item) => item.id === itemId ? { ...item, amount: newAmount } : item);
      return copy;
    });
  };

  const updateBudgetItemName = (groupIndex, itemId, newName) => {
    setBudgetCategories((prev) => {
      const copy = [...prev];
      const group = copy[groupIndex];
      if (!group) return prev;
      group.items = group.items.map((item) => item.id === itemId ? { ...item, name: newName } : item);
      return copy;
    });
  };

  const addBudgetItem = (groupIndex) => {
    setBudgetCategories((prev) => {
      const copy = [...prev];
      const group = copy[groupIndex];
      if (!group) return prev;
      const newItemId = Math.max(...copy.flatMap((g) => g.items.map((i) => i.id))) + 1;
      group.items.push({ id: newItemId, name: "", amount: 0 });
      return copy;
    });
  };

  return (
    <div className="relative">
      <div className="flex md:flex-row min-h-screen left-0 w-full z-10">
        <Sidebar 
          accounts={accounts}
          updateAccountBalance={updateAccountBalance}
          addAccount={addAccount}
          deleteAccount={deleteAccount}
        />
        <div className="flex-1 bg-gray-50">
          <HeaderBar
            availableBalance={totalAvailableBalance - totalAssigned}
            totalAssigned={totalAssigned}
          />
          <div className="flex flex-col lg:flex-row gap-4 p-1 animate__animated animate__fadeInUp">
            <div className="flex-1">
              <BudgetTable
                availableBalance={totalAvailableBalance}
                onAssignedChange={setTotalAssigned}
              />
            </div>
            <div className="w-full lg:w-1/3">
              <SummaryPanel
                accounts={accounts}
                budgetCategories={budgetCategories}
                totalAvailableBalance={totalAvailableBalance}
                totalAssigned={totalAssigned}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
