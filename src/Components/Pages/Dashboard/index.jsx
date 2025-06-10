import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";
import BudgetTable from "./BudgetTable";
import SummaryPanel from "./SummaryPanel";
import axios from "axios";
import Button from "../../LandingPage/Button";

const userId = "6847f608255558fe75cdaf24"; // Replace with actual dynamic user ID if needed

const Dashboard = () => {
  const [accounts, setAccounts] = useState([]);
  const [budgetCategories, setBudgetCategories] = useState([]);
  const [totalAssigned, setTotalAssigned] = useState(0);

  // Fetch accounts from database
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/accounts/${userId}`);
        setAccounts(res.data);
      } catch (err) {
        console.error("Failed to fetch accounts:", err);
      }
    };

    fetchAccounts();
  }, []);

  const saveBudget = async () => {
  try {
    const plainCategories = budgetCategories.map(group => ({
      group: group.group,
      items: group.items.map(item => ({
        name: item.name,
        amount: item.amount
      }))
    }));

    await axios.post(`http://localhost:5000/api/v1/budgets/${userId}`, {
      categories: plainCategories,
    });
    alert('Budget saved!');
  } catch (err) {
    console.error(err);
    alert('Failed to save budget');
  }
};

useEffect(() => {
    const fetchBudget = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/budgets/${userId}`);
        setBudgetCategories(res.data.categories);
      } catch (err) {
        console.error("Error fetching budget:", err);
      }
    };

    fetchBudget();
  }, []);


  // Compute current balance
  const totalAvailableBalance = accounts.reduce((acc, a) => acc + a.balance, 0);
  const currentBalance = totalAvailableBalance - totalAssigned;

  const updateAccountBalance = (accountId, newBalance) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc._id === accountId ? { ...acc, balance: newBalance } : acc
      )
    );
  };

  const handleAssignedChange = (newTotal) => {
    setTotalAssigned(newTotal);
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
          <HeaderBar
            availableBalance={currentBalance}
            totalAssigned={totalAssigned}
          />
          <div className="flex flex-col lg:flex-row gap-4 p-4">
            <div className="flex-1">
              <BudgetTable
                budgetCategories={budgetCategories}
                setBudgetCategories={setBudgetCategories}
                onAssignedChange={(total, updatedCategories) => {
                          setTotalAssigned(total);
                         setBudgetCategories(updatedCategories); // ✅ update state!
                              }}
                initialCategories={budgetCategories}
              />
              <div>
              <Button text={'Save Budget'}  classStyle={'border bg-green-500 text-white font-semibold px-4 py-2 rounded-md mt-4'} onClick={saveBudget}/>
            </div>
            </div>
            <div className="w-full lg:w-1/3">
              <SummaryPanel
                // accounts={accounts}
                currentBalance={currentBalance}
                totalAssigned={totalAssigned}
                // budgetCategories={budgetCategories}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
