import React, { createContext } from 'react';
import data from '../Data/products.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ProdDetail from './ProdDetail';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ProductContext = createContext();
// let navigate = useNavigate();

export default function ProductPage() {
    let brands = ["OPPO", "realme", "POCO", "Infinix", "Samsung", "Mi", "Apple", "Huawei", "Microsoft Surface", "HP Pavilion", "Impression of Acqua Di Gio",
    "Royal_Mirage", "Fog Scent Xpressio", "Al Munakh", "Lord - Al-Rehab", "L'Oreal Paris"]

    let cats = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "mens-shirts", "mens-shoes", "mens-watches", 
    "womens-dresses", "womens-shoes", "womens-watches", "womens-bags", "womens-jewellery"]


    // console.log(data["products"])
    // let navigate = useNavigate();

    const handleClick = (e) =>{
        // let EleData_ID = e.data["products"]["id"];
        console.log(e)
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
        <ProductContext.Provider value={e}>
            <ProdDetail />
        </ProductContext.Provider>
        // navigate("/add-data/product-details")
        )
    }

    return (
        <div>           
            <Container>
                <Row>
                    <Col md={{span:2}}>
                        <h3>Filter</h3>
                        <Form>
                            <h5>Brands</h5>
                            {brands.map((brand) => {
                                return <Form.Check label={brand}/>
                            })}
                            
                        </Form>
                        <br/>    
                        <Form>
                            <h5>Categories</h5>
                            {cats.map((cat)=>{
                                return <Form.Check label={cat}/>                            
                            })}
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
                    <Col md={{span:9, offset:1}}>
                        <Row>
                        {data["products"].map((product, index) => {
                            return (
                            <Col md={{span:4}}>
                                {/* {console.log(product["id"])} */}
                                <Card style={{ width: '18rem', height:'36rem', margin:'1rem'}}>
                                    <Card.Img variant="top" src={product["images"][0]} />
                                    <Card.Body>
                                        <Card.Title>{product["brand"]} {product["category"]}</Card.Title>
                                        <Card.Title>${product["price"]}</Card.Title>
                                        <Card.Text>{product["description"]}</Card.Text>
                                        <Card.Text>Rating: {product["rating"]}</Card.Text>
                                        {/* <a onClick={() => handleClick(data["id"])} href="/product">View Product</a> */}
                                        {/* <Button onClick={() => navigate("/add-data/product-details")}>View Product</Button> */}
                                        <Button onClick={() => handleClick(product["id"])}>View Product</Button>
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