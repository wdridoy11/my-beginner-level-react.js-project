import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Card from './card'
import Data from './data.json';
import Card1 from './card1'
import Card2 from './card2'
import style from './app.css'


const app = () => {
   return (
      <div>
         <Card1 name="Card1" description="This is card 1" />
         <Card2 name="Card2" description="This is card 2" />
      </div>
   )
}

export default app
