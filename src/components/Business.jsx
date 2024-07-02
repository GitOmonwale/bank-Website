import React from 'react'
import {features} from '../constants'
import Button from './Button'
const Business = () => {
  return (
     <section id='features' className='flex md:flex-row flex-col sm:px-16 px-6'>
<div className='flex-1 flex flex-col justify-center items-end'>
<h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
  You do the business,<br className='sm:block hidden'/>
  we'll handle the money.
</h2>
<p className=''>

</p>
<p>

</p>
<Button/>
</div>
     </section>
  )
}

export default Business


// export const features = [
//   {
//     id: "feature-1",
//     icon: star,
//     title: "Rewards",
//     content:
//       "The best credit cards offer some tantalizing combinations of promotions and prizes",
//   },
//   {
//     id: "feature-2",
//     icon: shield,
//     title: "100% Secured",
//     content:
//       "We take proactive steps make sure your information and transactions are secure.",
//   },
//   {
//     id: "feature-3",
//     icon: send,
//     title: "Balance Transfer",
//     content:
//       "A balance transfer credit card can save you a lot of money in interest charges.",
//   },
// ];