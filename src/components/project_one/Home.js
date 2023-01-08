import React from 'react'
import { v4 as uuidv4 } from 'uuid';


// import data 
import ServicesData from './Services.json'
import BlogData from './Blog.json'

// import page 
import Hero from './hero'
import About from './About'
import Services from './Services'
import Blog from './Blog'

// import style 
import HerotStyle from './css/hero.css'
import AboutStyle from './css/about.css'
import ServicesStyle from './css/services.css'
import BlogStyle from './css/blog.css'


const Home = () => {
   return (
      <div>
         <section id='hero'>
            <Hero />
         </section>
         <section id='about'>
            <div className="container">
               <About />
            </div>
         </section>
         <section id='services'>
            <div className="container">
               <h1 className='section-title'>Services</h1>
               <div className="services-area">
                  {ServicesData.map((item) => <Services key={uuidv4()} icon={item.icon} title={item.title} description={item.description} />)}
               </div>
            </div>
         </section>
         <section id='Blog'>
            <div className="container">
               <h1 className='section-title'>Blog</h1>
               <div className="blog-area">
                  {BlogData.map((item) => <Blog key={uuidv4()} img={item.img} title={item.title} description={item.description} />)}
               </div>
            </div>
         </section>
      </div>
   )
}

export default Home