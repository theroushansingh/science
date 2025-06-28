import React, { useState } from 'react'

import { FaStar } from 'react-icons/fa6'

const Productdisplay = (props) => {
  const {product} = props;
  const images = [product.image,product.image1,product.image2];
  const [active, setActive] = useState(0)
  return (
    <div className="container mt-5 ">
        <div className="row">
            <div className="col-md-6">
            <div className="row">
            <div className="col-3">
             {/* <img src={product.image} alt=""  className='img-fluid'/>
             <img src={product.image1} alt=""  className='img-fluid'/>
             <img src={product.image2} alt=""  className='img-fluid'/> */}

             {images.map((img, idx) => (

              <img key={idx} src={img} alt='' className='img-fluid' onMouseEnter={() => setActive(idx)}/>

             ))}
             </div>
            
            <div className="col-9 ">
               {/* <img src={product.image} alt=""  className='img-fluid'/>   */}

               <img src={images[active]} alt='' className='img-fluid'/>
            </div>
            </div>
            </div>
            <div className="col-md-6 mt-4 ">
                <h3>{product.description}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, soluta dolorum perferendis labore sit, nisi quia esse provident aut quam ipsa corrupti adipisci fuga. Corporis, eum! Quibusdam expedita autem aliquam?</p>
                <span >Price</span>
                <span className='mx-3'><s>{product.old_price}</s></span>
                <span className='mx-3'>{product.new_price}</span>
                
                <br />
                <br />
                <span>Rating: </span>
                <FaStar className='mx-1 text-warning'/>
                <FaStar className='mx-1 text-warning'/>
                <FaStar className='mx-1 text-warning'/>
                <FaStar className='mx-1 text-warning'/>
                <FaStar className='mx-1 text-warning'/>
                <br />
                <br />
                <button className='btn btn-lg btn btn-primary'>Buy Now</button>
                

            </div>
        </div>
    </div>
  )
}

export default Productdisplay