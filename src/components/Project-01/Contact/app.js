import React from 'react'
import Contact from './Contact'
import style from './contact.css'

const app = () => {
   return (
      <div>
         <section id='contact'>
            <div className="container">
               <h1 className='section-title'>Blog</h1>
               <div className="contact-area">
                  <Contact />
               </div>
            </div>
         </section>
      </div>
   )
}

export default app