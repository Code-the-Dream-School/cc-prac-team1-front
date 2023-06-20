import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/ProfilePage.css";
import { Button, Container, Col, Row } from "reactstrap";

function ProfilePage() {
  const goToEditProfile = useNavigate();

  const user = {
    name: "Bob",
    image:
      "https://www.shutterstock.com/image-vector/man-icon-vector-600w-1040084344.jpg",
    email: "bob123@gmail.com",
    phoneNumber: "(123) 456-6789",
  };

  const petDetails = [
    {
      name: "Charlie",
      image:
        "https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Dog",
      status: "Lost",
      breed: "Beagal",
      color: "Brown",
      gender: "Male",
      description: "Has a large black circle on left back leg",
    },
    {
      name: "Willow",
      image:
        "https://images.pexels.com/photos/1437466/pexels-photo-1437466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Cat",
      status: "Found",
      breed: "N/A",
      color: "Orange",
      gender: "Female",
      description: "",
    },
  ];

  return (
    <>
      <h1 className="profile-h1">Profile</h1>
      <Container className="user-info-container">
        <Col className="user-info">
          <img src={user.image} alt={user.name} width={350} />
          <h3>{user.name}</h3>
          <p>
            {user.email} <br /> {user.phoneNumber}
          </p>
          <Button className="profile-update">Update</Button>
        </Col>
      </Container>
      <br />
      <Container className="profile-container">
        <h2 className="profile-h2">Your Pet(s)</h2>
        <Row className="categories-row">
          <Col md={2}>Image</Col>
          <Col md={2}>Name</Col>
          <Col md={3}>Details</Col>
          <Col md={3}>Description</Col>
          <Col md={2}>Actions</Col>
        </Row>
        <div>
          {petDetails.map((pet, item) => (
            <Row className="pet-details-row" key={item}>
              <Col md={2}>
                <img
                  src={pet.image}
                  className="rounded float-left"
                  alt="..."
                  width={100}
                ></img>
              </Col>
              <Col className="pet-name" md={2}>
                {pet.name}
              </Col>
              <Col className="pet-info" md={3}>
                <ul>
                  <li>Type: {pet.type}</li>
                  <li>Status: {pet.status}</li>
                  <li>Breed: {pet.breed}</li>
                  <li>Color: {pet.color}</li>
                  <li>Gender: {pet.gender}</li>
                </ul>
              </Col>
              <Col md={3}>{pet.description}</Col>
              <Col md={2}>
                <Button className="pet-remove">Remove</Button>
                <br />
                <Button
                  className="pet-edit"
                  onClick={() => goToEditProfile("/profile-edit")}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </>
  );
}

export default ProfilePage;
