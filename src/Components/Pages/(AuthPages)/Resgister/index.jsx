import React from 'react';
import SignUp from '../../../LandingPage/Forms/signup';
import { Link } from 'react-router-dom';
import 'animate.css'

const Register = () => {
  return (
    <div className="min-h-screen bg-[#4b33d1] flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
      
        <div className="lg:flex-1 text-center lg:text-left text-white space-y-6 animate__animated animate__fadeInLeft">
          <div className='flex flex-wrap gap-4 items-center justify-center lg:justify-start'>
            <Link to="/" className="text-sm border-b-3 pb-2 text-[1.5rem] text-gray-200 hover:text-white block mb-4">&larr; Back</Link>
          <div className="text-center mb-4 text-[1.5rem] pb-2 border-b-3 text-sm text-gray-200 hover:text-white cursor-pointer">Already have an account?{' '}<Link to="/auth/login">Login</Link>
          </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Try Spend-Sense free for 30 days</h1>
          <p className="text-lg text-gray-200">Start building your smartest budget yet, and take control of your money for good.Most Spend-Sensers save <strong>₦250,000+</strong> in their first month (and honestly,you seem like you’ll do even better).</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md animate__animated animate__fadeInRight">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Register;
