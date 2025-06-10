// import axios from "axios";
// import { useEffect, useState } from "react";

// export const useSidebar = ({}) => {
//      const [collapsed, setCollapsed] = useState(true);
//   const [showAccounts, setShowAccounts] = useState(true);
//   const [userData, setUserData] = useState(null);
//   const userId = "6847f608255558fe75cdaf24";

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/v1/users");
//         const user = res.data.find((u) => u._id === userId);
//         setUserData(user);
//       } catch (err) {
//         console.error("Error fetching user data:", err.message);
//       }
//     };

//     fetchUserData();
//   }, []);

//   useEffect(() => {
//     const fetchAccounts = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/api/v1/accounts/${userId}`);
//         setAccounts(res.data);
//       } catch (err) {
//         console.error("Error fetching accounts:", err);
//       }
//     };

//     fetchAccounts();
//   }, [setAccounts]);

//   const handleAddAccount = async () => {
//     try {
//       const newAccount = {
//         userId,
//         name: `Account ${accounts.length + 1}`,
//         balance: 0,
//       };
//       const res = await axios.post("http://localhost:5000/api/v1/accounts", newAccount);
//       setAccounts((prev) => [...prev, res.data]);
//     } catch (err) {
//       console.error("Error adding account:", err);
//     }
//   };

//   const handleBalanceChange = async (id, value) => {
//     const newBalance = parseFloat(value) || 0;
//     updateAccountBalance(id, newBalance);

//     try {
//       await axios.patch(`http://localhost:5000/api/v1/accounts/${id}`, {
//         balance: newBalance,
//       });
//     } catch (err) {
//       console.error("Error updating balance:", err);
//     }
//   };

//   const handleDeleteAccount = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/v1/accounts/${id}`);
//       setAccounts((prev) => prev.filter((acc) => acc._id !== id));
//     } catch (err) {
//       console.error("Error deleting account:", err);
//     }
//   };

//   const handleLogout = () => {
//     window.location.href = "/";
//   };

//   return {
//     accounts,
//     addAccount,
//     handleBalanceChange,
//     handleDeleteAccount,
//     handleLogout,
//   }
// }