import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Card from './card'
import Data from './data.json';
import style from './app.css'
const info = [
   {
      firstName: "Riody",
      lastName: "Sharif",
      age: "16",
      phone: [
         { home: "01722824160" },
         { office: "01722540581" }
      ],
      address: [
         { city: "Rangpur" },
         { village: "ShikerPur" }
      ],
      study: "Ten"
   }
]

const app = () => {
   return (
      <div>
         {info.map((item) => {
            return (
               <div>
                  <h3>{item.firstName}</h3>
                  <h3>{item.lastName}</h3>
                  <p>{item.study}</p>
                  <p>{item.age}</p>
                  {item.phone.map((item) => <div>
                     <p>{item.home}</p>
                     <p>{item.office}</p>
                  </div>)}
                  {item.address.map((item) => <div>
                     <p>{item.city}</p>
                     <p>{item.village}</p>
                  </div>)}
               </div>
            )
         })}
      </div>
   )
}

export default app
