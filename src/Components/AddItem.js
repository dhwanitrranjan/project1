import React from 'react';
import { Form } from 'react-bootstrap';

export default function AddItem() {
  return (
    <div>
      <Container>
        <h3>Add a product</h3>
        <Form className='p-4' style={{border:"outset"}} onSubmit={handleAddProduct}>
          <Form.Group className="mb-3" controlId="formID">
            <Form.Label>ID</Form.Label>
            <Form.Control type="number" placeholder="Enter ID" ref={id} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" ref={title} required/>
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" ref={description} required/>
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Enter Price" ref={price} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDiscountPercentage">
            <Form.Label>Discount Percentage</Form.Label>
            <Form.Control type="number" placeholder="Enter Discount Percentage" ref={discount} required/>
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" placeholder="Enter Rating" ref={rating} required/>
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control type="number" placeholder="Enter Stock" ref={stock} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBrand">
            <Form.Label>Brand</Form.Label>
            <Form.Control type="text" placeholder="Enter Brand" ref={brand} required/>
              
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Enter Category" ref={category} required/>
             
          </Form.Group>
          <Form.Group className="mb-3" controlId="formThumbnail">
            <Form.Label>Thumbnail</Form.Label>
            <Form.Control type="text" placeholder="Enter Thumbnail" ref={thumbnail} required/>
              
          </Form.Group>
          <Row className="mb-3">
            <Col md="10">
                <Form.Group className="mb-3" controlId="formImages">
                    <Form.Label>Images</Form.Label>
                    <Form.Control type="text" placeholder="Enter Images" onChange={handleImage} value={image}/>
            
                </Form.Group>
            </Col>
            <Col className="mt-4" md="2">
                <Button variant="primary" onClick={addImage}>Add image</Button>
            </Col>
          </Row>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </Container>
    </div>
  )
}
