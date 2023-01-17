import React from 'react'
import "./work.css"
import step1 from "../../assets/step-1.png"
import step2 from "../../assets/step-2.png"
import step3 from "../../assets/step-3.png"
import step4 from "../../assets/step-4.png"
const Work = () => {
  return (
   <>
   <div className="container_SERVICES">
   <div className="header">
     <h1>Why Contactless Menu?</h1>
   </div>

   <div className="price_card">
     <div className="price_container">
       <div className="card">
       <img src={step1} alt="" />
         <h3 style={{color:"black"}}>Register</h3>
         
         <p>
         Create Account to get started.
         </p>
       </div>

       <div className="card">
         <img src={step2} alt="" />
         <h3 style={{color:"black"}}>Create Menu</h3>
        
         <p>Create your menu visible for your customers.</p>
       </div>

       <div className="card">
         <img src={step3} alt="" />
         <h3 style={{color:"black"}}>Print QR Code</h3>
        
         <p>
         Put the printed tags on your tables.
         </p>
       </div>

       <div className="card">
         <img src={step4} alt="" srcset="" />
         <h3 style={{color:"black"}}>Receive Orders</h3>
        
         <p>
         When they order something, you get notified instantly!
         </p>
       </div>
     </div>
   </div>
 </div>
   </>
  )
}

export default Work