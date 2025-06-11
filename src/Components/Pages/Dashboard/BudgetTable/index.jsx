import React, { useState, useEffect } from "react";
import { Home, Zap, Music, ShoppingCart, Heart, PlusCircle } from "lucide-react";
import 'animate.css';

const defaultCategories = [
  {
    group: "Bills",
    items: [
      { name: "Rent", amount: null, icon: <Home size={16} className="text-green-500" /> },
      { name: "Utilities", amount: null, icon: <Zap size={16} className="text-blue-500" /> },
      { name: "Insurance", amount: null },
      { name: "Music", amount: null, icon: <Music size={16} className="text-blue-500" /> },
    ],
  },
  {
    group: "Needs",
    items: [
      { name: "Groceries", amount: null, icon: <ShoppingCart size={16} className="text-green-500" /> },
    ],
  },
  {
    group: "Wants",
    items: [
      { name: "Charity", amount: null, icon: <Heart size={16} className="text-red-500" /> },
      { name: "Shopping", amount: null },
    ],
  },
];

const BudgetTable = ({ availableBalance = 0, onAssignedChange, initialCategories = [] }) => {
  const [categories, setCategories] = useState(initialCategories.length ? initialCategories : defaultCategories);
  const [totalAssigned, setTotalAssigned] = useState(0);

  useEffect(() => {
    if (initialCategories.length) {
      setCategories(initialCategories);
    }
  }, [JSON.stringify(initialCategories)]); // prevents unnecessary rerenders

  useEffect(() => {
    const total = categories
      .flatMap(group => group.items)
      .reduce((sum, item) => sum + (item.amount || 0), 0);

    setTotalAssigned(total);
    onAssignedChange?.(total, categories);
  }, [categories]);

  const handleAmountChange = (groupIndex, itemIndex, value) => {
    const updated = [...categories];
    updated[groupIndex].items[itemIndex].amount = isNaN(parseFloat(value)) ? null : parseFloat(value);
    setCategories(updated);
  };

  const handleNameChange = (groupIndex, itemIndex, value) => {
    const updated = [...categories];
    updated[groupIndex].items[itemIndex].name = value;
    setCategories(updated);
  };

  const handleAddItem = (groupIndex) => {
    const updated = [...categories];
    updated[groupIndex].items.push({ name: "", amount: null });
    setCategories(updated);
  };

  return (
    <div className="animate__animated animate__fadeInUp">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="p-2">Category</th>
            <th className="p-2">Assign</th>
            <th className="p-2">Activity</th>
            <th className="p-2">Assigned</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ group, items }, groupIndex) => (
            <React.Fragment key={`group-${groupIndex}`}>
              <tr className="bg-gray-100">
                <td colSpan="4" className="font-semibold text-sm p-2">{group}</td>
              </tr>
              {items.map((item, itemIndex) => (
                <tr key={`item-${itemIndex}`} className="border-b text-sm">
                  <td className="flex items-center gap-2 p-2">
                    {item.icon}
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleNameChange(groupIndex, itemIndex, e.target.value)}
                      placeholder="Item name"
                      className="border-b border-gray-300 focus:outline-none bg-transparent w-full"
                    />
                  </td>
                  <td className="p-2">
                    <input
                      type="number"
                      min={0}
                      value={item.amount ?? ""}
                      onChange={(e) => handleAmountChange(groupIndex, itemIndex, e.target.value)}
                      placeholder="0.00"
                      className="w-24 p-1 border border-gray-300 rounded text-sm"
                    />
                  </td>
                  <td className="p-2">₦0.00</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-white ${item.amount ? "bg-green-500" : "bg-gray-300"}`}>
                      ₦{item.amount ? item.amount.toFixed(2) : "0.00"}
                    </span>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="p-2">
                  <button
                    onClick={() => handleAddItem(groupIndex)}
                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    <PlusCircle size={16} /> Add item to {group}
                  </button>
                </td>
              </tr>
            </React.Fragment>
          ))}
          <tr className="bg-blue-100 font-semibold text-sm">
            <td colSpan="3" className="p-2 text-right">Total Assigned:</td>
            <td className="p-2 bg-green-300 text-black">₦{totalAssigned.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
