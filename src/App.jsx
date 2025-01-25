import { useEffect, useState } from 'react'
import FirstPage from './Component/FirstPage'
import SecondPage from './Component/SecondPage'
import ThirdPage from './Component/ThirdPage'
import Footer from './Component/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
        duration: 2000, // Animation duration
        once: false, 
        mirror: true,    
    });
}, []);
// useEffect(() => {
//   Aos.refresh();
// }, []);
  return (
    <>
    <FirstPage/>
    <SecondPage/>
    <ThirdPage/>
    <Footer/>
    </>

  )
}

export default App
