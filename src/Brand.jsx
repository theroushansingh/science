import React from 'react'

import brand1 from './assets/brand1.jpeg'
import brand2 from './assets/brand2.jpeg'
import brand3 from './assets/brand3.jpeg'
import brand4 from './assets/brand4.jpeg'
import brand5 from './assets/brand5.jpeg'
import brand6 from './assets/brand6.jpeg'
import brand7 from './assets/brand7.jpeg'
import brand8 from './assets/brand8.jpeg'
import brand9 from './assets/brand9.jpeg'
import brand10 from './assets/brand10.jpeg'

    const brands = [
     brand1, brand2, brand3, brand4, brand5, brand6,
     brand7, brand8, brand9, brand10
     ];

const Brand = () => {
  return (
    <div className='brand-marquee my-5'>
      <h1 className='text-center my-4'>OUR TOP BRANDS</h1>
      <div className="marquee-wrapper py-5">
        <div className="marquee-track">
          {brands.map((brand, index) => (
            <img key={`first-${index}`} src={brand} alt={`brand-${index}`} className='img-fluid rounded mx-4' />
          ))}
          {brands.map((brand, index) => (
            <img key={`second-${index}`} src={brand} alt={`brand-${index}`} className='img-fluid rounded mx-4' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand
