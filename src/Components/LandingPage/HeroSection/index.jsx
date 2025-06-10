import React from "react";
import Button from "../Button";
import SignUp from "../Forms/signup";
import "animate.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  //  const imageUrl = '/budgeting.webp';
  return (
    <div className="relative bg-[#E9E9EF] rounded-br-[180px] overflow-hidden opacity-90" style={{ backgroundImage: `url(${''})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',}}>
      <div className="absolute top-20 w-full h-[100px] bg-[#1C1F58] clip-v-shape z-0"></div>
      <div className="relative z-10 flex flex-wrap lg:flex-row items-center justify-around px-10 pt-50 pb-20">
        <div className="max-w-xl mb-16 lg:mb-0 animate__animated animate__backInLeft">
          <h1 className="text-black text-[40px] lg:text-[50px] font-bold leading-tight">Budget with a why</h1>
          <p className="text-black text-[18px] lg:text-[20px] font-normal mt-5">Spend, save, and give toward what's important in life</p>
          <Link to='/auth/signup'><Button text={"Start your Free Trial"} classStyle={"px-5 py-2 rounded-[10px] bg-green-400 text-white font-semibold hover:bg-green-600 transition-colors duration-300 mt-5 cursor-pointer"}/></Link>
          <p className="text-black text-[18px] lg:text-[20px] font-normal mt-5">No credit card required!</p>
        </div>
        <div className="mt-10 lg:mt-0 animate__animated animate__fadeInRight">
          {/* <SignUp /> */}
          <img className="size-130 rounded-[10px]" src="/budget.avif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
