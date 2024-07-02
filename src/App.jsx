import { useState } from 'react'
import { Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Navbar, Stats, Testimonial} from "../src/components/index"
function App() {

  return (
    <>
      <div className='bg-primary w-full overflow-hidden'>
        <div className='sm:px-16 px-6 flex justify-center items-center'>
          <div className='xl:max-w-7xl w-full'>
            <Navbar />
          </div>
        </div>
      </div>

      <div className='bg-primary flex items-start justify-between'>
        <div className='xl:max-w-7xl w-full'>
          <Hero />
        </div>
      </div>

      <div className='bg-primary flex items-start justify-between sm:px-16 px-6'>
        <div className='sm:max-w-7xl w-full'>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </>

  )
}

export default App
