import React from 'react'

const card1 = (props) => {
   let { name, description } = props;
   return (
      <div>
         <h1>{name}</h1>
         <p>{description}</p>
      </div>
   )
}

export default card1
