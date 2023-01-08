import React from 'react'

import Child from './child'

const app = () => {
   const childContent = "My Name is Ridoy Sharif.I am from Bangladesh. I live in Rangpur"
   const handleChildData = (childData) => {
      console.log("Your Child Data: " + childData);
   }

   return (
      <div>
         <Child myInfo={childContent} onChildData={handleChildData} />
      </div>
   )
}

export default app