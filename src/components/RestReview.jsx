import React,{useState} from 'react'
import { Button,Offcanvas } from 'react-bootstrap';
import { Card,CardHeader,CardBody } from 'react-bootstrap';
function RestReview({review}) {
    console.log(review);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
          <p variant="primary" onClick={handleShow}>
        Reviews
      </p>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {
                review?.length>0 ? 
                review.map((ele)=>{
                    return(
                    //     <Card className='my-5'>
                    //     <Card.Header>{ele?.name}</Card.Header>
                    //     <Card.Body>
                    //       <blockquote className="blockquote mb-0">
                    //         <p>
                    //          {ele?.comments}
                    //         </p>
                    //         <footer className="blockquote-footer d-flex justify-content-between">
                    //             <span>Rating: {ele.rating}  </span>      <span>Date : {ele.date}</span>
                    //         </footer>
                    //       </blockquote>
                    //     </Card.Body>
                    //   </Card>
                    <Card
                    bg='dark'
                    key='dark'
                    text='light'
                    style={{ width: '18rem' }}
                    className="mb-2"
                  >
                    <Card.Header>{ele?.name}</Card.Header>
                    <Card.Body>
                      <Card.Title>Rating : <span className='text-danger'>{ele?.rating}</span> </Card.Title>
                      <Card.Text>
                       {ele?.comments}
                       <br />
                       <p className='text-secondary'>                       Date : {ele?.date}
</p> 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                    )
                }) :
                <p>
                    something
                </p>
            }
         
        </Offcanvas.Body>
      </Offcanvas>
      
    </div>
  )
}

export default RestReview
