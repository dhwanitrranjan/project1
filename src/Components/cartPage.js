import React from 'react';
import LoadNavbar from './LoadNavbar';
import Data from '../Data/products.json';
import {useSelector} from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const cart_id_arr = useSelector(state =>state.cart)
  const navigate = useNavigate()
  let total = 0

  return (
    <div>
      <LoadNavbar />    
      <br/>
      <Container>
        <Row>
          <Col md={{span:8}}>
          {Data.products.filter((prod)=>{
            if (prod.id in cart_id_arr) {
              total += Math.round(prod["price"]-prod["price"]*prod["discountPercentage"]/100)*cart_id_arr[prod.id]
              return prod}
          }).map((prod)=>{
            return <>
            <Card style={{ width: '100%', height:'40rem', margin:'1rem'}}>
              <Card.Img style={{objectFit:"contain", width: '100%', height:'25rem', margin:'1rem'}} variant="top" src={prod["images"][0]} />
              <Card.Body>
                <Card.Title>{prod["brand"]} {prod["category"]}</Card.Title>
                <Card.Text className="text-decoration-line-through" style={{color:"red"}}>MRP: ${prod["price"]}</Card.Text>
                <Card.Text style={{color:"green"}}>Offer Price: ${Math.round(prod["price"]-prod["price"]*prod["discountPercentage"]/100)}</Card.Text>
                <Card.Title>Quantity: {cart_id_arr[prod.id]}</Card.Title>
              </Card.Body>
          </Card>
            </>
          })}
          </Col>
          <Col>
            <h3>Total Cost: ${total}</h3>
            <Button style={{margin:'38%'}} onClick={()=>navigate('/addressPage')}>Checkout</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CartPage
