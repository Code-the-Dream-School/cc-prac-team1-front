import React, { useState, useEffect } from "react";
import "./css/EditProfile.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from "reactstrap";

function EditProfile() {
  const { id } = useParams();
  const [petDetails, setPetDetails] = useState({
    petName: "",
    petDate: "",
    petBreed: "",
    petColor: "",
    petGender: "",
    petLocation: "",
    petSituation: "",
  });
  const [updatedPet, setUpdatedPet] = useState();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const baseURL = "http://localhost:5005/api/v1";
  const urlWithID = `${baseURL}/pets/${id}`;

  // Fetches current pet data from remote database
  useEffect(() => {
    axios
      .get(urlWithID, config)
      .then((response) => {
        console.log(response.data);
        setPetDetails(response.data);
      })
      .catch((error) => {
        console.log(
          "Error fetching user and pet information",
          error.response.data
        );
      });
  }, []);

  // Sends the updated pet data to the remote database
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(updatedPet); // Debug

    axios
      .patch(urlWithID, updatedPet, config)
      .then((response) => {
        console.log(response.data);
        setSuccessMessage("Pet updated successfully.");
        setErrorMessage("");
      })
      .catch((error) => {
        console.log("Error updating pet profile", error.response.data);
        setSuccessMessage("");
        setErrorMessage("Failed to update pet. Please try again.");
      });
  };

  // Updates the state variables petDetails and updatedPet based on user input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPetDetails((prevState) => ({
      ...prevState,
      pet: {
        ...prevState.pet,
        [name]: value,
      },
    }));

    setUpdatedPet((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <img
        src="https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        className="pet-img-edit"
        alt="..."
        width={450}
        height={350}
      />

      <Container className="edit-profile-container">
        <h3 className="pet-info-h3">Pet Information </h3>
        {/* Success message */}
        {successMessage && (
          <div className="successMessage">{successMessage}</div>
        )}
        {/* Error message */}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        <Form
          className="edit-pet-info-form"
          id="edit-pet-info-form"
        >
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="petName">Pet Name</Label>
                <Input
                  type="text"
                  id="petName"
                  name="petName"
                  value={petDetails.pet?.petName}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="status">Status</Label>
                <Input
                  type="text"
                  id="petSituation"
                  name="petSituation"
                  value={petDetails.pet?.petSituation}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="animalType">Animal type</Label>
                <Input
                  type="text"
                  id="animalType"
                  name="animalType"
                  value={petDetails.pet?.animalType}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="breed">Breed</Label>
                <Input
                  type="text"
                  id="petBreed"
                  name="petBreed"
                  value={petDetails.pet?.petBreed}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="color">Color</Label>
                <Input
                  type="text"
                  id="petColor"
                  name="petColor"
                  value={petDetails.pet?.petColor}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="gender">Gender</Label>
                <Input
                  type="text"
                  id="petGender"
                  name="petGender"
                  value={petDetails.pet?.petGender}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="location">Location (Zip Code)</Label>
                <Input
                  type="text"
                  id="petLocation"
                  name="petLocation"
                  autoComplete="postal-code"
                  value={petDetails.pet?.petLocation}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="dateFound">Date</Label>
                <Input
                  type="date"
                  id="petDate"
                  name="petDate"
                  value={petDetails.pet?.petDate}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            type="submit"
            className="edit-profile-update"
            onClick={handleSubmit}
          >
            Update
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default EditProfile;
