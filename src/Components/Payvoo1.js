import React from 'react'
import payvoo1 from '../Images/payvoo1.png'
import bell1 from '../Images/bell1.png'
import "./Payvoo1.css";

function Payvoo1() {
  return (
    <div className='navbar'>
 {/* <div class="container-fluid" >

<nav class="navbar navbar-expand-lg bg-light " >

   <div class="container-fluid"/> */}

    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */} 

      {/* <form class="d-flex" role="search"/> */}
   <img src={payvoo1} className="paylogo" />
   {/* </div> */}

   {/* <div style={{ height: "13px", width: "13px", alignSelf:'left '}}> */}
   <div className='sidelogo'>
    <img src={bell1} className='bell' />
  {/* </div> */}
  <img src='https://i.pinimg.com/280x280_RS/97/35/cc/9735cc5ab8da22c099ce87edab023f95.jpg' className='logo'/>
  </div>
{/* </nav>
     </div> */}
    </div> 
  )
}

export default Payvoo1
