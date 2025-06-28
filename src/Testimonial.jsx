import React from 'react'



const Testimonial = ({Name,face}) => {
  return (
  <>
  <div className="container">
    <div className="card  testimonial mt-5 p-3 mb-5 mx-auto w-100 w-sm-75 w-md-50 w-lg-33 " style={{backgroundColor:'rgba(161, 145, 145, 0.23)'}}>
     
        <img src={face} className='mx-auto'  alt="" style={{height:'100px',width:'100px' ,borderRadius:'50%'}}/>
        
        <p className='mt-3 fw-bold  text-center,' style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, nam. Laborum cum animi id! Explicabo earum numquam ea maiores, laborum, </p>
        <h3 className='mt-2 text-white text-center'>{Name}</h3>

    </div>
    </div>
    

    


    </>
  )
}

export default Testimonial
