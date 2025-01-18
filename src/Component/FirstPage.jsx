import { useState } from 'react'
import Header from './Header'


function FirstPage() {
  return (
    <>
      <div id='FirstPage'>
        <Header />
        <div className='section1' id='home'>
          <div className='intro'>
            <h1><span>Welcome!</span>
              We serve the richest coffe <br />
              in the city</h1>
          </div>
          <div className='intropic'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/waiter-and-waitress-holding-a-tray-with-coffee-illustration-download-in-svg-png-gif-file-formats--serving-tea-pack-people-illustrations-5417942.png" alt="Italian Trulli" />
          </div>
        </div>
        
        <div class="icon-section">
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
