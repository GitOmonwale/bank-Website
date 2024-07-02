import React from 'react'
import { robot, discount } from '../assets'
import GetStarted from './GetStarted';
const Hero = () => {
  return (
    <section id='home' className='sm:py-16 py-6 flex md:flex-row flex-col '>
      <div className='flex flex-col gap-2 justify-center items-start xl:px-0 sm:px-16 px-6'>
        <div className='bg-discount-gradient rounded-xl py-1 px-2 flex items-center justify-between gap-2'>
          <img src={discount} alt="discount-logo" className='' />
          <p className='uppercase text-sm text-dimWhite'>
            <span className='text-white'>20% </span>
            discount for
            <span className='text-white'> 1 month </span>
            account
          </p>
        </div>
        <div className='flex flex-row justify-between item-center w-full'>
          <h1 className='flex-1 ss:text-7xl text-5xl font-poppins font-semibold text-white ss:leading-[75px] leading-[65px]'>
            The Next <br className='sm:block hidden' />
            <span className='text-gradient'>Generation</span><br />
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        <h1 className='ss:text-6xl text-4xl font-poppins font-semibold text-white ss:leading-[75px] leading-[65px] w-full'>
          Payment method.
        </h1>
        <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
          Our team of experts uses a methodology to identify the credit cards most likely to fix your needs. We examine annual percentage rates, annual fees
        </p>
      </div>
      <div>
        <img src={robot} alt="billing" className='relative z-10' />
        <div className='absolute pink__gradient top-0 right-20 z-[0] w-1/3 h-1/3'></div>
        <div className='absolute white__gradient bottom-40 right-20 z-[1] w-3/4 h-3/4'></div>
        <div className='absolute blue__gradient right-20 -bottom-1 z-[0] w-1/2 h-1/2'></div>
      </div>
      <div className='ss:hidden flex justify-center items-center'>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero