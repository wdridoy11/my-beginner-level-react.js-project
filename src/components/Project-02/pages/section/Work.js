import React from 'react'
import WorkImg from '../../images/Crypto-Works-Image.webp'

const Work = () => {
   return (
      <div className='work-details'>
         <div className='work-img'>
            <img src={WorkImg} alt="" />
         </div>
         <div className="work-content">
            <h4 className='section-sub-title'>How it Works</h4>
            <h1 className='section-title'>Buy <span className='section-title-color'>Crypto</span>  easy & without all the fuss.</h1>
            <p className='p-content'>Link your bank account and have your bitcoin in minutes. It’s super easy & fast.</p>
            <ul className='work-list'>
               <li>Global Exchange Rates</li>
               <li>Make payments with Bank Transfer</li>
               <li>Instant Transaction</li>
            </ul>
            <button className='primary-btn'>Start Trading</button>
         </div>
      </div>
   )
}

export default Work