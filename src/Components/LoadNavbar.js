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
import Button from 'react-bootstrap/Button';

function LoadNavbar() {
  const cartCount = useSelector(state => state.cartCount)
  const navigate = useNavigate();

  const handleLogo = () =>{
    navigate('/add-data')
  }

  const handleAdd = () =>{
    navigate('/addItem')
  }

  const handlecart = () =>{
    navigate('/cartPage')
  }

  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand onClick={handleLogo}><h2>eBaazaar</h2></Navbar.Brand>
            <div className="justify-content-end">
              <Row>
                <Col>
                  <Button onClick={handleAdd}>Add</Button>
                </Col>
                <Col>
                  <img
                    src={cartImg}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    onClick={handlecart}
                  />
                </Col>
                <Col>
                  <Nav style={{color:"white"}} onClick={handlecart}><h5>{cartCount}</h5></Nav>
                </Col>
              </Row>
            </div>
            </Container>
        </Navbar>
    </div>
  )
}

export default LoadNavbar;
