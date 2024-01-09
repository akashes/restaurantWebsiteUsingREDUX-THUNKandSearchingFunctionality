import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import { ListGroup,ListGroupItem } from 'react-bootstrap'
import RestOp from './RestOp'
import RestReview from './RestReview'
function ViewRest() {
  const[restaurant,setRestaurant]=useState()
  const baseUrl= `https://restaurant-backend-wcrj.onrender.com/restaurants`
  const {id}= useParams()

  const fetchData=async()=>{
   const {data}=  await axios.get(`${baseUrl}/${id}`)
   setRestaurant(data)
  }
console.log(restaurant);
  useEffect(()=>{
    fetchData()

  },[])
  console.log(restaurant);
  return (
    <div className='bg-white'>
     {
      restaurant ? (
        <Row className='mx-5 p-5 bg-light rounded shadow'>
        <Col sm={12} md={6} lg={6} xl={6} >
        <img style={{width:'100%'}} src={restaurant.photograph} alt="" />
        </Col>
        <Col className='mt-5' sm={12} md={6} lg={4} xl={3}>
        <ListGroup    >
          <h1 className='text-center'>{restaurant.name}</h1>
      <ListGroup.Item className='fw-bold   '  > Neighborhood : {restaurant.neighborhood}
      
      </ListGroup.Item>
      <ListGroup.Item className='fw-bold   ' > Address : {restaurant.address}
      </ListGroup.Item> 
      <ListGroup.Item className='fw-bold  ' > Cuisine Type :  {restaurant.cuisine_type}
      </ListGroup.Item>
      <ListGroup.Item className='fw-bold  ' ><RestOp opHours={restaurant.operating_hours} />
      </ListGroup.Item>
      <ListGroup.Item className='fw-bold  ' >
        <RestReview review={restaurant.reviews} />
      </ListGroup.Item>
    </ListGroup>
        </Col>
      </Row>
      ) : <h3 style={{minHeight:'70vh'}} className='bg-dark text-danger text-center p-5 fw-bold'>loading...</h3>
     } 
     
      
    </div>
  )
}

export default ViewRest
