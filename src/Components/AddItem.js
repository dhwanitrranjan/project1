import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function AddItem() {
  var navigate = useNavigate();
  var id = useRef(null);
  var title = useRef("");
  var description = useRef("");
  var price = useRef(null);
  var discount = useRef(null);
  var rating = useRef(null);
  var stock = useRef(null);
  var brand = useRef("");
  var category = useRef("");
  var thumbnail = useRef("");
  var [image, setImage] = useState("");
  var [listOfImages, setListOfImages] = useState([])

  const handleAddProduct = () =>{
    var json = {
      id: id.current.value,
      title: title.current.value,
      description: description.current.value,
      price: price.current.value,
      discount: discount.current.value,
      rating: rating.current.value,
      stock: stock.current.value,
      brand: brand.current.value,
      category: category.current.value,
      thumbnail: thumbnail.current.value,
      images: listOfImages
    }

    fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(json)
    })
    .then(res => res.json())
    .then(console.log);
    }

    const addImage=() =>{

    }

  return (
    <div>
      <Container>
        <h3>Add a product</h3>
        <Form className='p-4' onSubmit={handleAddProduct}>
          <Form.Group className="mb-3" controlId="formID">
            <Form.Control type="number" placeholder="Enter ID" ref={id} required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTitle"> 
            <Form.Control type="text" placeholder="Enter Title" ref={title} required/>    
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Control type="text" placeholder="Enter Description" ref={description} required/>    
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrice">    
            <Form.Control type="number" placeholder="Enter Price" ref={price} required/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formDiscountPercentage">
            <Form.Control type="number" placeholder="Enter Discount Percentage" ref={discount} required/>    
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRating">      
            <Form.Control type="number" placeholder="Enter Rating" ref={rating} required/>    
          </Form.Group>

          <Form.Group className="mb-3" controlId="formStock">    
            <Form.Control type="number" placeholder="Enter Stock" ref={stock} required/>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBrand">    
            <Form.Control type="text" placeholder="Enter Brand" ref={brand} required/>    
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">          
            <Form.Control type="text" placeholder="Enter Category" ref={category} required/>   
          </Form.Group>

          <Form.Group className="mb-3" controlId="formThumbnail">            
            <Form.Control type="text" placeholder="Enter Thumbnail" ref={thumbnail} required/>    
          </Form.Group>

          {/* <Row className="mb-3">
            <Col md="10">
                <Form.Group className="mb-3" controlId="formImages">
                  <Form.Label>Images</Form.Label>
                  <Form.Control type="text" placeholder="Enter Images" onChange={handleImage} value={image}/>            
                </Form.Group>
            </Col>

            <Col className="mt-4" md="2">
                <Button variant="primary" onClick={addImage}>Add image</Button>
            </Col>
          </Row> */}
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  )
}
