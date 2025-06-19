import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { apiClient } from "../../../../../lib/client";

const ViewUserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action is irreversible.");
    if (!confirmDelete || !user?._id) return;

    try {
      await apiClient.delete(`/users/${user._id}`);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    } catch (err) {
      console.error("Error deleting account:", err);
      alert("Something went wrong while deleting your profile.");
    }
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  if (!user) return <div className="h-screen flex items-center justify-center text-white text-xl">Loading profile...</div>;

  return (
    <div className="min-h-screen bg-[#0F112B] text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-[#1C1F58] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 relative animate__animated animate__fadeIn">

        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute left-4 top-4 flex items-center text-sm text-white hover:text-gray-300 cursor-pointer"
        >
          <ArrowLeft className="mr-1" size={18} />
          Back to Dashboard
        </button>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-4">User Profile</h2>

        <div className="space-y-8 text-center">
          {/* First Name */}
          <div>
            <p className="text-sm text-gray-400 mb-1 uppercase tracking-widest">First Name</p>
            <h3 className="text-2xl font-semibold bg-[#2A2E7F] py-3 rounded-md">{user.firstname}</h3>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm text-gray-400 mb-1 uppercase tracking-widest">Email Address</p>
            <h3 className="text-lg sm:text-xl font-medium bg-[#2A2E7F] py-3 rounded-md">{user.email}</h3>
          </div>
        </div>

        {/* Delete Button */}
        <div className="mt-12">
          <button
            onClick={handleDelete}
            className="w-full bg-red-500 hover:bg-red-700 transition-colors duration-300 py-3 px-6 text-white font-semibold rounded-lg shadow-md cursor-pointer"
          >
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewUserProfile;
