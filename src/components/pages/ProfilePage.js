import React from "react";
import { useNavigate } from "react-router-dom";
// import "./css/ProfilePage.css";
import { Button, Container, Row, Col } from "reactstrap";

function ProfilePage() {
  const goToEditProfile = useNavigate();

  const user = {
    name: "Bob",
    image: "image",
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
    },
  ];

  return (
    <>
      <h1>Profile</h1>
      <img src={user.image} alt={user.name} />
      <h2>{user.name}</h2>
      <p>
        {user.email} <br /> {user.phoneNumber}
      </p>
      <Button
        className="profile-update"
        onClick={() => goToEditProfile("/profile-edit")}
      >
        Update
      </Button>
      <br />
      <Container className="profile-container">
        <Row className="categories-row">
          <Col md={2}>Image</Col>
          <Col md={2}>Name</Col>
          <Col md={2}>Details</Col>
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
              <Col className="pet-info" md={2}>
                <ul>
                  <li>Type: {pet.type}</li>
                  <li>Status: {pet.status}</li>
                  <li>Breed: {pet.breed}</li>
                  <li>Color: {pet.color}</li>
                  <li>Gender: {pet.gender}</li>
                </ul>
              </Col>
              <Col md={2}>
                <Button className="pet-remove">Remove</Button>
                <br />
                <Button className="pet-edit">Edit</Button>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </>
  );
}

export default ProfilePage;
