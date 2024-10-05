import React, { useState } from 'react'
import Card from './components/Card.jsx'
import OlxLogo from './assets/olx-logo.png';
import PhoneImage1 from './assets/iphone-11.png';
import PhoneImage2 from './assets/one-plus.png';
import PhoneImage3 from './assets/google-pixel.png';
import PhoneImage4 from './assets/vivo.png';

function App() {
  const currentDate = new Date().toLocaleDateString('en-GB');
  const [items , setItems] = useState(false)
  
  const showItems = ()=>{
      setItems(!items);
  }

  return (
    <> 
    <div className='head'>
    <img src={OlxLogo} alt="logo" />
    <button className='btn-1' onClick={showItems}>{items ? "Hide All Items" : "Show All items"}</button>
    </div>
    {items  ? 
    <div className='card-main-div'> 
       <Card 
        src={PhoneImage1} 
        price="Rs 92000" 
        title="iPhone 11 128GB PTA APPROVED" 
        location="Model Town Link Road, Lahore" 
        date={currentDate}
      />
      <Card 
        src={PhoneImage2} 
        price="Rs 45000" 
        title="One plus 8 5G Pta Approved 128 gb 8 gb 100% Genuine Stock" 
        location="Allama Iqbal Road, Sialkot" 
        date={currentDate}
      />
      <Card 
        src={PhoneImage3} 
        price="Rs 43000" 
        title="Google Pixel 6 pro 12gb 128gb factory unlocked" 
        location="DHA Phase 8, Karachi" 
        date={currentDate}
      />
      <Card 
        src={PhoneImage4} 
        price="Rs 81000" 
        title="vivo v29e" 
        location="12th Avenue, Islamabad" 
        date={currentDate}
      />
      </div> : <div>
               <h1 className='no-item'>No Item Found...</h1>
               <p className='msg'>"Click! (Show All Items...) to view all cards on screen"</p>
               </div> }
    </>
  )
}

export default App