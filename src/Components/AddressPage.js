import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSelector, useDispatch} from 'react-redux';
import { ShippingAddress } from './reducers';
import LoadNavbar from './LoadNavbar';

export default function AddressPage() {
    const dispatch = useDispatch()

    var handleChange = (e) =>{
        let address = e.target.value
        dispatch(ShippingAddress(address))
    }

    return (
        <div>
            <LoadNavbar />
            <br/>
            <Row>
                <Col md={{span:6, offset:3}}>
                    <Form>
                        <Form.Group style={{margin:"10%"}}>
                            <Form.Label>Shipping Address:</Form.Label>
                            <Form.Control type="text" onChange={handleChange}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={{span:6, offset:5}}>
                    <Button>Place Order</Button>
                </Col>
            </Row>
        </div>
    )
}
