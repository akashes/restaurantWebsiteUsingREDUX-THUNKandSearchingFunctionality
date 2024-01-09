import React from 'react'
import { MDBNavbar,MDBContainer,MDBNavbarBrand } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='bg-white'>
  <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
           
        <Link style={{textDecoration:'none',color:'black',marginLeft:'5px'}} to='/'>
        <i class="fa-solid fa-mug-saucer ms-5 me-3 fa-2x"></i>
        <span className='fw-bold'> CodeBrew Cafe</span>

       
        </Link>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>    </div>
  )
}

export default Header
