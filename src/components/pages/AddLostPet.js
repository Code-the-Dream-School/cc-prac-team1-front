import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import FormSelect from "react-bootstrap/FormSelect";
import { useState } from "react";

const AddLostPet = () => {
  const initialValues = {
    petName: "",
    animalType: "",
    catBreed: "",
    dogBreed: "",
    color: "",
    sex: "",
    location: "",
    dateLost: "",
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
        <h2>Lost Pet</h2>
        <FormGroup>
          <Label for="pet-name">Pet Name</Label>
          <Input
            type="text"
            id=""
            label="petName"
            placeholder="Enter pet's name"
            value={values.petName}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormSelect>
          <option>Animal Type</option>
          <option value={values.animalType}>Dog</option>
          <option value={values.animalType}>Cat</option>
          <option value={values.animalType}>Other</option>
        </FormSelect>
        <br></br>
   <FormSelect>
          <option>Cat Breed</option>
          <option value={values.catBreed}>1</option>
          <option value={values.catBreed}>2</option>
          <option value={values.catBreed}>3</option>
        </FormSelect>
               <br></br>
   <FormSelect>
          <option>Dog Breed</option>
          <option value={values.dogBreed}>1</option>
          <option value={values.dogBreed}>2</option>
          <option value={values.dogBreed}>3</option>
        </FormSelect>
        <br></br>
           <FormSelect>
          <option>Color</option>
          <option value={values.color}>1</option>
          <option value={values.color}>2</option>
          <option value={values.color}>3</option>
        </FormSelect>
        <br></br>
          <FormSelect>
          <option>Sex</option>
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
      <Button type="submit"
      color="FD678D">Add Lost Pet</Button>
    </Container>
  );
};

export default AddLostPet;
