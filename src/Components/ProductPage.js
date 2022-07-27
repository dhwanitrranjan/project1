import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch} from "react-redux";
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
import { isSelected, loadAllProducts } from "./reducers";
import axios from 'axios';

export default function ProductPage() {
    let brands = ["OPPO", "realme", "POCO", "Infinix", "Samsung", "Mi", "Apple", "Huawei", "Microsoft Surface", "HP Pavilion", "Impression of Acqua Di Gio",
    "Royal_Mirage", "Fog Scent Xpressio", "Al Munakh", "Lord - Al-Rehab", "L'Oreal Paris"]
    let cats = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration", "furniture", "tops", "mens-shirts", "mens-shoes", "mens-watches", 
    "womens-dresses", "womens-shoes", "womens-watches", "womens-bags", "womens-jewellery"]
    var allProducts = useSelector((state)=> state.allProducts);
    var [displayCards, setDisplayCards] = useState(allProducts);
    var [filter, setFilter] = useState({
        brand: [],
        category: [],
        title: false,
        stock: false,
        brandFlag: false,
        categoryFlag: false,
        titleFlag: false
    })

    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (e) =>{
        dispatch(isSelected(e))
        navigate("/product")
    }

    useEffect(() => {
        async function loadData () {
            await axios.get('https://dummyjson.com/products?limit=1000')
            .then(response => {
                dispatch(loadAllProducts(response.data.products));
            });
        }
        loadData();
    }, [dispatch]);

    useEffect(() => {
        //Filter logic
        var fil = [...allProducts];

        if (filter.brandFlag){
            fil = allProducts.filter((product) => {
                if (filter.brand.includes(product.brand)){ 
                    return product
                };
            })
        }

        if (filter.categoryFlag){
            console.log("inside")
            fil = fil.filter((product) => {
                if (filter.category.includes(product.category)){ 
                    return product
                };
            })
       }

        if (filter.titleFlag){
            fil = fil.filter((product) => {
                if (filter.title !== false && filter.title.length > 0){
                    if (product.title.toLowerCase().startsWith(filter.title.toLowerCase())){ 
                        return product
                    };
                }
            })
        }

        if (filter.stock){
            fil = fil.filter((product) => {
                if (product.stock > 0){ 
                    return product
                };
            })
        }
        console.log(fil, filter.brand)
        setDisplayCards(fil);

        //All filters turned off
        if (filter.stock === false && filter.title === false && filter.brand.length === 0 && filter.category.length === 0){
            setDisplayCards(allProducts);
        }
    }, [filter,allProducts])

    const handleFilter =(e) =>{
        console.log(e.target.className)
        //Brand handle
        if (e.target.className === "brands"){
            var brd = filter.brand;
            if (e.target.checked){
                console.log("sup")
                brd.push(e.target.name);
                setFilter({...filter, brand: brd, brandFlag: true});
            } else {
                brd = brd.filter((b) => {
                    if (b !== e.target.name)return b;
                });
                if (brd.length === 0){
                    setFilter({...filter, brandFlag: false, brand: []}) 
                } else {
                    setFilter({...filter, brand: brd});
                }
            }
        }

        // Category handle
        if (e.target.className === "category"){
            var cats = filter.category;
            if (e.target.checked){
                cats.push(e.target.name);
                setFilter({...filter, category: cats, categoryFlag: true});
            } else {
                cats = cats.filter((b) => {
                    if (b !== e.target.name)return b;
                });
                if (cats.length === 0){
                    setFilter({...filter, categoryFlag: false, category: []}) 
                } else {
                    setFilter({...filter, category: cats});
                }
            }
        }

        //Title handle
        if (e.target.name === "title"){
            if (e.target.value.length > 0){
                setFilter({...filter, title: e.target.value, titleFlag: true});
            } else {
                setFilter({...filter, title: false, titleFlag: false});
            }
        }

        // Stock handle
        if (e.target.name === "stock"){
            if (e.target.checked){
                setFilter({...filter, stock:true})
            }
            else setFilter({...filter, stock:false});
        }

        }

        var handleSort = (e) => {
            var copyDisplay = [...displayCards];
    
            if (e.target.value !== "Select an option"){
                copyDisplay.sort(function (a,b){
                    return a[e.target.value] - b[e.target.value];
                });
        
                setDisplayCards(copyDisplay);
            }
        }

    return (
        <div>           
                <Row>
                    <Col md={{span:2, offset:1}}>
                        <h3>Filter</h3>
                        <Form>
                            <h5>Brands</h5>
                            {brands.map((brand) => {
                                return  <>
                                <input type="checkbox" onChange={handleFilter} className="brands" name={brand} aria-label="radio 1" />
                                <label> &nbsp;{brand}</label><br />
                            </>
                            //  <Form.Check onChange={handleFilter} className="brands" name={brand} label={brand}/>
                            })}

                        </Form>
                        <br/>    
                        <Form>
                            <h5>Categories</h5>
                            {cats.map((cat)=>{
                                return <>
                                <input type="checkbox" onChange={handleFilter} className="category" name={cat} aria-label="radio 1" />
                                <label> &nbsp;{cat}</label><br/>
                            </>                        
                            })}
                        </Form>
                        <br/>
                        <Form>
                            <h5>Search Product</h5>
                            <Form.Control onChange={handleFilter} name="title" placeholder="Product Title"/>
                        </Form>
                        <br/>
                        <Form>
                            <h5>In Stock</h5>
                            <Form.Check onChange={handleFilter} name="stock" label={"Available in stock"} />
                        </Form>
                        <h3>Sort</h3>
                        <select name="sort" onChange={handleSort}>
                            <option value="Select an option">Select an option</option>
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                            <option value="discountPercentage">Discount Percentage</option>
                        </select>
                    </Col>
                    <Col md={{span:8, offset:1}}>
                        <Row>
                        {displayCards.map((product, index) => {
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
                                        <Button onClick={() => handleClick(product["id"])}>View Product</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )
                        })}
                        </Row>
                    </Col>
                </Row>
        </div>
    )
}