import React, { useState, useEffect } from "react";
import "./css/EditProfile.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const goToProfile = useNavigate();
  const [petInfo, setPetInfo] = useState({
    petName: "",
    petDate: "",
    petBreed: "",
    petColor: "",
    petGender: "",
    petLocation: "",
    petSituation: "",
  });
  const onInputChange = (e) => {
    setPetInfo({ ...petInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5005/api/v1/pet/${id}`, petInfo);
    goToProfile("/profile");
  };

  const loadInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/v1/pets/${id}`
      );
      const { pet } = response.data;
      setPetInfo({
        petName: pet.petName,
        petDate: pet.petDate,
        petBreed: pet.petBreed,
        petColor: pet.petColor,
        petGender: pet.petGender,
        petLocation: pet.petLocation,
        // .toString(),
        petSituation: pet.petSituation,
      });
    } catch (error) {
      console.log("Error fetching pet information", error);
    }
  };

  useEffect(() => {
    loadInfo();
  });

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

        <Form
          className="edit-pet-info-form"
          id="edit-pet-info-form"
          onSubmit={(e) => onSubmit(e)}
        >
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="petName">Pet Name</Label>
                <Input
                  type="text"
                  id="petName"
                  name="petName"
                  value={petInfo?.petName || ""}
                  onChange={(e) => onInputChange(e)}
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
                  value={petInfo?.petSituation || ""}
                  onChange={(e) => onInputChange(e)}
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
                  value={petInfo?.animalType || ""}
                  onChange={(e) => onInputChange(e)}
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
                  value={petInfo?.petBreed || ""}
                  onChange={(e) => onInputChange(e)}
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
                  value={petInfo?.petColor || ""}
                  onChange={(e) => onInputChange(e)}
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
                  value={petInfo?.petGender || ""}
                  onChange={(e) => onInputChange(e)}
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
                  // maxLength="5"
                  value={petInfo?.petLocation || ""}
                  onChange={(e) => onInputChange(e)}
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
                  value={petInfo?.petDate || ""}
                  onChange={(e) => onInputChange(e)}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            type="submit"
            className="edit-profile-update"
          >
            Update
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default EditProfile;
