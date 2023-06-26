import React from 'react'
import './home.css';


const home = () => {
  const img =  require("../images/img.webp")
  return (
    <div class="bg-dark">
      <div class="Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center">
        <div class="row container ">
          <div class="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{height:"90vh"}}>
            <h2 style={{fontSize:"4.5rem"}}>Book Store</h2>
            <h3 style={{fontSize:"3rem"}}>For you</h3>
            <p className='mb-3' style={{color:"silver"}}>checkout the book here</p>
            <button class="viewBook">View Book</button>
          </div>

          <div class="col-lg-6 d-flex justify-content-center align-items-end flex-column" style={{height:"90vh"}} >
           <img class="img-fluid homeimg" 
           src={img} alt="/" />
          </div>
        </div>

        
      </div>

 

    </div>
  )
}

export default home