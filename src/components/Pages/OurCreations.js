import React from "react";
import { creations } from "../../data/creationdata";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const OurCreations = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Director</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {creations.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <Link to={`/creationdetails/${item.id}`} className='nav creation-link'>
                <td>{item.Title}</td>
              </Link>
              <td>{item.Writer}</td>
              <td>{item.Director}</td>
              <td>{item.Year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OurCreations;
