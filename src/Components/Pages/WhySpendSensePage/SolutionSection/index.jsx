import React from 'react';
import 'animate.css';

const Solution = () => {
  return (
    <section className="w-[80%] mx-auto bg-white rounded-[30px] py-5 px-5 mb-5 grid md:grid-cols-2 gap-10 items-center text-[#1C1F58] animate__animated animate__fadeInRight hover:scale-[1.05] transition-all duration-300 ">
  <div>
    <h2 className="text-3xl font-bold mb-4">Tired of living paycheck to paycheck?</h2>
    <p className="mb-4">
      Most budgeting apps track your spending. Spend-Sense helps you plan it.
      That means less stress, smarter goals, and more money in your pocket.
    </p>
    <ul className="list-disc ml-5 space-y-2">
      <li>Assign every Naira a job</li>
      <li>Prepare for emergencies before they happen</li>
      <li>Build real savings you can count on</li>
    </ul>
  </div>
  <img src="/paycheck.avif" alt="Planning graphic" className="w-full max-w-[400px] rounded-lg shadow-lg" />
</section>

  )
}

export default Solution