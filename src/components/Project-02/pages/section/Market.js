import React from 'react'
import Crypto1 from '../../images/Crypto-Crypto-Image-1.webp'
import Crypto2 from '../../images/Crypto-Crypto-Image-2.webp'
import Crypto3 from '../../images/Crypto-Crypto-Image-3.webp'

const Market = () => {
   return (
      <div className="market-details">
         <div className="market-item"><img src={Crypto1} alt="Crypto Market" /></div>
         <div className="market-item"><img src={Crypto2} alt="Crypto Market" /></div>
         <div className="market-item"><img src={Crypto3} alt="Crypto Market" /></div>
      </div>
   )
}

export default Market