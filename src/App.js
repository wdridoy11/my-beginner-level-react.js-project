import React from 'react'
import Card from './card'
import Data from './data.json';

const title = "TODO App";
const app = () => {
   return (
      <div>
         <h1>{title}</h1>
         <Card title={Data[0].title} description={Data[0].description} />
         <Card title={Data[1].title} description={Data[1].description} />
         <Card title={Data[2].title} description={Data[2].description} />
         <Card title={Data[3].title} description={Data[3].description} />
         <Card title={Data[4].title} description={Data[4].description} />
         <Card title={Data[5].title} description={Data[5].description} />
      </div>
   )
}

export default app
