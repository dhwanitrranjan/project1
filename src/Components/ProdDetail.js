import React, {useContext} from 'react';
import {ProductContext} from './ProductPage';
import Data from '../Data/products.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function ProdDetail() {
    const ele_id = useContext(ProductContext)

    return (
        <div>
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
                            <Button>Add to Cart</Button>
                        </Col>
                    </Row>
                </Container>
                </div>
            })}
        </div>
    )
}

export default ProdDetail;