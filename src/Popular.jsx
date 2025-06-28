import React from 'react'
import Item from './Item'
import data_product from './data'
const Popular = () => {
  return (
<div className="container" style={{marginTop: "150px"}}>
  <div className="row">
    <h1 className='text-center'>OUR POPULAR DEALS</h1>
    <hr className='mt-3'/>
    {data_product.map((item, i) => (
      <div className="col-lg-3 col-md-6 mt-5" key={i}>
        <Item 
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      </div>
    ))}
  </div>
</div>

   

    

  )
}

export default Popular

  
