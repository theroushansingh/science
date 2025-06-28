import React, { useContext } from 'react'
import Item from './Item'
import {Shopcontext} from './Shopcontext';
import Footer from './Footer';


const Trending = ({category}) => {
    const {all_product} = useContext(Shopcontext);
  return (
    <div className="container">
        <div className="row">
            {all_product.map((item,i)=>{
                if(category === item.category){
                return (
                     <div className="col-lg-4 col-6 my-2">
                        <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                     </div>
                     )
                     }
                     else{
                        return null;
                     }
                     
         
            })}
        </div>
    </div>
  )
}
<Footer/>

export default Trending