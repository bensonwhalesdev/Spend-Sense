import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { apiClient } from "../../../../../lib/client";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ViewUserProfile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
      }
    }, []);
    
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleDelete = async () => {
  if (!user?._id) return;

  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'This action is irreversible!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });

  if (!result.isConfirmed) return;

  setisLoading(true);

  try {
    await apiClient.delete(`/users/${user._id}`);
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    Swal.fire('Deleted!', 'Your account has been deleted.', 'success');

    navigate('/');
  } catch (err) {
    console.error('Error deleting account:', err);
    Swal.fire('Error', 'Something went wrong while deleting your profile.', 'error');
  } finally {
    setisLoading(false);
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
          <buttonm isLoading={isLoading} onClick={handleDelete} className="w-full bg-red-500 hover:bg-red-700 transition-colors duration-300 py-3 px-6 text-white font-semibold rounded-lg shadow-md cursor-pointer"> {isLoading ? "Deleting..." : "Delete My Account"} </buttonm>
        </div>
      </div>
    </div>
  );
};

export default ViewUserProfile;
