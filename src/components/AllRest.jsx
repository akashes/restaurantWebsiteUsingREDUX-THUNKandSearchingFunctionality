import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import RestCard from './RestCard'



function AllRest() {
  //to hold restaurant details
  const [allRestData,setAllRestData]=useState([])

  const baseUrl='https://restaurant-backend-wcrj.onrender.com/restaurants'

//API fetching
  const fetchData=async()=>{
    const result = await axios.get(baseUrl)
    setAllRestData(result.data)
  }
  console.log(allRestData);
  
  useEffect(()=>{
    fetchData()
  
  
  },[])
   
  return (
    <div style={{marginBottom:'200px'}}>
      <Row className='ps-4'>
        {
          allRestData.map((ele)=>{
            return(
              <Col sm={12} md={6} lg={4} xl={3}>
              <RestCard id={ele.id} image={ele.photograph} name={ele.name} cusine={ele.cuisine_type} address={ele.address}/>
              </Col>
            )
          })
        }

      </Row>
     
    </div>
  )
}

export default AllRest
