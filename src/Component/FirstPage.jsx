import { useState } from 'react'
import Header from './Header'


function FirstPage() {
  return (
    <>
      <div id='FirstPage' >
        <Header />
        <div className='section1' id='home'>
          <div className='intro' data-aos="fade-right">
            <h1><span>Welcome!</span>
              We serve the richest coffee <br />
              in the city</h1>
          </div>
          
        </div>
        

        <div class="icon-section" data-aos="zoom-right">
          <div class="icon-item">
            <i class="fas fa-mug-hot"></i>
            <p>Hot Coffee</p>
          </div>
          <div class="icon-item">
            <i class="fas fa-ice-cream"></i>
            <p>Cold Coffee</p>
          </div>
          <div class="icon-item">
            <i class="fas fa-coffee"></i>
            <p>Cup Coffee</p>
          </div>
          <div class="icon-item">
            <i class="fas fa-birthday-cake"></i>
            <p>Dessert</p>
          </div>
        </div>
        

      </div>

    </>

  )
}

export default FirstPage
