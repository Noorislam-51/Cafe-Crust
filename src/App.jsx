import { useState } from 'react'
import Header from './Component/Header'


function App() {
  return (
    <>
      <Header />
      <div className='page1' id='home'>
      <div className='intro'>
        <h1><span>Welcome!</span><br/>
          We serve the richest coffe <br/>
          in the city</h1>
      </div>  
      <div className='intropic'>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/waiter-and-waitress-holding-a-tray-with-coffee-illustration-download-in-svg-png-gif-file-formats--serving-tea-pack-people-illustrations-5417942.png" alt="Italian Trulli"/>
      </div>          
      </div>
    </>

  )
}

export default App
