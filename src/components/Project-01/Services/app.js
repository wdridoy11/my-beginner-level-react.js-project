import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Services from './Services'
import ServicesData from './services.json'
import style from './services.css'

const app = () => {
   return (
      <>
         <section id='services'>
            <div className="container">
               <h1 className='section-title'>Services</h1>
               <div className="services-area">
                  {ServicesData.map((item) => <Services key={uuidv4()} icon={item.icon} title={item.title} description={item.description} />)}
               </div>
            </div>
         </section>
      </>
   )
}

export default app
