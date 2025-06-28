import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Shopcontext } from './Shopcontext';

const Item = ({ id, name, image, old_price, new_price }) => {
  const { addTocart } = useContext(Shopcontext);

  return (
    <div className='card p-2'>
      <Link className='mx-auto' to={`/product/${id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={image}
          alt=""
          className='img-fluid'
         style={{borderRadius:'10px', height:'250px'}}
        />
      </Link>
      <div className="card-body">
        <p className='text-center fs-4' style={{ color: 'black' }}>{name}</p>
        <div className='item-prices text-center'>
          <span className="item-price-new"><s>${old_price}</s></span>
          <span className="item-price-old mx-3 fw-bold text-warning">{new_price}</span>
        </div>
        <div className='d-flex justify-content-center gap-2 mt-3'>
          <Link to="/cart">
            <button onClick={() => addTocart(id)} className='btn btn-md btn-primary'>Add To Cart</button>
          </Link>
          <Link to={`/product/${id}`}>
            <button className='btn btn-md btn-success'>Know More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
