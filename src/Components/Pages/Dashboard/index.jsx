import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";
import BudgetTable from "./BudgetTable";
import SummaryPanel from "./SummaryPanel";
import Button from "../../LandingPage/Button";
import { useLocation } from "react-router-dom";
import { apiClient } from "../../../lib/client";

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [budgetCategories, setBudgetCategories] = useState([]);
  const [totalAssigned, setTotalAssigned] = useState(0);
 const storedUser = JSON.parse(localStorage.getItem("user"));
const userId = storedUser?._id;

  // Fetch accounts
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await apiClient.get(`/accounts/${userId}`)
        setAccounts(res.data);
      } catch (err) {
        console.error("Failed to fetch accounts:", err);
      }
    };
    fetchAccounts();
  }, []);

  // Fetch saved budget
  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const res = await apiClient.get(`/budgets/${userId}`)
        if (res.data.length > 0) {
          setBudgetCategories(res.data[0].categories || []);
        }
      } catch (err) {
        console.error("Error fetching budget:", err);
      }
    };
    fetchBudget();
  }, []);

  const saveBudget = async () => {
    try {
      const formatted = budgetCategories.map(group => ({
        group: group.group,
        items: group.items.map(item => ({
          name: item.name,
          amount: item.amount
        }))
      }));

      await apiClient.post(`/budgets/${userId}`, {
        categories: formatted,
      })

      alert("Budget saved!");
    } catch (err) {
      console.error("Failed to save budget:", err);
      alert("Failed to save budget.");
    }
  };

  const totalAvailableBalance = accounts.reduce((acc, a) => acc + a.balance, 0);
  const currentBalance = totalAvailableBalance - totalAssigned;

  const updateAccountBalance = (accountId, newBalance) => {
    setAccounts(prev =>
      prev.map(acc => (acc._id === accountId ? { ...acc, balance: newBalance } : acc))
    );
  };

  return (
    <div className="relative">
      <div className="flex md:flex-row min-h-screen left-0 w-full z-10">
        <Sidebar
          accounts={accounts}
          setAccounts={setAccounts}
          updateAccountBalance={updateAccountBalance}
        />
        <div className="flex-1 bg-gray-50">
          <HeaderBar availableBalance={currentBalance} totalAssigned={totalAssigned} />
          <div className="flex flex-col lg:flex-row gap-4 p-4">
            <div className="flex-1">
              <BudgetTable
                availableBalance={currentBalance}
                initialCategories={budgetCategories}
                onAssignedChange={(total, updated) => {
                  setTotalAssigned(total);
                  setBudgetCategories(updated);
                }}
              />
              <Button
                text="Save Budget"
                classStyle="border bg-green-500 text-white font-semibold px-4 py-2 rounded-md mt-4"
                onClick={saveBudget}
              />
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
