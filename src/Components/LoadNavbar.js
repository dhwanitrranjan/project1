import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import cartImg from './cart.png';
import { loadcartCount } from './reducers';
import {useSelector} from 'react-redux';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoadNavbar() {
  const cartCount = useSelector(state => state.cartCount)
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/add-data')
  }
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand onClick={handleClick}><h2>eBaazaar</h2></Navbar.Brand>
            {/* <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
            <div className="justify-content-end">
              <Row>
                <Col>
                  <img
                    src={cartImg}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Col>
                <Col>
                  <Nav style={{color:"white"}}><h5>{cartCount}</h5></Nav>
                </Col>
              </Row>
            </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default LoadNavbar;
