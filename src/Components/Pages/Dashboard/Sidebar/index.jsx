import { useEffect, useState } from "react";
import { Home, PieChart, Wallet, PlusCircle, ChevronDown, Trash2, Menu } from "lucide-react";
import Button from "../../../LandingPage/Button";
import axios from "axios";
import 'animate.css'

const Sidebar = () => {
  const [accounts, setAccounts] = useState([]);
  const [showAccounts, setShowAccounts] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  const [userData, setUserData] = useState(null);

useEffect(() => {
  const fetchUserData = async () => {
    try {
   
      const response = await axios.get(`http://localhost:5000/api/v1/users`);

      const users = response.data;
      const userId = "684400a3cf95bf2b97b32b20";
      const user = users.find(u => u._id === userId);
      console.log(user );
      setUserData(user);
      
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  fetchUserData();
}, []);

  const handleAddAccount = () => {
    setAccounts([...accounts, {}]);
  };

  const deleteAccount = (index) => {
    const newAccounts = [...accounts];
    newAccounts.splice(index, 1);
    setAccounts(newAccounts);
  };

  function handleLogout (){
    window.location.href = "/";
  }
  
  return (
    <div className={`min-h-screen bg-[#12134C] text-white p-2 flex flex-col gap-6 transition-all animate__animated animate__fadeInLeft duration-300 ${collapsed ? "w-[80px]" : "w-[250px]"}`}>
      
      <button onClick={() => setCollapsed(!collapsed)} className="mb-4 text-white"><Menu className="w-6 h-6" /></button>

      {!collapsed && userData && (
        <div className="mb-4">
          <h2 className="text-lg font-bold">{`${userData.firstname}'s Plan`}</h2>
          <p className="text-sm text-gray-300">{userData.email}</p>
        </div>
      )}

      <nav className="flex flex-col gap-3">
        <button className="flex items-center gap-3 p-2 rounded bg-[#2E3092]">
          <Home className="w-5 h-5" /> {!collapsed && <span>Plan</span>}
        </button>
        <button className="flex items-center gap-3 p-2 hover:bg-[#2E3092] rounded">
          <PieChart className="w-5 h-5" /> {!collapsed && <span>Reflect</span>}
        </button>
        <button className="flex items-center gap-3 p-2 hover:bg-[#2E3092] rounded">
          <Wallet className="w-5 h-5" /> {!collapsed && <span>All Accounts</span>}
        </button>
      </nav>

      {!collapsed && (
        <div>
          <div onClick={() => setShowAccounts(!showAccounts)} className="flex items-center justify-between cursor-pointer mb-2 text-sm text-gray-300">
            <span>CASH</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${showAccounts ? "rotate-0" : "-rotate-90"}`}/>
          </div>

          {showAccounts && (
            <ul className="pl-4 text-sm space-y-2">
              {accounts.map((_, index) => (
                <li key={index} className="flex justify-between items-center bg-[#1A1C5A] px-2 py-1 rounded">
                  <div>
                    <span className="block font-medium">{`Account ${index + 1}`}</span>
                    <span className="text-xs text-gray-300">$3,000.00</span>
                  </div>
                  <Trash2 onClick={() => deleteAccount(index)} className="w-4 h-4 text-red-400 hover:text-red-600 cursor-pointer"/>
                </li>
              ))}
            </ul>
          )}

          <button onClick={handleAddAccount} className="mt-3 flex items-center gap-2 text-sm bg-[#2E3092] hover:bg-[#3b3db0] px-3 py-2 rounded transition"><PlusCircle className="w-4 h-4" /> Add Account
          </button>
          <Button text={"LogOut"} classStyle="px-5 py-2 rounded-[5px] mt-5 bg-green-400 text-[#fff] font-semibold hover:bg-green-600 transition-colors" onClick={handleLogout} />
        </div>
      )}
    </div>
  );
};

export default Sidebar;