import React from 'react'

const Progress = (props) => {
   let { icon, title, description } = props;
   return (
      <div className='progress-details'>
         <img src={icon} alt="" />
         <h3 className='box-title'>{title}</h3>
         <p className="p-content">{description}</p>
      </div>
   )
}

export default Progress