import React, { createContext } from 'react';
import data from '../Data/products.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ProdDetail from './ProdDetail';
import ReactDOM from 'react-dom/client';
// import { useNavigate } from 'react-router-dom';

const ProductContext = createContext();

export default function ProductPage() {
    // console.log(data["products"])
    // let navigate = useNavigate();

    const handleClick = (e) =>{
        // let EleData_ID = Data["products"]["id"];
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <ProductContext.Provider value={e}>
            {/* <ProdDetail /> */}
        </ProductContext.Provider>
        )
    }

    return (
        <div>            
            <Container>
                <Row>
                    <Col sm={{span:2}}>
                        <h3>Filter</h3>
                        <Form>
                            <h5>Brands</h5>
                            <Form.Check label={"OPPO"}/>
                            <Form.Check label={"realme"}/>
                            <Form.Check label={"POCO"}/>
                            <Form.Check label={"Infinix"}/>
                            <Form.Check label={"Samsung"}/>
                            <Form.Check label={"Mi"}/>
                        </Form>
                        <br/>    
                        <Form>
                            <h5>Categories</h5>
                            <Form.Check label={"smartphones"}/>
                            <Form.Check label={"laptops"}/>
                            <Form.Check label={"fragrances"}/>
                            <Form.Check label={"skincare"}/>
                            <Form.Check label={"groceries"}/>
                            <Form.Check label={"home-decoration"}/>
                            <Form.Check label={"furniture"}/>
                            <Form.Check label={"tops"}/>
                            <Form.Check label={"mens-shirts"}/>
                            <Form.Check label={"mens-shoes"}/>
                            <Form.Check label={"mens-watches"}/>
                            <Form.Check label={"womens-dresses"}/>
                            <Form.Check label={"womens-shoes"}/>
                            <Form.Check label={"womens-watches"}/>
                            <Form.Check label={"womens-bags"}/>
                            <Form.Check label={"womens-jewellery"}/>
                            <Form.Check label={"sunglasses"}/>
                            <Form.Check label={"automotive"}/>
                            <Form.Check label={"motorcycle"}/>
                            <Form.Check label={"lighting"}/>
                        </Form>
                        <br/>
                        <Form>
                            <h5>Search Product</h5>
                            <Form.Control placeholder="Product Title"/>
                        </Form>
                        <br/>
                        <Form>
                            <h5>In Stock</h5>
                            <Form.Check label={"Available in stock"} />
                        </Form>                      

                    </Col>
                    <Col sm={{span:9, offset:1}}>
                        <Row>
                        {data["products"].map((product, index) => {
                            return (
                            <Col sm={{span:4}}>
                                <Card style={{ width: '18rem', height:'36rem', margin:'1rem'}}>
                                    <Card.Img variant="top" src={product["images"][0]} />
                                    <Card.Body>
                                        <Card.Title>{product["brand"]} {product["category"]}</Card.Title>
                                        <Card.Title>${product["price"]}</Card.Title>
                                        <Card.Text>{product["description"]}</Card.Text>
                                        <Card.Text>Rating: {product["rating"]}</Card.Text>
                                        <a onClick={() => handleClick(data["id"])} href="/product">View Product</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export {ProductContext};