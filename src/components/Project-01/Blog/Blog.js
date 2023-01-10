import React from 'react'


const Blog = (props) => {
   const { img, title, description } = props;
   return (
      <div>
         <div className="blog">
            <img className='blog-img' src={img} alt="" />
            <div className="blog-content">
               <h3 className="blog-title">{title}</h3>
               <p className="blog-description">{description}</p>
               <button className='blog-btn'>Read More</button>
            </div>
         </div>
      </div>
   )
}

export default Blog