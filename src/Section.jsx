import React from 'react'
// import {image} from './assets/logo-ecommercecopy-removebg-preview (1).png'
const section = ({image}) => {
  return (
   <>
   <div className="container">
    <div className="row">
        <div className="col-md-6">
            <p className='fs-4' style={{fontFamily:'fantasy', marginTop:'20px'}}>Welcome to our online store <span style={{fontSize:'90px'}}></span></p>
            <h1>Discover the latest trend in fashion and shop from the comfort</h1>
        </div>
        
            <div className="col-md-5 offset-1">
                <img src={image} alt="" className='img-fluid' />
            </div>

    </div>
   </div>
   </>
  )
}

export default section
