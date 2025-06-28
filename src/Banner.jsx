import React from 'react'
import banner from './assets/sales.jpg'

const Banner = () => {
  return (
<>
<div className="container-fluid">
  <div className="row justify-content-center banner">
    <div className="col-10">
     <img src={banner} alt=""  width="100%" style={{marginTop:'10px',height:'350px' }}/>
    </div>
  </div>
</div>
</>
     
  )
}

export default Banner