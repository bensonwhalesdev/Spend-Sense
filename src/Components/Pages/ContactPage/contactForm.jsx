import React from 'react';
import Button from '../../LandingPage/Button';

const ContactForm = () => {
  return (
    <div className=" flex items-center justify-center px-4 py-10">
      <form className="bg-[#1C1F58] p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-white">Contact Us</h2>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 text-sm font-medium text-white">Name</label>
          <input type="text" id="name" placeholder="Enter your name" className="bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium text-white">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" className="bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="text" className="mb-1 text-sm font-medium text-white">Message</label>
          <textarea name="text" id="message" placeholder='Message' className='bg-white px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white'></textarea>
        </div>

        <Button type='submit' text={'Send Message'} classStyle={'w-full bg-green-400 text-white font-semibold hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-300'} />
      </form>
    </div>
  );
};

export default ContactForm;
