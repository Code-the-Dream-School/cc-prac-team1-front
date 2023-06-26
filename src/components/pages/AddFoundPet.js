import React from "react";
import { Container, Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import FormSelect from "react-bootstrap/FormSelect";
import { useState } from "react";
import './css/LostAndFoundForm.css'

const AddFoundPet = () => {
  const initialValues = {
    image: "",
    petName: "",
    animalType: "",
    breed: "",
    color: "",
    sex: "",
    location: "",
    dateFound: "",
    description: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { label, value } = e.target;
    setValues({
      ...value,
      [label]: value,
    });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <Container>
      <Form>
        <h2>Found Pet</h2>
        <Row>
          <Col>
          <FormGroup>
          <Label for="image">Upload Pet Image</Label>
          <Input
            type="file"
            id=""
            label="image"
            value={values.image}
            onChange={handleInputChange}
          />
        </FormGroup>
        </Col>
        <Col>
        <FormGroup >
          <Label for="petName">Pet Name</Label>
          <Input
            type="text"
            id=""
            label="petName"
            placeholder="Enter pet's name"
            value={values.petName}
            onChange={handleInputChange}
          />
        </FormGroup>
        </Col>
        </Row>
<Row>
  <Col>
        <Label>Animal Type</Label>
        <FormSelect>
          <option value={values.animalType}>Dog</option>
          <option value={values.animalType}>Cat</option>
          <option value={values.animalType}>Other</option>
        </FormSelect>
        </Col>
        <br></br>
        <Col>
        <FormGroup>
          <Label for="breed">Breed</Label>
          <Input
            type="text"
            id=""
            label="breed"
            placeholder="Enter breed if known"
            value={values.breed}
            onChange={handleInputChange}
          />
        </FormGroup>
        </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
          <FormGroup>
          <Label for="petName">Color</Label>
          <Input
            type="text"
            id=""
            label="color"
            placeholder="Color or colors of the pet..."
            value={values.color}
            onChange={handleInputChange}
            
          />
        </FormGroup>
        </Col>


        <br></br>
        <Col>
        <Label>Sex</Label>
        <FormSelect>
          <option value={values.sex}>Female</option>
          <option value={values.sex}>Male</option>
          <option value={values.sex}>Unknown</option>
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
            label="location"
            placeholder="Zipcode"
            value={values.location}
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
            label="dateLost"
            value={values.dateLost}
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
            label="description"
            value={values.description}
            onChange={handleInputChange}
           
          />
        </FormGroup>
       
        </Row>
      </Form>
      
      <button className="form-button" type="submit" >
        Add Found Pet
      </button>
   
    </Container>
  );
};

export default AddFoundPet;
