import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-16 pb-16'>
      <p className='text-gray-500 text-base'>Trusted by learners from</p>
      <div className=' md:mt-10 mt-5 items-center justify-center flex gap-10 flex-wrap md:gap-16 '>
        <img src={assets.microsoft_logo} alt="Microsoft" className='w-20 md:w-28' />
        <img src={assets.walmart_logo} alt="Microsoft" className='w-20 md:w-28' />
        <img src={assets.accenture_logo} alt="Microsoft" className='w-20 md:w-28' />
        <img src={assets.adobe_logo} alt="Microsoft" className='w-20 md:w-28' />
        <img src={assets.paypal_logo} alt="Microsoft" className='w-20 md:w-28' />
      </div>
    </div>
  )
}

export default Companies
