import React, {useContext} from 'react'
import Productdisplay from './Productdisplay'
import { useParams } from 'react-router-dom'
import {Shopcontext} from './Shopcontext'

const Product = () => {
    const {all_product} = useContext(Shopcontext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === parseInt(productId));
  return (
    <>
    <Productdisplay product={product}/>
    </>
  )
}

export default Product