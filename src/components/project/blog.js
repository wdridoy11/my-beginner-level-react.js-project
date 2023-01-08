import React from 'react'

const blog = (props) => {
   let { img, title, description } = props
   return (
      <div className='blog'>
         <img className='blog-img' src={img} alt="" />
         <div className="blog-content">
            <h3 className='blog-title'>{title}</h3>
            <p className='blog-description'>{description}</p>
            <button className='blog-btn'>Read More</button>
         </div>
      </div>
   )
}

export default blog