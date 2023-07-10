import React,{useEffect, useState} from 'react'
import './dental.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import dentist1 from './dotor1.png'
import dentist2 from './dentist2.png'
import { Row,Col } from 'react-bootstrap';
import axios from 'axios';

//import Rating from './Rating';

export default function Dental() {
  const [ docs,setDocs ] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/").then((resp)=>{
      
    setDocs(resp.data.data); 
   })
  },[])
console.log(docs)
console.log(typeof docs)
  return (
    <div className='bg'>
    <div className='doctor-container'>
     <Row>
      {
        docs && docs.map(data => <Col key={data.doc_id} xs={3}>
          <div>
  <Card  className='doctor-card' style={{ width: '19rem' }} >
    <Card.Img className='doctor-card-img' variant="top" src={data.image} />
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Subtitle>{data.doc_id}</Card.Subtitle>
      <Card.Text>{data.discription}</Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush ">
      <ListGroup.Item>{data.year} exprience</ListGroup.Item>
      <ListGroup.Item>{data.no_of_operation}+ succesful operations</ListGroup.Item>
      <ListGroup.Item>Rating</ListGroup.Item>
      <ListGroup.Item>{data.hospital_name}</ListGroup.Item>
    </ListGroup>
    <Card.Body style={{backGroundColor:'white'}}>
      <Button  variant='outline-success'>Book Appoinment</Button>
    </Card.Body>
  </Card>
  </div>
  </Col>
      )}
        

    
    </Row> 
    
{/* 
 {
 docs && docs.map(data => 
   <div key={data.doc_id}>
    <img src={data.image}/>
    <p>{data.name}</p>
    <p>{data.doc_id}</p>
    <p>{data.year}</p>

   </div>
  )
 }  */}
    
    
    </div> 
    </div>
  )
}

