import React from "react";
import { Container, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import FormSelect from "react-bootstrap/FormSelect";
import { useState } from "react";
import './css/LostAndFoundForm.css'
import LostOrFound from "./LostOrFoundChoice";

const AddPet = () => {
  const initialValues = {
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

   const [image, setImage] = useState(null);


  const [clickBack, setClickBack] = useState(false)

  const handleInputChange = (e) => {
    const { label, value } = e.target;
    setValues({
      ...value,
      [label]: value,
    });
  };

  const handleClickBack = () =>{
    setClickBack(true)
  }

  //   const handleSubmit = (e) => {
  //   e.preventDefault();
   
  // };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  return (
   <div>
    {!clickBack && (
    <Container>
       <div className="space-for-header"></div>
       <button onClick={handleClickBack}><i class="bi bi-arrow-left-square"></i></button>
       
      <Form>
        <Row>
          <Col>
          <FormGroup>
          <Label for="image">Upload Pet Image</Label>
          <Input
            type="file"
            id=""
            label="image"
            value={image}
            onChange={handleImageChange}
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
        Add Pet
      </button>
   
    </Container>)}
    {clickBack && <LostOrFound/>}
    </div>
  );
};

export default AddPet;
