import { useState } from "react";
import Button from "../../../LandingPage/Button";
import axios from "axios";


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/v1/users/login", formData);
      const user = response.data;
      console.log("User logged in:", user);
      window.location.href = "/dashboard";

    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      setError("Invalid email or password.");
    }
  }

  return (
    <div className="w-[500px] rounded-[10px] bg-[#1C1F58] px-5 py-4 text-black shadow-[#1C1F58] shadow-lg hover:shadow-2xl float-animation">
      <form onSubmit={submitHandler} className="relative flex flex-col items-center gap-7">
        <span className="mb-2.5 text-center text-xl font-bold text-white">Welcome Back Spend-Senser</span>

        <div className="relative ml-[-15px] w-full">
          <label className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"/>
        </div>

        <div className="relative ml-[-15px] w-full">
          <label className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white" htmlFor="password">Password</label>
          <input id="password" type="password"placeholder="Password" required value={formData.password} onChange={handleChange} className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"/>
        </div>

        {error && <p className="text-red-500 text-sm mt-2 bg-white rounded-[10px] px-5 py-2">{error}</p>}

        <Button type="submit" text={"Login"} classStyle={"px-5 py-2 rounded-[10px] bg-green-400 text-white font-semibold hover:bg-green-600 transition-colors"}/>
      </form>
    </div>
  );
};

export default LoginForm;
