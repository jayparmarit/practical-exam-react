import React from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { useSelector } from "react-redux";

const ProductList = () => {
  const Products = useSelector((state) => state.Product?.product || []);

  console.log("data", Products);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortOrder, setSortOrder] = React.useState("asc");

  const filteredProducts = Products.filter((prod) =>
    prod.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between my-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control w-50"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="form-select w-25"
          >
            <option value="asc">Sort by Price: Low to High</option>
            <option value="desc">Sort by Price: High to Low</option>
          </select>
        </div>
      </Container>
      <Container className="border rounded-4 border-black mt-5">
        <h2 className="text-center my-4">Product List</h2>
        {Products.length === 0 ? (
          <p className="text-center my-4">
            No products added yet. Add some products to see them here!
          </p>
        ) : (
          <Row className="g-4 py-4">
            {sortedProducts.map((prod) => (
              <Col key={prod.id} sm={6} md={4} lg={3} xl={3}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={prod.image}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>
                      <strong>Name: </strong>
                      {prod.title}
                    </Card.Title>
                    <Card.Text>
                      <p className="mb-1">
                        <strong>Price: </strong> ₹{prod.price}
                      </p>
                      <p className="mb-0">
                        <strong>Category: </strong> {prod.category}
                      </p>
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        className="me-4"
                        variant="warning"
                        onClick={() => Dispatch(setUpdateState(prod))}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => Dispatch(deleteProduct(prod.id))}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProductList;
