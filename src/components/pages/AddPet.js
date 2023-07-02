import React from "react";
import { Container, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import FormSelect from "react-bootstrap/FormSelect";
import { useState, useEffect } from "react";
import "./css/AddPetPage.css";
import axios from "axios";
import Switch from "react-switch";

function AddPet() {
  // Defines component variables
  const [image, setImage] = useState("");
  const [petName, setPetName] = useState("");
  const [petSituation, setPetSituation] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petColor, setPetColor] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petLocation, setPetLocation] = useState("");
  const [petDate, setPetDate] = useState("");
  const [petDescription, setPetDescription] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    console.log("handleSubmit called"); //debug
    event.preventDefault();

    const postData = async (
      image,
      petName,
      petSituation,
      animalType,
      petBreed,
      petColor,
      petGender,
      petLocation,
      petDate,
      petDescription
    ) => {
      const token = localStorage.getItem("token");
      const baseURL = "http://localhost:5005/api/v1";

      const data = {
        image: image,
        petName: petName,
        petSituation: petSituation,
        animalType: animalType,
        petBreed: petBreed,
        petColor: petColor,
        petGender: petGender,
        petLocation: petLocation,
        petDate: petDate,
        petDescription: petDescription,
      };

      try {
        // Axios request to add a pet to the remote database
        const response = await axios.post(`${baseURL}/pets`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Submitting form .."); // Debug

        if (response.status === 200) {
          console.log("Success adding pet"); // Debug

          setSuccessMessage("Pet added successfully!");
          setErrorMessage("");

          // Reset form values to nothing
          setImage("");
          setPetName("");
          setPetSituation("");
          setAnimalType("");
          setPetBreed("");
          setPetColor("");
          setPetGender("");
          setPetLocation("");
          setPetDate("");
          setPetDescription("");
        }
      } catch (error) {
        console.error("Error:", error); // Debug

        setSuccessMessage("");
        setErrorMessage("Failed to add pet.");
      }
    };

    postData(
      petName,
      petSituation,
      animalType,
      petBreed,
      petColor,
      petGender,
      petLocation,
      petDate,
      petDescription
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "petSituation") {
      setPetSituation(value);
    } else {
      switch (name) {
        case "image":
          setImage(value);
          break;
        case "petName":
          setPetName(value);
          break;
        case "animalType":
          setAnimalType(value);
          break;
        case "petBreed":
          setPetBreed(value);
          break;
        case "petColor":
          setPetColor(value);
          break;
        case "petGender":
          setPetGender(value);
          break;
        case "petLocation":
          setPetLocation(value);
          break;
        case "petDate":
          setPetDate(value);
          break;
        case "petDescription":
          setPetDescription(value);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <Container>
        <div className="space-for-header">
          <h1>Add a pet</h1>
        </div>
        {/* Success message */}
        {successMessage && (
          <div className="successMessage">{successMessage}</div>
        )}
        {/* Error message */}
        {errorMessage && <div className="errorMessage">{errorMessage}</div>}

        <Row>
          <Col>
            <FormGroup>
              <Label for="petSituation">Pet Situation: </Label>
              <span className="petSituationLabel">
                <b>{petSituation === "found" ? "Found" : "Lost"}</b>
              </span>
              <br />
              <Switch
                id="petSituation"
                name="petSituation"
                checked={petSituation === "found"}
                onChange={(checked) =>
                  handleInputChange({
                    target: {
                      name: "petSituation",
                      value: checked ? "found" : "lost",
                    },
                  })
                }
                onColor="#2793E2"
                offColor="#FD678D"
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </FormGroup>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <FormGroup>
                <Label for="image">Upload Pet Image</Label>
                <Input
                  type="file"
                  id=""
                  name="image"
                  value={image}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label for="petName">Pet Name</Label>
                <Input
                  type="text"
                  id=""
                  name="petName"
                  placeholder="Enter pet's name"
                  value={petName}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <Label>Animal Type</Label>
              <Input
                type="text"
                name="animalType"
                value={animalType}
                onChange={handleInputChange}
                placeholder="Enter animal type"
              />
            </Col>
            <br></br>
            <Col>
              <FormGroup>
                <Label for="breed">Breed</Label>
                <Input
                  type="text"
                  name="petBreed"
                  placeholder="Enter breed if known"
                  value={petBreed}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label for="petColor">Color</Label>
                <Input
                  type="text"
                  id=""
                  name="petColor"
                  placeholder="Color or colors of the pet..."
                  value={petColor}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <br></br>
            <Col>
              <Label>Sex</Label>
              <FormSelect
                name="petGender"
                value={petGender}
                onChange={handleInputChange}
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="unknown">Unknown</option>
              </FormSelect>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label for="location">Location(Zip code)</Label>
                <Input
                  type="text"
                  id=""
                  name="petLocation"
                  placeholder="Zip code"
                  value={petLocation}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <br></br>
            <Col>
              <FormGroup>
                <Label for="dateLost">Date Lost</Label>
                <Input
                  type="date"
                  id=""
                  name="petDate"
                  value={petDate}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <br></br>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                id=""
                placeholder="Write down a few unique characteristics of the pet..."
                name="petDescription"
                value={petDescription}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Row>
          <button
            className="form-button"
            type="submit"
          >
            Add Pet
          </button>
        </Form>
      </Container>
    </div>
  );
}

export default AddPet;
