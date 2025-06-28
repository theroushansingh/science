import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

import Contact from './Contact';
import './style.css';
import Trending from './Trending';
import Product from './Product';
import Allitem from './Allitem';
import Cart from './Cart';



function App() {
  return (
   <>  
   <BrowserRouter>
   <Navbar/>
   
    <Routes>
    <Route path='/' element={<Home/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/casual' element={<Trending category="casual"/>}/>
         <Route path='/summer' element={<Trending category="summer"/>}/>
         <Route path='/winter' element={<Trending category="winter"/>}/>
         <Route path='/western' element={<Trending category="western"/>}/>
         <Route path='/kids' element={<Allitem type='kids'/>} />
         <Route path='/men' element={<Allitem type='men'/>} />
         <Route path='/womens' element={<Allitem type='womens'/>} />
         <Route path='/cart' element={<Cart/>}/>
         
        <Route path='/product/:productId' element={<Product/>}/>
   </Routes>
   </BrowserRouter>
   
  
   </>
  );
}

export default App;