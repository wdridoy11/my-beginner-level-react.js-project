import React from 'react'

import style from './section/style.css'

import PlatformData from './section/PlatformData.json'
import ProgressData from './section/ProgressData.json'
import CounterData from './section/counterData.json'


import Banner from './section/banner'
import Market from './section/Market'
import Platform from './section/Platform'
import Work from './section/Work'
import Progress from './section/Progress'
import ChooseUs from './section/ChooseUs'
import Counter from './section/Counter'

const index = () => {
   return (
      <>
         <section id='banner'>
            <div className="container">
               <div className="banner-area">
                  <Banner />
               </div>
            </div>
         </section>
         <section id='market'>
            <div className="container">
               <div className="market-area">
                  <Market />
               </div>
            </div>
         </section>
         <section id='platform'>
            <div className="container">
               <div className="platform-heading">
                  <h1 className='section-title'>Trusted <span className='section-title-color'>Cryptocurrency</span> Platform</h1>
                  <p className='p-content'>Vault has a variety of features that make it the best place to start trading.</p>
               </div>
               <div className="platform-area">
                  {PlatformData.map((item) => <Platform icon={item.img} title={item.title} description={item.description} />)}
               </div>
            </div>
         </section>
         <section id='work'>
            <div className="container">
               <div className="work-area">
                  <Work />
               </div>
            </div>
         </section>
         <section id='progress'>
            <div className="container">
               <div className="progress-area">
                  {ProgressData.map((item) => <Progress icon={item.icon} title={item.title} description={item.description} />)}
               </div>
            </div>
         </section>
         <section id='choose-us'>
            <div className="container">
               <div className="choose-us-area">
                  <ChooseUs />
               </div>
            </div>
         </section>
         <section id='counter'>
            <div className="container">
               <div className="counter-area">
                  {CounterData.map((item) => <Counter countNumber={item.countNumber} description={item.description} />)}
               </div>
            </div>
         </section>
      </>
   )
}

export default index