import React from 'react'
import { 

    FaFacebookF,
    FaInstagram,
    FaYoutube, 
    FaLinkedinIn,
    FaTwitter

} from 'react-icons/fa';

const Footer = () => {
  return (
   <>
   <div className='footer-1'>
   <div className="container pt-5">
    <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <h4>Online Shopping</h4>
            <h6>Men</h6>
            <h6>Women</h6>
            <h6>Kids</h6>
            <h6>Beauty</h6>
            <h6>Gift card</h6>
            <h6>Genz</h6>
            <h6>T-shirt</h6>

        

        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <h4>Useful Link</h4>
            <h6>Blogs</h6>
            <h6>Carriers</h6>
            <h6>Site map</h6>
            <h6>Corporate information</h6>
            <h6>Whitehat</h6>
            <h6>Clear trip</h6>
            
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
         <h4>CUSTOMER POLICIES</h4>
         <h6>Contact us</h6>
         <h6>t&c</h6>
         <h6>terms of use</h6>
         <h6>Track orders</h6>
         <h6>shipping</h6>
         <h6>Returns</h6>
         <h6>Private policy</h6>
         <h6>Grievance Redressel</h6>
          


            
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <h4>EPIERIENCE SHOP ON MOBILE</h4>
            
            <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt="" className='img-fluid'/>
            <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" alt="" className='img-fluid'/>
            
            
        </div>

    





    </div>



   </div>
   <hr />
   <div className="icon d-flex gap-4 mt-4 justify-content-center" >
                <p><FaFacebookF className="fs-5" color="#3b5998" /></p>
                 <p><FaInstagram className="fs-5" color="#E1306C"/></p>
                 <p><FaYoutube className="fs-5" color="#FF0000" /> </p>
                <p><FaLinkedinIn className="fs-5" color="#0077B5"/></p>
                <p><FaTwitter className="fs-5" color="#1DA1F2" /></p>
            </div>
   </div>
   
   
   </>
  )
}

export default Footer

