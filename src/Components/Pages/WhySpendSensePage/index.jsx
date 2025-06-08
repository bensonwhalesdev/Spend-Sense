import React from "react";
import Header from "../../LandingPage/Header";
import HeroSection from "./HeroSection";
import Solution from "./SolutionSection";
import Footer from "../../LandingPage/Footer";
import SmartPlanning from "./SmartPlannig";
import FinancialClarity from "./FinancialClarity";
import CommunitySupport from "./CommunitySupport";

const WhySpendSense = () => {
  return (
    <div className="bg-[#D5D5E0]">
      <Header />
      <HeroSection />
      <Solution />
      <SmartPlanning />
      <FinancialClarity />
      <CommunitySupport />
      <Footer />
    </div>
  );
};

export default WhySpendSense;
