import { Home, Zap, Music, ShoppingCart, Heart } from 'lucide-react';

const BudgetTable = () => {
  const categories = [
    { group: 'Bills', items: [
      { name: 'Rent', amount: 1700, icon: <Home size={16} /> },
      { name: 'Utilities', amount: 200, icon: <Zap size={16} /> },
      { name: 'Insurance', amount: 0 },
      { name: 'Music', amount: 15, icon: <Music size={16} /> }
    ]},
    { group: 'Needs', items: [
      { name: 'Groceries', amount: 300, icon: <ShoppingCart size={16} /> },
    ]},
    { group: 'Wants', items: [
      { name: 'Charity', amount: 0, icon: <Heart size={16} /> },
      { name: 'Shopping', amount: 0 }
    ]},
  ];

  return (
    <div className="w-[60%]">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="p-2">Category</th>
            <th className="p-2">Assigned</th>
            <th className="p-2">Activity</th>
            <th className="p-2">Available</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ group, items }, index) => (
            <>
              <tr key={`group-${index}`} className="bg-gray-100">
                <td colSpan="4" className="font-semibold text-sm p-2">{group}</td>
              </tr>
              {items.map((item, i) => (
                <tr key={`item-${i}`} className="border-b text-sm">
                  <td className="flex items-center gap-2 p-2">{item.icon} {item.name}</td>
                  <td className="p-2">${item.amount.toFixed(2)}</td>
                  <td className="p-2">$0.00</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded text-white ${item.amount === 0 ? 'bg-gray-300' : 'bg-green-500'}`}>
                      ${item.amount.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;