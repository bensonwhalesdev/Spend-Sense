import React from 'react'
import Header from '../../LandingPage/Header'
import SignUp from '../../LandingPage/Forms/signup'

const SignupPage = () => {
  return (
    <div className='bg-white'>
        <Header />
        <div className="w-[90%] items-center">
            <SignUp/>
        </div>
    </div>
  )
}

export default SignupPage