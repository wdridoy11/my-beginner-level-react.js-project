import React from 'react'
import ServicesData from './services_data.json'
import BlogData from './blog_data.json'
import Services from './services'
import Blog from './blog'
const home = () => {
   return (
      <div>
         <section id='services'>
            <div className="container">
               <h1 className='section-title'>Services</h1>
               <div className="services-area">
                  {ServicesData.map((item) => <Services icon={item.icon} title={item.title} description={item.description} />)}
               </div>
            </div>
         </section>
         <section id='blog'>
            <div className="container">
               <h1 className='section-title'>Blog</h1>
               <div className="blog-details">
                  {BlogData.map((item) => <Blog img={item.img} title={item.title} description={item.description} />)}
               </div>
            </div>
         </section>
      </div>
   )
}

export default home
