import { useState } from "react";
import Button from "../../../LandingPage/Button";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../../../lib/client";

const LoginForm = () => {
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    setisLoading(true);
    try {
      const response = await apiClient.post("/auth/login", formData)
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("User logged in:", user);
      navigate("/dashboard", { state: { user } });
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError("Invalid email or password.");
    } finally {
      setisLoading(false);
    }
  }

  return (
    <div className="w-[500px] rounded-[10px] bg-[#1C1F58] px-5 py-4 text-black shadow-[#1C1F58] shadow-lg hover:shadow-2xl float-animation">
      <form onSubmit={submitHandler} className="relative flex flex-col items-center gap-7">
        <span className="mb-2.5 text-center text-xl font-bold text-white">Welcome Back Spend-Senser</span>

        <div className="relative ml-[-15px] w-full">
          <label htmlFor="email" className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white">Email</label>
          <input id="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"/>
        </div>

        <div className="relative ml-[-15px] w-full">
          <label htmlFor="password" className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white">Password</label>
          <input id="password" type={showPassword ? "text" : "password"} placeholder="Password" required
            value={formData.password} onChange={handleChange} className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] pr-10 text-black placeholder:text-black outline-none focus:border-black"/>
          <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600">
            {showPassword ? <EyeOff className="text-red-500" size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {error && <p className="text-red-500 text-sm mt-2 bg-white rounded-[10px] px-5 py-2">{error}</p>}

        <Button isLoading={isLoading} type="submit" text={isLoading ? "Loading..." : "Login"} classStyle={"px-5 py-2 rounded-[10px] bg-green-400 text-white font-semibold hover:bg-green-600 transition-colors"} />
      </form>
    </div>
  );
};

export default LoginForm;
