import React from 'react'
import { stats } from '../constants'
const Stats = () => {
  return (
   <section className='flex items-center justify-center flex-wrap sm:mb-20 mb-6'>
  {stats.map((stat, index)=>(
<div key={stat.id} className='flex-1 flex justify-start items-center m-3'>
 <h4 className='text-white xs:text-4xl xs:leading-[53px] leading-[43px] text-3xl font-semibold font-poppins'>{stat.value}</h4>
 <p className='uppercase text-gradient xs:text-xl text-2xl xs:leading-[26px] leading-[21px] font-normal ml-3 font-poppins'>{stat.title}</p>
</div>
  ))}
   </section>
  )
}

export default Stats

// export const stats = [
//   {
//     id: "stats-1",
//     title: "User Active",
//     value: "3800+",
//   },
//   {
//     id: "stats-2",
//     title: "Trusted by Company",
//     value: "230+",
//   },
//   {
//     id: "stats-3",
//     title: "Transaction",
//     value: "$230M+",
//   },
// ];