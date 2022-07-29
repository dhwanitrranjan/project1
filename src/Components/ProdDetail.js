import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Data from '../Data/products.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { addtoCart, loadcartCount} from './reducers';
import LoadNavbar from './LoadNavbar';



function ProdDetail() {
    const ele_id = useSelector(state => state.selectedCard)
    const cart = useSelector(state => state.cart)
    var dispatch = useDispatch();

    const handleClick = (e) =>{
        var final_cart = Object.assign({}, cart)
        console.log(typeof e)
        if (e in final_cart){
            final_cart[e] += 1
        } else {
            final_cart[e] = 1
        }
        console.log(final_cart)
        dispatch(addtoCart(final_cart))
        dispatch(loadcartCount())
    }

    return (
        <div>
            <LoadNavbar />    
            <br/>
            {Data["products"].filter((product, index) =>
            (product["id"] === ele_id),
            ).map((prod, index) => {
            return <div>
                <Container>
                    <Row>
                        <Col md={{span:3}}>                   
                        {prod["images"].map((image)=>{
                            return <div>
                                <img src={image} width="100%"></img>
                                <br/>
                                </div>
                        })}
                        </Col>
                        <Col md={{span:9}}>
                            <h3>{prod["brand"]} {prod["title"]}</h3>
                            <h3>${prod["price"]}</h3>
                            <p>{prod["description"]}</p>
                            <p>{prod["rating"]}</p>
                            <Button onClick={()=> handleClick(prod["id"])}>Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
                </div>
            })}
        </div>
    )
}

export default ProdDetail;