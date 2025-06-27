import { ChevronLeft } from "lucide-react";
import useUserProfile from "./Hook/useUserProfile";

const ViewUserProfile = () => {
   const {
    user,
    firstname,
    setFirstname,
    isLoading,
    activeTab,
    setActiveTab,
    handleDelete,
    handleFirstnameUpdate,
    handleBack,
  } = useUserProfile();

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-white text-xl">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F112B] text-white flex flex-col md:flex-row px-4 py-10 gap-6">
      {/* Sidebar Tabs */}
      <div className="w-full md:w-1/4 space-y-4">
      <button onClick={handleBack} className="w-full py-3 px-4 text-left text-sm text-white hover:text-gray-300 flex items-center cursor-pointer">
          <ChevronLeft className="mr-2" /> Back to Dashboard
        </button>
        <button onClick={() => setActiveTab("profile")} className={`w-full py-3 px-4 rounded-md cursor-pointer ${activeTab === "profile" ? "bg-[#2A2E7F]" : "bg-[#1C1F58]"} hover:bg-[#2A2E7F]`}>
          Profile
        </button>
        <button onClick={() => setActiveTab("settings")} className={`w-full py-3 px-4 rounded-md cursor-pointer ${activeTab === "settings" ? "bg-[#2A2E7F]" : "bg-[#1C1F58]"} hover:bg-[#2A2E7F]`}>
          Settings
        </button>
        <button onClick={() => setActiveTab("delete")} className={`w-full py-3 px-4 rounded-md bg-red-600 hover:bg-red-700 cursor-pointer`}>
          Delete Profile
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 bg-[#1C1F58] rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold mb-8">{activeTab === "profile" ? "User Profile" : activeTab === "settings" ? "Settings" : "Delete Account"}</h2>

        {activeTab === "profile" && (
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-400 mb-1 uppercase tracking-widest">First Name</p>
              <h3 className="text-2xl w-70 font-semibold bg-[#2A2E7F] py-3 px-4 rounded-md">{user.firstname}</h3>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1 uppercase tracking-widest">Email Address</p>
              <h3 className="text-lg w-70 font-medium bg-[#2A2E7F] py-3 px-4 rounded-md">{user.email}</h3>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Edit First Name</label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-70 px-4 py-3 rounded-md bg-[#2A2E7F] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleFirstnameUpdate}
              className="bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-md font-medium shadow-md">
             {isLoading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        )}

        {activeTab === "delete" && (
          <div className="text-center">
            <p className="text-lg mb-6">Are you sure you want to delete your account?</p>
            <button
              onClick={handleDelete}
              disabled={isLoading}
              className="bg-red-500 hover:bg-red-700 transition-colors duration-300 py-3 px-6 text-white font-semibold rounded-lg shadow-md cursor-pointer">
              {isLoading ? "Deleting..." : "Delete My Account"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewUserProfile;
