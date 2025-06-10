import React from "react";
import Header from "../../LandingPage/Header";
import ContactForm from "./ContactForm";
import Footer from "../../LandingPage/Footer";
import 'animate.css'

const ContactPage = () => {
  const imageurl = '/contact.avif';
  
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen mt-20">
        <div
          style={{
            backgroundImage: `url(${imageurl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-full md:w-1/2 h-screen md:h-auto shadow-lg transition-transform duration-500 hover:scale-105 animate__animated animate__fadeInLeft ">
          <h1 className="text-4xl font-semibold text-[#fff] text-center mt-20">Help When You Need It</h1>
          <p className="mt-4 text-[#fff] text-center">We’d love to hear from you.</p>
        </div>
        <div className="w-full md:w-1/2 h-auto flex items-center justify-center p-6 animate__animated animate__fadeInRight bg-[#D5D5E0]">
          <div className="w-full max-w-md p-8 rounded-lg shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;