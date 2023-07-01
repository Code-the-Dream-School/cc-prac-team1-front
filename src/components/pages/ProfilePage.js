import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ProfilePage.css";
import { Button, Container, Col, Row } from "reactstrap";
import axios from "axios";
// import "bootstrap-icons/font/bootstrap-icons.css";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [petDetails, setPetDetails] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/v1/pets");
      setUser(response.data[0].contact);
      console.log(response.data);
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

  const goToEditProfile = useNavigate();

  const editPet = (pet) => {
    goToEditProfile(`/profile-edit/${pet._id}`);
  };

  const removePet = async (petId) => {
    try {
      await axios.delete(`http://localhost:5005/api/v1/pet/${petId}`);
      setUser((prevPets) =>
        prevPets.filter((pet) => pet.contact._id !== petId)
      );
    } catch (error) {
      console.log("Error deleting pet", error);
    }
  };

  return (
    <>
      <h1 className="profile-h1">Profile</h1>
      <Container className="user-info-container">
        {user && (
          <div>
            <Col className="user-info" key={user.id}>
              <img src={user.image} alt={user.name} width={350} />
              <h3>{user.name}</h3>
              <p>
                {user.email} <br /> {user.phone}
              </p>
              <Button className="profile-update">Update</Button>
            </Col>
          </div>
        )}
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
          {petDetails.map((pet) => (
            <Row className="pet-details-row" key={pet._id}>
              <Col md={2}>
                <img
                  src={pet.image}
                  className="rounded float-left"
                  alt="..."
                  width={100}
                ></img>
              </Col>
              <Col className="pet-name" md={2}>
                {pet.petName}
              </Col>
              <Col className="pet-info" md={3}>
                <ul>
                  <li>Type: {pet.animalType}</li>
                  <li>
                    {pet.petSituation}: {pet.petDate}
                  </li>
                  <li>Breed: {pet.petBreed}</li>
                  <li>Color: {pet.petColor}</li>
                  <li>Gender: {pet.petGender}</li>
                  <li>ZIP code: {pet.petLocation}</li>
                </ul>
              </Col>
              <Col md={3}>{pet.description}</Col>
              <Col md={2}>
                <Button
                  type="submit"
                  onClick={() => removePet(pet._id)}
                  className="pet-remove"
                >
                  Remove
                </Button>
                <br />
                <Button className="pet-edit" onClick={() => editPet(pet)}>
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
