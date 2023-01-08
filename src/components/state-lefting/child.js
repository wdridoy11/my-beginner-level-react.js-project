import React from 'react'

const Child = (props) => {
   const myInformations = "My name is Sabbir. I am from USA. I Live in new year"
   props.onChildData(myInformations);
   return (
      <div>
         <h1>{props.myInfo}</h1>
      </div>
   )
}

export default Child