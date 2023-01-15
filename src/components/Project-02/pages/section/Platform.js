import React from 'react'

const Platform = (props) => {
   let { icon, title, description } = props
   return (
      <div className='platform-details'>
         <div className="platform-box">
            <img src={icon} alt="" />
            <h3 className='box-title'>{title}</h3>
            <p className="p-content">{description}</p>
         </div>
      </div>
   )
}

export default Platform