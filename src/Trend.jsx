import React, { useState } from 'react'
import casual from './assets/casual1.jpg'
import western from './assets/western1.jpg'
import winter from './assets/winter1.jpeg'
import summer from './assets/summer1.jpeg'
import {Link} from 'react-router-dom'



const Trend = () => {

    let [xyz, setAbc] = useState(false);
  return (
   <>
   <div className="container" style={{marginTop:"100px"}}>
    <div className="row text-center trend-row">
       <h1> NEW COLLECTION</h1>
       <hr className='mt-3' />
       <div className=" col-lg-3 col-md-6">
        <div className="card p-3">
            <Link to="/casual">
            <img src={casual} alt="" className="img-fluid"/>
            </Link>
            <div className="card-body">
                <h3>casual Wear</h3>
            </div>


        </div>
       </div>

        <div className="col-lg-3 col-md-6">
        <div className="card p-3" onMouseEnter={() => setAbc(true)} onMouseLeave={() => setAbc(false)}>
            <Link to="/western">
            <div style={{overflow:'hidden'}}>
            <img src={western} alt="" className="img-fluid" 
            style={{
                transition:'1s',
                transform : xyz ? 'scale(1.2)' : ''
            }}
            />
            </div>
            </Link>
            <div className="card-body">
                <h3>Western wear</h3>
            </div>


        </div>
       </div>

        <div className="col-lg-3 col-md-6">
        <div className="card p-3">
            <Link to="/winter">
            <img src={winter} alt="" className="img-fluid"/>
            </Link>
            <div className="card-body">
                <h3>Winter Wear</h3>
            </div>


        </div>
       </div>

        <div className="col-lg-3 col-md-6">
        <div className="card p-3">
            <Link to="/summer">
            <img src={summer} alt="" className="img-fluid"/>
            </Link>
            <div className="card-body">
                <h3>Summer Wear</h3>
            </div>


        </div>
       </div>
    </div>
   </div>
   
   
   
   </>
  )
}

export default Trend
