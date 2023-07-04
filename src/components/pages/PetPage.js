import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "reactstrap";
import axios from "axios";

function PetPage() {
  const [user, setUser] = useState(null);
  const [petDetails, setPetDetails] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/v1/pets");
      setUser(response.data[0].contact);
      setPetDetails(response.data);
    } catch (error) {
      console.log(
        "Error fetching user and pet information",
        error.response.data
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {petDetails.map((pet) => (
        <div>
          <Row
            className="pet-name"
            key={pet._id}
          >
            {pet.petName} Charlie{" "}
          </Row>

          <Row className="pet-image">
            <img
              src={pet.image || "Pet photo not available"}
              alt="Pet"
            ></img>
            <img
              src="https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Pet"
            ></img>
          </Row>

          <Row>
            <Col>
              <Table borderless>
                <tbody>
                  <tr>
                    <th scope="row"> Pet's Name </th>
                    <td>{pet.petName || "Pet name not available"}</td>
                    <th>Breed</th>
                    <td>{pet.petBreed}</td>
                  </tr>
                  <tr>
                    <th scope="row">Status</th>
                    <td>{pet.petSituation || "Pet situation not available"}</td>
                    <th> Gender</th>
                    <td>{pet.petGender || "Pet gender not available"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Animal Type</th>
                    <td>{pet.animalType || "Pet type not available"}</td>
                    <th>Date Lost</th>
                    <td>{pet.petDate || "Pet date not available"}</td>
                  </tr>
                  <tr>
                    <th scope="row">Color</th>
                    <td>{pet.petColor || "Pet color not available"}</td>
                    <th>Location (Zip Code)</th>
                    <td>{pet.petLocation || "Pet location not available"}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col>
              <Table
                borderless
                className="contact-info-table"
              >
                {user && (
                  <div>
                    <thead>Contact Information</thead>
                    <tbody>
                      <tr>
                        <th scope="row">Posted By:</th>
                        <td>{user.name || "User name not available"}</td>
                      </tr>
                      <tr>
                        <th scope="row">Email:</th>
                        <td>{user.email || "User email not available"}</td>
                      </tr>
                      <tr>
                        <th scope="row">Phone:</th>
                        <td>{user.phone || "User phone not available"}</td>
                      </tr>
                    </tbody>
                  </div>
                )}
              </Table>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
}

export default PetPage;
