import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row,Col } from 'react-bootstrap'
import { ListGroup,ListGroupItem } from 'react-bootstrap'
import RestOp from './RestOp'
import RestReview from './RestReview'
import { useDispatch, useSelector } from 'react-redux'
import { viewRest } from '../Redux/restaurantSlice'
function ViewRest() {
  const [item,setItem]=useState({})
  const {allRestaurants}= useSelector((state)=>state.restaurant)
  console.log(allRestaurants); 
  const dispatch = useDispatch() 
  const[restaurant,setRestaurant]=useState()
  const baseUrl= `https://restaurant-backend-wcrj.onrender.com/restaurants`
  const {id}= useParams()

  const fetchData=async()=>{
  
  //  const {data}=  await axios.get(`/restaurant.json/restaurants/${id}`)
  // dispatch(viewRest(id))
  //  setRestaurant(data)
  setItem(allRestaurants.find((ele)=>ele.id==id)) 
  }
// console.log(restaurant);
  useEffect(()=>{
    fetchData()

  },[])
  return (
    <div className='bg-white'>
     {
      item ? (
        <Row className='mx-5 p-5 bg-light rounded shadow'>
        <Col sm={12} md={6} lg={6} xl={6} >
        <img style={{width:'100%'}} src={item.photograph} alt="" />
        </Col>
        <Col className='mt-5' sm={12} md={6} lg={4} xl={3}>
        <ListGroup    >
          <h1 className='text-center'>{item.name}</h1>
      <ListGroup.Item className='fw-bold   '  > Neighborhood : {item.neighborhood}
      
      </ListGroup.Item>
      <ListGroup.Item className='fw-bold   ' > Address : {item.address}
      </ListGroup.Item> 
      <ListGroup.Item className='fw-bold  ' > Cuisine Type :  {item.cuisine_type}
      </ListGroup.Item>
      <ListGroup.Item className='fw-bold  ' ><RestOp opHours={item.operating_hours} />
      </ListGroup.Item>
      <ListGroup.Item className='fw-bold  ' >
        <RestReview review={item.reviews} />
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
