import React from "react";
import SignUp from "../Forms/signup";
import Card from "../Cards";

const SecondSection = () => {
  return (
    <div className="bg-[#D5D5E0]">
      <div className="bg-[#1C1F58] rounded-tl-[180px] p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#fff] mb-12">Why Sign Up for Our Budgeting Platform?</h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <Card h3text={'Gain Control of Your Finances'} ptext={`Say goodbye to financial guesswork. Our intuitive dashboard helps you track income, spending, and savings in real time.
        Visual breakdowns and insights show exactly where your money goes—giving you full control and clarity every month.`} />
        <Card h3text={'Budget with Purpose, Not Pressure'} ptext={`Unlike generic apps, we let you set goals tied to your lifestyle—whether it's saving for rent, school fees, or giving back.
        You’ll budget around your WHY, not just numbers.`} />
        <Card h3text={'Personalized Tips Made for Nigerians'} ptext={`From okada fuel costs to market savings, our smart tips and reminders are designed for the Nigerian economy.
        No imported advice—just real, local strategies that work for you.`} />
         <Card h3text={'Safe, Simple & Always Accessible'} ptext={`With bank-level encryption and mobile-first design, you can budget safely from anywhere. Whether you're online or offline, your progress is saved and synced seamlessly.`} />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
