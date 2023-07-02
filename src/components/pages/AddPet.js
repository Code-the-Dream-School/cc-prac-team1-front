import React from "react";
import { Container, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import FormSelect from "react-bootstrap/FormSelect";
import { useState, useEffect } from "react";
import "./css/LostAndFoundForm.css";
import LostOrFound from "./LostOrFoundChoice";
import axios from "axios";

const AddPet = () => {

  const initialValues = {
    petSituation: "",
    petName: "",
    animalType: "",
    petBreed: "",
    petColor: "",
    petGender: "",
    petLocation: "",
    petDate: "",
    petDescription: "",
    image: "",
  };

  let [response, setResponse] = useState(null);
  const [postPetData, setPostData] = useState(initialValues);

  const [clickBack, setClickBack] = useState(false);

  useEffect(() => {
    const sendPetData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5005/api/v1/pets",
          postPetData
        );
        setResponse(response.data);
      } catch (error) {
        console.log("Error sending data:", error);
      }
    };

    sendPetData();
  }, [postPetData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postPetData,
      [name]: value,
    });
  };

  const handleClickBack = () => {
    setClickBack(true);
  };

  const handleSubmitPet = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5005/api/v1/pets",
        postPetData
      );
      setResponse(response.data);
    } catch (error) {
      console.log("Error sending data:", error);
    }

    setPostData(" ");
  };

  return (
    <div>
      {!clickBack && (
        <Container>
          <div className="space-for-header"></div>
          <button onClick={handleClickBack}>
            <i class="bi bi-arrow-left-square"></i>
          </button>

          <Form onSubmit={handleSubmitPet}>
            \
            <Row>
              <Col>
                <FormGroup>
                  <Label for="image">Upload Pet Image</Label>
                  <Input
                    type="file"
                    id=""
                    name="image"
                    value={postPetData.image}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
              {/* <Form.Check
                label="Lost Pet"
                name="petSituation"
                type="radio"
                value={postPetData.petSituation}
              />
              <Form.Check
                label="Found Pet"
                name="petSituation"
                type="radio"
                value={postPetData.petSituation}
              /> */}

              <Col>
                <FormGroup>
                  <Label for="petName">Pet Name</Label>
                  <Input
                    type="text"
                    id=""
                    name="petName"
                    placeholder="Enter pet's name"
                    value={postPetData.petName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>Animal Type</Label>
                <FormSelect
                  name="animalType"
                  value={postPetData.animalType}
                  onChange={handleInputChange}
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="other">Other</option>
                </FormSelect>
              </Col>
              <br></br>
              <Col>
                <FormGroup>
                  <Label for="breed">Breed</Label>
                  <Input
                    type="text"
                   
                    name="petBreed"
                    placeholder="Enter breed if known"
                    value={postPetData.petBreed}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="petColor">Color</Label>
                  <Input
                    type="text"
                    id=""
                    name="petColor"
                    placeholder="Color or colors of the pet..."
                    value={postPetData.petColor}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </Col>

              <br></br>
              <Col>
                <Label>Sex</Label>
                <FormSelect
                  name="petGender"
                  value={postPetData.petGender}
                  onChange={handleInputChange}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="unknown">Unknown</option>
                </FormSelect>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <FormGroup>
                  <Label for="location">Location(Zipcode)</Label>
                  <Input
                    type="text"
                    id=""
                    name="petLocation"
                    placeholder="Zipcode"
                    value={postPetData.petLocation}
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
                    value={postPetData.petDate}
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
                  name="petPescription"
                  value={postPetData.petDescription}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Row>
          </Form>

          <button className="form-button" type="submit">
            Add Pet
          </button>
        </Container>
      )}
      {clickBack && <LostOrFound />}
      {response && <p>Response: {JSON.stringify(response)}</p>}
    </div>
  );
};

export default AddPet;
