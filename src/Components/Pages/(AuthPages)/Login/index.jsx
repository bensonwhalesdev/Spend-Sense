import React from 'react'
import LoginForm from './loginForm'
import { Link } from 'react-router-dom'

const Login = () => {

  
  return (
    <div className="min-h-screen bg-[#4b33d1] flex items-center justify-center px-4 py-10">
          <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10">
          
            <div className="lg:flex-1 text-center lg:text-left text-white space-y-6 animate__animated animate__fadeInLeft">
              <div className='flex flex-wrap gap-4 items-center justify-center lg:justify-start'>
                <Link to="/" className="text-sm border-b-3 pb-2 text-[1.5rem] text-gray-200 hover:text-white block mb-4">&larr; Home</Link>
              <Link to="/auth/signup" className="text-center mb-4 text-[1.5rem] pb-2 border-b-3 text-sm text-gray-200 hover:text-white cursor-pointer">New to Spend-Sense ?{' '} Sign Up
              </Link>
              </div>
    
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Turn Every Naira into a Step Forward.</h1>
              <p className="text-lg text-gray-200">Spend Sense is your partner in intentional spending, smart saving, and financial clarity. <strong>Start building the life you deserve,one smart choice at a time.</strong> </p>
            </div>
    
            <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md animate__animated animate__fadeInRight">
              <LoginForm />
            </div>
          </div>
        </div>
  )
}

export default Login