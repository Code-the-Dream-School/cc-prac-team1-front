import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import FormSelect from "react-bootstrap/FormSelect";
import { useState } from "react";

const AddFoundPet = () => {
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

  const handleInputChange = (e) => {
    const { label, value } = e.target;
    setValues({
      ...value,
      [label]: value,
    });
  };

  return (
    <Container>
      <Form>
        <h2>Found Pet</h2>
        <FormGroup>
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

        <Label>Animal Type</Label>
        <FormSelect>
          <option value={values.animalType}>Dog</option>
          <option value={values.animalType}>Cat</option>
          <option value={values.animalType}>Other</option>
        </FormSelect>
        <br></br>
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
        <br></br>
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


        <br></br>
        <Label>Sex</Label>
        <FormSelect>
          <option value={values.sex}>Female</option>
          <option value={values.sex}>Male</option>
          <option value={values.sex}>Unknown</option>
        </FormSelect>
        <br></br>
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
        <br></br>
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
      </Form>
      <Button type="submit" color="FD678D">
        Add Found Pet
      </Button>
    </Container>
  );
};

export default AddFoundPet;
