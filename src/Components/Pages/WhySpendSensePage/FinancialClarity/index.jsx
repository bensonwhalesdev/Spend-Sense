import React from 'react'

const FinancialClarity = () => {
  return (
    <section className="w-[80%] mx-auto bg-white rounded-[30px] py-5 px-5 mb-5 grid md:grid-cols-2 gap-10 items-center text-[#1C1F58] hover:scale-[1.05] transition-all duration-300">
      <div>
        <h2 className="text-3xl font-bold mb-4">Clarity Over Confusion</h2>
        <p className="whitespace-normal break-words mb-4">
          Tired of wondering where your money went? With Spend-Sense, your spending habits and saving insights are crystal clear.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Understand your real expenses</li>
          <li>Clean, visual reports and charts</li>
          <li>Instant notifications on budget changes</li>
        </ul>
      </div>
      <img src="/clarity.jpg" alt="Clarity and insights" className="w-full max-w-[300px] rounded-lg shadow-lg" />
    </section>
  )
}

export default FinancialClarity
