import React from 'react'
import Button from '../Button'

const HeroSection = () => {
  return (
    <div className="relative bg-[#545BFE] rounded-br-[200px]">
      <div className="absolute top-20 w-full h-[100px] bg-[#1C1F58] clip-v-shape"></div>

      <div className='h-[90vh]'>
         <div className='absolute top-60 p-10'>
          <h1 className='text-[#fff] text-[50px] font-bold'>Budget with a why</h1>
          <p className='text-[#fff] text-[20px] font-normal mt-5'>Spend, save, and give toward what's important in life</p>
          <Button text={'Signup'} classStyle={'px-5 py-2 rounded-[10px] bg-green-400 text-white font-semibold hover:bg-green-600 transition-colors duration-300 mt-5'} />
         </div>
         
      </div>
      
      

      
    </div>
  )
}

export default HeroSection
