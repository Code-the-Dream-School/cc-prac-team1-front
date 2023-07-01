import React from "react";
import { Row, Col, Table } from "reactstrap";

function PetPage () {
    return (
        <>
        <br/>
        <br/>
    <Row className="pet-name">
            Charlie
    </Row>
    <br/>
    <br/>
    <Row className="pet-image">
        <img src = "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Pet"></img>
    </Row>
    <br/>
    <br/>
    <br/>
      
<Row>      
<Col>
        <Table borderless>
  <tbody>
    <tr>
      <th scope="row">
        Pet's Name
      </th>
      <td>
        {"####"}
      </td>
      <th>
        Breed
      </th>
      <td>
      {"####"}
      </td>
    </tr>
    <tr>
      <th scope="row">
        Status
      </th>
      <td>
      {"####"}
      </td>
      <th>
        Gender
      </th>
      <td>
      {"####"}
      </td>
    </tr>
    <tr>
      <th scope="row">
        Animal Type
      </th>
      <td>
      {"####"}
      </td>
      <th>
        Date Lost
      </th>
      <td>
      {"####"}
      </td>
    </tr>
    <tr>
      <th scope="row">
        Color
      </th>
      <td>
      {"####"}
      </td>
      <th>
        Location 
        (Zip Code)
      </th>
      <td>
      {"####"}
      </td>
    </tr>
  </tbody>
</Table>
</Col>

<Col>
<Table borderless>
    <thead>
        Contact Information
    </thead>
  <tbody>
    <tr>
        <th scope="row">
            Posted By: 
        </th>
        <td>
            Tracy Cano
        </td>
    </tr>
    <tr>
        <th scope="row">
            Email:
        </th>
        <td>
            Tracy.Cano3.14@gmail.com
        </td>
    </tr>
    <tr>
        <th scope="row">
            Phone:
        </th>
        <td>
            (123) - 345-6789
        </td>
    </tr>
  </tbody>
</Table>
</Col>
</Row>  
        </>
    )
}

export default PetPage;