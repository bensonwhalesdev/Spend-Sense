import React from 'react';
import Header from '../LandingPage/Header';

const ContactPage = () => {
  return (
   <>
     <Header />
      <div className="min-h-screen p-10 bg-gray-100 mt-20">
      <h1 className="text-3xl font-bold text-[#1C1F58]">Contact Us</h1>
      <p className="mt-4 text-gray-700">We’d love to hear from you.</p>
    </div>
   </>
  );
};

export default ContactPage;
