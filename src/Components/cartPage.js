import React from 'react';
import LoadNavbar from './LoadNavbar';
import Data from '../Data/products.json';
import {useSelector} from 'react-redux';
import { Row } from 'react-bootstrap';

function cartPage() {
  const cart_id_arr = useSelector(state =>state.cart)
  return (
    <div>
      <LoadNavbar />    
      <br/>
      <Container>
        <Row>
          {Data["product"].filter((prod)=>{
            
          }).map((prod)=>{
            return <Card style={{ width: '100%', height:'25rem', margin:'1rem'}}>
            <Card.Img variant="left" src={product["images"][0]} />
            <Card.Body>
              <Card.Title>{product["brand"]} {product["category"]}</Card.Title>
              <Card.Title className="text-decoration-line-through" style={{color:"red"}}>MRP: ${product["price"]}</Card.Title>
              <Card.Title style={{color:"green"}}>Offer Price: ${Math.round(product["price"]-product["price"]*product["discountPercentage"]/100)}</Card.Title>
              <Card.Text>{product["description"]}</Card.Text>
              <Card.Text style={{color:"blue"}}>Rating: {product["rating"]}</Card.Text>
              <Button onClick={() => handleClick(product["id"])}>View Product</Button>
            </Card.Body>
          </Card> 
          })}
        </Row>
      </Container>
    </div>
  )
}

export default cartPage
