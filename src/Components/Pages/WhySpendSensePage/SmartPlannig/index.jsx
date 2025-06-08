import React from 'react'

const SmartPlanning = () => {
  return (
    <section className="w-[80%] mx-auto bg-white rounded-[30px] py-5 px-5 mb-5 grid md:grid-cols-2 gap-10 items-center text-[#1C1F58] hover:scale-[1.05] transition-all duration-300">
      <img src="/plan.jpg" alt="Smart planning" className="w-full max-w-[300px] rounded-lg shadow-lg order-2 md:order-1" />
      <div className="order-1 md:order-2">
        <h2 className="text-3xl font-bold mb-4">Plan Smarter, Not Harder</h2>
        <p className="mb-4">
          Forget spreadsheets. Spend-Sense gives you intuitive tools to allocate funds, track goals, and stay ahead of your finances with ease.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Set monthly and long-term financial goals</li>
          <li>Auto-track your progress</li>
          <li>Real-time budget suggestions</li>
        </ul>
      </div>
    </section>
  )
}

export default SmartPlanning
