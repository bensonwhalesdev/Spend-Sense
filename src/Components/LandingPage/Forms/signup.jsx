import axios from "axios";
import Button from "../Button";
import "./signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { apiClient } from "../../../lib/client";

const SignUp = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  async function submitHandler(e) {
    e.preventDefault();
    setisLoading(true);

    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character."
      );
      setisLoading(false);
      return;
    }

    try {
      const response = await apiClient.post("/users", formData);
      const { user, token } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role: "user",
      });

      navigate("/dashboard");
    } catch (error) {
      console.log("Signup error:", error.message);
    } finally {
      setisLoading(false);
    }
  }

  return (
    <div className="w-[500px] rounded-[10px] bg-[#1C1F58] px-5 py-4 text-black shadow-[#1C1F58] shadow-lg hover:shadow-2xl float-animation">
      <form
        onSubmit={submitHandler}
        className="relative flex flex-col items-center gap-7"
      >
        <span className="mb-2.5 text-center text-xl font-bold text-white">
          Become a Spend-Senser
        </span>

        <div className="relative ml-[-15px] w-full">
          <label
            htmlFor="firstname"
            className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white"
          >
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"
          />
        </div>

        <div className="relative ml-[-15px] w-full">
          <label
            htmlFor="lastname"
            className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white"
          >
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"
          />
        </div>

        <div className="relative ml-[-15px] w-full">
          <label
            htmlFor="email"
            className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"
          />
        </div>

        {/* Password */}
        <div className="relative ml-[-15px] w-full">
          <label
            htmlFor="password"
            className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white"
          >
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] pr-10 text-black placeholder:text-black outline-none focus:border-black"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/3 -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showPassword ? (
              <EyeOff className="text-red-500" size={20} />
            ) : (
              <Eye size={20} />
            )}
          </span>
          <p className="text-[15px] text-white mt-1">
            Password must be at least 8 characters and include at least 1 uppercase letter, 1 number, and 1 special character.
          </p>
        </div>

        {/* Confirm Password */}
        <div className="relative ml-[-15px] w-full">
          <label
            htmlFor="confirm-password"
            className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white"
          >
            Confirm Password
          </label>
          <input
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] pr-10 text-black placeholder:text-black outline-none focus:border-black"
          />
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
          >
            {showConfirmPassword ? (
              <EyeOff className="text-red-500" size={20} />
            ) : (
              <Eye size={20} />
            )}
          </span>
        </div>

        <Button
          isLoading={isLoading}
          type="submit"
          text={isLoading ? "Signing up..." : "Sign Up"}
          classStyle={
            "px-5 py-2 rounded-[10px] bg-green-400 text-white font-semibold hover:bg-green-600 transition-colors"
          }
        />
      </form>
    </div>
  );
};

export default SignUp;
