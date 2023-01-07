import React from 'react'
import style from './app.css';


const subTitle = "Family";
const description = "Hello Bangladesh! I am very happy";
const data = new Date();
const day = data.getDay();
const month = data.getMonth();
const year = data.getYear();
console.log(data);


function Card(props) {
   let { title, description } = props;
   return (
      <div>
         <div className='card'>
            <h3 className='card-title'>{title}</h3>
            <p className='card-description'>{description}</p>
            <p className='card-date'>{day}/{month}/{year}</p>
            <button className='card-btn'>Read More</button>
         </div>
      </div>
   )
}

export default Card;