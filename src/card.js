import React from 'react'

const card = (props) => {
   let { img, title, description } = props;
   return (
      <div className='card'>
         <img className='card-img' src={img} alt="" />
         <h3 className='card-title'>{title}</h3>
         <p className='card-description'>{description}</p>
      </div>
   )
}

export default card
