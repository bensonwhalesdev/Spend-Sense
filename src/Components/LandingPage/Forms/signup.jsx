import axios from "axios";
import Button from "../Button";
import "./signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    role: "user"
  });


  const handleChange = (e) => {
     setFormData({ ...formData, [e.target.id]: e.target.value, });
  }

  async function  submitHandler(e){
    e.preventDefault();
   try {
    const response = await axios.post("http://localhost:3000/api/v1/users", formData)
    console.log(response.data)
    setFormData({firstname: "", lastname: "", password: "", role: "user"})
     navigate("/dashboard");
   } catch (error) {
   console.log(error.message);
   }
    
  }
  return (
    <div className="w-[500px] rounded-[10px] bg-[#1C1F58] px-5 py-4 text-black shadow-[#1C1F58] shadow-lg hover:shadow-2xl float-animation">
      <form onSubmit={submitHandler} claction="" className="relative flex flex-col items-center gap-7">
        <span className="mb-2.5 text-center text-xl font-bold text-white">Become a Spend-Senser</span>

        <div className="relative ml-[-15px] w-full">
          <label className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white" htmlFor="firstname">First Name</label>
          <input id="firstname" type="text" placeholder="First Name" value={formData.firstname}
            onChange={handleChange} required className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"/>
        </div>

        <div className="relative ml-[-15px] w-full">
          <label className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white" htmlFor="lastname">Last Name</label>
          <input id="lastname" type="text" placeholder="Last Name" value={formData.lastname}
            onChange={handleChange} required className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"/>
        </div>

        <div className="relative ml-[-15px] w-full">
          <label className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" required value={formData.email}
            onChange={handleChange} className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"/>
        </div>

        <div className="relative ml-[-15px] w-full">
          <label className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white" htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" value={formData.password}
            onChange={handleChange} required className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"/>
        </div>

        <div className="relative ml-[-15px] w-full">
          <label className="absolute left-0 top-[-22px] cursor-text bg-[#1C1F58] px-1 pb-0 pt-2.5 text-sm text-white" htmlFor="confirm-password">Confirm Password</label>
          <input id="confirm-password" type="password" placeholder="Confirm Password" required
            className="w-full rounded-md border border-solid border-black bg-white px-2.5 py-[15px] text-black placeholder:text-black outline-none focus:border-black"/>
        </div>

        <Button type="submit" text={"Submit"} classStyle={"px-5 py-2 rounded-[10px] bg-green-400 text-white font-semibold hover:bg-green-600 transition-colors"}/>
      </form>
    </div>
  );
};

export default SignUp;
