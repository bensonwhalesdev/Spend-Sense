import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { apiClient } from "../../../../../../lib/client";
import { toast } from "sonner";

const useUserProfile = () => {
  const [user, setUser] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [navigate]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
    if (storedUser?.firstname) {
      setFirstname(storedUser.firstname);
    }
  }, []);

  const handleDelete = async () => {
    if (!user?._id) return;

    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action is irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    setisLoading(true);

    try {
      await apiClient.delete(`/users/${user._id}`);
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      Swal.fire("Deleted!", "Your account has been deleted.", "success");
      navigate("/");
    } catch (err) {
      console.error("Error deleting account:", err);
      Swal.fire("Error", "Something went wrong while deleting your profile.", "error");
    } finally {
      setisLoading(false);
    }
  };

  const handleFirstnameUpdate = async () => {
    setisLoading(true);
    try {
      const res = await apiClient.patch(`/users/${user._id}`, { firstname });
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
      toast.success("First name updated successfully!");
    } catch (err) {
      toast.error("Failed to update first name.");
    } finally {
      setisLoading(false);
    }
  };

  const handleBack = () => navigate("/dashboard");

  return {
    user,
    firstname,
    setFirstname,
    isLoading,
    activeTab,
    setActiveTab,
    handleDelete,
    handleFirstnameUpdate,
    handleBack,
  };
};

export default useUserProfile;
