import React from 'react'
import {Link} from 'react-router-dom'
import logo from './assets/logo-ecommercecopy-removebg-preview (1).png'
import { FaCartShopping } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'
import { Shopcontext } from './Shopcontext';
import { useContext } from 'react'


const Navbar = () => {
   const {getTotalCartItem} = useContext(Shopcontext)

  return (
   <>
  <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#B0DB9C'}}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="#"><img src={logo} alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/" style={{fontWeight:'500', color:'#FFB433'}}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/men" style={{fontWeight:'500', color:'black'}}>Mens</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/womens" style={{fontWeight:'500',color:'black'}}>Womens</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/kids" style={{fontWeight:'500',color:'black'}}>Kids</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact" style={{fontWeight:'500',color:'black'}}>Contact</Link>
        </li>
       
      </ul>
      <form class="d-flex">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <div className="d-flex gap-2">
                <Link to="/cart">
                <div style={{position:'relative',cursor:'pointer'}}>
                <FaCartShopping className='fs-1 pl-2 text-warning mt-1' />
                <span style={{
                  position:'absolute',
                  top:'-5px',
                  right:'-10px',
                  // backgroundColor:'',
                  color:'white',
                  borderRadius:'50%',
                  padding:'3px 8px',
                  fontSize:'12px'
                }}>
                     {getTotalCartItem()}
                </span>
                </div>
                </Link>
              </div>
                <Link to="/Admin"><FaUser className='fs-1 pl-2 text-info mt-1 ' /></Link>

      </form>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar






 
