import React from 'react'

const CommunitySupport = () => {
  return (
    <section className="w-[80%] mx-auto bg-white rounded-[30px] py-5 px-5 mb-10 grid md:grid-cols-2 gap-10 items-center text-[#1C1F58] hover:scale-[1.05] transition-all duration-300">
      <img src="/community.PNG" alt="Supportive community" className="w-full max-w-[300px] rounded-lg shadow-lg order-2 md:order-1" />
      <div className="order-1 md:order-2">
        <h2 className="text-3xl font-bold mb-4">You’re Not Alone</h2>
        <p className="mb-4">
          Join a growing community of Spend-Sensers who share tips, wins, and motivation. We’re here for the journey.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>Access helpful guides and support</li>
          <li>Get inspiration from real users</li>
          <li>Live webinars and personal budgeting tips</li>
        </ul>
      </div>
    </section>
  )
}

export default CommunitySupport
