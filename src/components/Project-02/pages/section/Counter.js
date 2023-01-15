import React from 'react'

const Counter = (props) => {
   let { countNumber, description } = props;
   return (
      <div className='counter-details'>
         <h1 className='counter-number'>{countNumber}</h1>
         <p className='p-content'>{description}</p>
      </div>
   )
}

export default Counter