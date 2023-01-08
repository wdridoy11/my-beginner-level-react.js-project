import React from 'react'

const Blog = (props) => {
   let { img, title, description } = props
   return (
      <div className="blog-item">
         <img className='blog-img' src={img} alt="Blog img" />
         <div className="blog-content">
            <h3 className='blog-title'>{title}</h3>
            <p className='blog-description'>{description}</p>
            <button className='btn'>Read More</button>
         </div>
      </div>
   )
}

export default Blog