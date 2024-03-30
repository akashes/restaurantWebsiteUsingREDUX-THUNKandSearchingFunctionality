import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col,Spinner} from 'react-bootstrap'
import RestCard from './RestCard'
import {useDispatch, useSelector} from 'react-redux'
import { fetchRestaurants, search } from '../Redux/restaurantSlice'



function AllRest() {
  const {allRestaurants,loading,error,filteredRestaurants} = useSelector((state)=>state.restaurant)
  const dispatch = useDispatch()
  console.log(allRestaurants,loading,error,filteredRestaurants);
  //to hold restaurant details
  const [allRestData,setAllRestData]=useState([])

  const baseUrl='https://restaurant-backend-wcrj.onrender.com/restaurants'

//API fetching
  const fetchData=async()=>{
    // const result = await axios.get(baseUrl)
    // setAllRestData(result.data)

  }

  console.log(allRestData);

  
  useEffect(()=>{
  
  
    dispatch(fetchRestaurants())
  },[])
   
  return (
    <div style={{marginBottom:'200px',minHeight:'80vh'}}>
{
  loading &&
<div style={{width:'100vw',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center h-100 w-100'>
  {
    loading && <span className="text-danger  fw-bold text-xl">Loading...
          <Spinner animation="border" variant="danger" />

    </span>
  }
</div>}

      <Row className='ps-4'>
  
           <>
           {
          allRestaurants?.length>0?
          allRestaurants?.map((ele)=>{
            return(
              <Col sm={12} md={6} lg={4} xl={3}>
              <RestCard id={ele.id} image={ele.photograph} name={ele.name} cusine={ele.cuisine_type} address={ele.address} neighborhood={ele.neighborhood}/>
              </Col>
            )
          })  : <p className='text-center text-danger m-5 p-5'>no restaurants available</p>
        }

          </>
        
       
      </Row>
     
    </div>
  )
}

export default AllRest
