import React from 'react'

const services = (props) => {
   let { icon, title, description } = props;
   return (
      <div className='services-item'>
         <img className='services-icon' src={icon} alt="Service icon" />
         <h3 className='services-title'>{title}</h3>
         <p className='services-description'>{description}</p>
      </div>
   )
}

export default services