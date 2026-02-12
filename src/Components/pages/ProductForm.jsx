import React, { useState } from "react";

import { Container, Form, Button, Row, Col } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { addProduct } from "../../features/product/ProductSlice";

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
  });

  const Dispatch = useDispatch();

  const handleInput = (identifier, e) => {
    setProduct((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value,
      };
    });
  };

  const handleProduct = (e) => {
    e.preventDefault();

    Dispatch(
      addProduct({
        id: new Date().getTime(),
        ...product,
      }),
    );

    setProduct({ title: "", price: "", category: "", image: "" });
  };
  return (
    <>
      <Container className="my-5 p-4">
        <Row className="justify-content-center align-item-center">
          <h2 className="text-center mb-4">Product Management System</h2>
          <Col lg={8}>
            <Form
              onSubmit={handleProduct}
              className="border border-black rounded-5 p-5"
            >
              <Form.Group className="mb-4">
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Title"
                  onChange={(e) => handleInput("title", e)}
                  value={product.title}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Product Price"
                  onChange={(e) => handleInput("price", e)}
                  value={product.price}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Product Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Category"
                  onChange={(e) => handleInput("category", e)}
                  value={product.category}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Image"
                  onChange={(e) => handleInput("image", e)}
                  value={product.image}
                />
              </Form.Group>
              <Button type="submit" variant="success" className="w-100">
                Add Product
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductForm;
