import React from 'react'
import { MDBNavbar,MDBContainer,MDBNavbarBrand } from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../Redux/restaurantSlice'
function Header() {
  const dispatch = useDispatch()
  const handleSearch=(e)=>{
    dispatch(search(e.target.value))
  }
  
 
  return ( 
    <div className='bg-white'>
  <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
           
        <Link className='d-flex justify-content-between align-items-center   w-100' style={{textDecoration:'none',color:'black',marginLeft:'5px',width:'100vw'}} to='/'>
          <i class="fa-solid fa-mug-saucer ms-5 me-3 fa-2x"></i>
          <span className='fw-bold'> CodeBrew Cafe</span>
          <input onChange={handleSearch} style={{width:'400px',outline:'0'}}  placeholder='Enter place to search' className='ms-5  py-2 px-3 rounded outline-0 border-0' type="text" />

       
        </Link>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>    </div>
  )
}

export default Header
