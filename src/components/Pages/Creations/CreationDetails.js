import React from "react";
import { useParams } from "react-router-dom";
import { creations } from "../../../data/creationdata";
import { MdAccessTime } from "react-icons/md";
import Reviews from "./Reviews";

const CreationDetails = () => {
  let { id } = useParams();
  const currentItem = creations.find((item) => item.id === parseInt(id));
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="text-center mt-4">
        <h1>{currentItem.Title}</h1>
        <p>
          <span>
            <MdAccessTime />
          </span>{" "}
          {currentItem.Date}
        </p>
        <p className="fs-4 fs-md-5 fs-lg-6 fw-normal text-center mt-4">
          {currentItem.Description}
        </p>
        <Reviews />
        <img
          src={currentItem.poster}
          alt={currentItem.Title}
          className="img-fluid"
          style={{ maxWidth: "70%", height: "auto", margin: "10px" }}
        />
      </div>
    </div>
  );
};

export default CreationDetails;
