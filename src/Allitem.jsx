import React, {useContext} from 'react'
import Item from './Item'
import { Shopcontext } from './Shopcontext'
import Banner from './Banner'

const Allitem = ({type}) => { 
const {all_product} = useContext(Shopcontext);

  return (
   <>
   <Banner/>
   <div className="container">
    <div className="row">
       {all_product.map((itm,i)=>{
        if(type===itm.type){
         return(
            <div className="col-lg-4 col-md-6 mt-4">
                <Item  key={i} id={itm.id} name={itm.name} old_price={itm.old_price} image={itm.image} new_price={itm.new_price}/>
            </div>
         )
        }
        else {
            return null;
        }
       }
       )}
    </div>
   </div>
   </>
  )
}

export default Allitem
