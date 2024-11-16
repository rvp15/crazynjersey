import React from "react";
import { creations } from "../../../data/creationdata";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const OurCreations = () => {
  return (
    <Container fluid className="bg-black content-main">
    <div className="our-creations mx-auto p-5">
    <Row xs={1} sm={2} md={3} lg={4} className="g-4 p-5">
      {creations.map((item, i) => (
        <Col key={i}>
          <Card className="text-center h-100 shadow-sm border-0">
            <Card.Img
              variant="top"
              src={item.poster} // Assuming `imageUrl` is a property in your data
              alt={item.Title}
              className="img-fluid d-none d-md-block"
              style={{ height: "350px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="fs-4">{item.Title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Written by: {item.Writer}
              </Card.Subtitle>
              <Card.Text>
                Directed by: {item.Director}
                <br />
                Year: {item.Year}
              </Card.Text>
              <Link
                to={`/creationdetails/${item.id}`}
                className="stretched-link text-decoration-none text-primary"
              >
                View Details
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  </Container>
  );
};

export default OurCreations;
