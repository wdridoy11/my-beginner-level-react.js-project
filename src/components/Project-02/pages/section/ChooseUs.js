import React from 'react'
import img1 from '../../images/Crypto-Choose-Image.webp'
import img2 from '../../images/Crypto-Choose-BG.webp'

const ChooseUs = () => {
   return (
      <div>
         <div className="choose-us-details">
            <div className='choose-us-content'>
               <h4 className='section-sub-title'>Why Choose us</h4>
               <h1 className='section-title'>Why <span className='section-title-color'>Choose </span>us for your business.</h1>
               <div>
                  <p>World best technology data and trusted by 10m+ users worldwide since 2008.</p>
               </div>
               <div>
                  <p>We provide the best price on the market with no extra fees or subscriptions.</p>
               </div>
               <div>
                  <p>We have a team of experts to support you 24 hours a day, 7 days a week.</p>
               </div>
            </div>
            <div className='choose-us-img'>
               <img className='choose-us-front' src={img1} alt="" />
               <img className='choose-us-back' src={img2} alt="" />
            </div>
         </div>
      </div>
   )
}

export default ChooseUs