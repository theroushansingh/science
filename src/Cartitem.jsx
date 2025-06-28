import React, { useContext } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { Shopcontext } from './Shopcontext';

const Cartitem = () => {
  const { cartItem, all_product,removeFromCart,addTocart } = useContext(Shopcontext);

  return (
    <>
      <div className="cartItems" style={{ marginTop: '100px' }}>
        <div className="cartItems-format-main fs-4 fw-bold text-info d-flex justify-content-around">
          <p>Product</p>
          <p>Title</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e) => {
          if (cartItem[e.id] > 0) {
            return (
              <div key={e.id} className="cartItems-format text-info d-flex justify-content-around align-items-center my-3">
                <img src={e.image} alt={e.name} style={{ height: '100px' }} />
                <h4>{e.name}</h4>
                <p className="bg-light text-dark border border-2" style={{ padding: '10px 30px', height: '50px' }}>
                  {cartItem[e.id]}
                </p>
                <div className="div addsubtract">
                <span className='fs-1' style={{cursor:'pointer'}} onClick={() => addTocart(e.id)}>+</span>
                <span className='fs-1' style={{cursor:'pointer'}} onClick={() => removeFromCart(e.id)}>_</span>

                </div>
                <h4>${e.new_price * cartItem[e.id]}</h4>
                <FaDeleteLeft onClick={() => removeFromCart(e.id)} className="fs-3 text-danger" style={{ cursor: 'pointer' }} />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Cart Summary */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <h1 className="text-center">Cart Total</h1>
          <div className="col-6 bg-light border border-2 p-3 rounded-2">
            <div className="d-flex justify-content-between">
              <div>
                <p>Total</p>
                <hr />
                <p>Shipping Charges</p>
                <hr />
              </div>
              <div>
                <p>$500</p>
                <hr />
                <p>Free</p>
                <hr />
              </div>
            </div>
            <div className="text-end">
              <button className="btn btn-md btn-success mt-4">Proceed To CheckOut</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;