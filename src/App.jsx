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
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aut magnam nisi nihil molestias assumenda quas possimus, sed accusantium doloribus, sapiente placeat, est illum perferendis fugiat veritatis voluptatem fuga dolor.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis adipisci ullam, asperiores voluptates, aliquam molestiae accusamus quam saepe officiis debitis temporibus nostrum neque, repudiandae omnis. Sint id voluptate aut ipsum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, labore repellendus cumque odit saepe optio dolorum qui sed praesentium, unde consequuntur expedita error voluptas iure voluptatum sit, sapiente debitis. Ea!
      </div>
    </>

  )
}

export default App
