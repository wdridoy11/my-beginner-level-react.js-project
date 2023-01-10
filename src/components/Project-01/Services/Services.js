import React from 'react'

const Services = (props) => {
   let { icon, title, description } = props
   return (
      <div className='services'>
         <img className='services-icon' src={icon} alt="" />
         <h3 className='services-title'>{title}</h3>
         <p className='services-description'>{description}</p>
      </div>
   )
}

export default Services
