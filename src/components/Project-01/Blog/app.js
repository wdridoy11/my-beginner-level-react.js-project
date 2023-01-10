import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import BlogData from './Blog.json'
import Blog from './Blog'
import style from './blog.css'

const app = () => {
   return (
      <>
         <section id='blog'>
            <div className="container">
               <h1 className='section-title'>Blog</h1>
               <div className="blog-area">
                  {BlogData.map((item) => <Blog key={uuidv4()} img={item.img} title={item.title} description={item.description} />)}
               </div>
            </div>
         </section>
      </>
   )
}

export default app