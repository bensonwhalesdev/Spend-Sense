import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../../lib/client";


function useAuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await apiClient.get("/auth/me", {
          withCredentials: true,
        });
        // user is authenticated
      } catch (err) {
        navigate("/"); // redirect to login if not authenticated
      }
    };

    verifyUser();
  }, []);
}

export default useAuthRedirect;
