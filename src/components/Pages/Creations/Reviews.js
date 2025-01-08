import React from "react";
import { Carousel, Card } from "react-bootstrap";
import { reviews } from "../../../data/reviewData";

const Reviews = () => {
  return (
    <div >
      <h1 className="my-4 pt-5">Reviews</h1>
      <Carousel>
        {reviews.map((item, i) => (
          <Carousel.Item key={i} >
            <Card className="mx-auto my-4 fs-5 fs-md-5 fs-lg-6 fw-normal rounded-5 fw-normal "  style={{ background: " black"}}>
              <Card.Body
                className="px-10 my-5 review-txt"
                style={{
                  color: "#ec6c4c",
                  paddingLeft: "20%",
                  paddingRight: "20%",
                 
                }}
              >
                <Card.Title>{item.title}</Card.Title> Reviewed By : {item.name}
                <Card.Text>{item.comment}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
       
      </Carousel>
    </div>
  );
};

export default Reviews;
