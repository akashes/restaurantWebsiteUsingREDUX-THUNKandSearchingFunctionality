import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function RestCard({name,image,cusine,address,id}) {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/view/${id}`)} style={{height:'500px'}}  className=' m-5'>
          <Card  style={{ width: '18rem',overflowY:'hidden' }}>
      <Card.Img style={{maxHeight:'350px'}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <p>Cusine : {cusine}</p>
            <p>Address : {address}</p>
         
        </Card.Text>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default RestCard
