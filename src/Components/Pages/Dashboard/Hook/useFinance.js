import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../../../lib/client";

export const useFinance = () => {
  const [accounts, setAccounts] = useState([]);
  const [budgetCategories, setBudgetCategories] = useState([]);
  const [totalAssigned, setTotalAssigned] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?._id;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  // Fetch accounts
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await apiClient.get(`/accounts/${userId}`);
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
      const res = await apiClient.get(`/budgets/${userId}`);
      if (res.data.length > 0) {
        const categories = res.data[0].categories || [];
        setBudgetCategories(categories);

        const assigned = categories.reduce((sum, group) => {
          return (
            sum +
            group.items.reduce((groupSum, item) => groupSum + Number(item.amount || 0), 0)
          );
        }, 0);

        setTotalAssigned(assigned);
      }
    } catch (err) {
      console.error("Error fetching budget:", err);
    }
  };
  fetchBudget();
}, []);


  const saveBudget = async () => {
    setIsLoading(true);
    try {
      const formatted = budgetCategories.map((group) => ({
        group: group.group,
        items: group.items.map((item) => ({
          name: item.name,
          amount: item.amount,
        })),
      }));

      await apiClient.post(`/budgets/${userId}`, {
        categories: formatted,
      });

      toast.success("Budget saved!");
    } catch (err) {
      console.error("Failed to save budget:", err);
      toast.error("Failed to save budget.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateAccountBalance = (accountId, newBalance) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc._id === accountId ? { ...acc, balance: newBalance } : acc
      )
    );
  };

  const totalAvailableBalance = accounts.reduce((acc, a) => acc + a.balance, 0);
  const currentBalance = totalAvailableBalance - totalAssigned;

  return {
    accounts,
    setAccounts,
    updateAccountBalance,
    budgetCategories,
    setBudgetCategories,
    totalAssigned,
    setTotalAssigned,
    currentBalance,
    isLoading,
    saveBudget,
  };
};