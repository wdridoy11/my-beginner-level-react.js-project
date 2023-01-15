import React from 'react'
import HeroHomeImage from '../../images/Crypto-Hero-Image.webp'

const banner = () => {
   return (
      <div className="banner-details">
         <div className='banner-content'>
            <h1 className='banner-title'>Trsuted & Secure <span className='section-title-color'>Crypto</span> Market Exchange.</h1>
            <p className='p-content'>Already have a website? Try our hosting to alive it with industry-leading load times and outstanding performance.</p>
            <button className='primary-btn'>Start Trading</button>
            <h3 className='section-title'>A+ Rating</h3>
            <p className='p-content'>Avg rating 4.8 makes us world most best apps.</p>
         </div>
         <div className='banner-img'>
            <img src={HeroHomeImage} alt="Hero_Home_image" />
         </div>
      </div>
   )
}

export default banner