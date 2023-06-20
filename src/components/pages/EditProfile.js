import React from "react";
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
import "./css/EditProfile.css";

function EditProfile() {
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
        <h3 className="pet-info-h3">Pet Information</h3>

        <Form className="edit-pet-info-form">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="petName">Pet Name</Label>
                <Input type="text" id="petName" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="status">Lost or found?</Label>
                <Input type="text" id="status" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="animalType">Animal type</Label>
                <Input type="text" id="animalType" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="breed">Breed</Label>
                <Input type="text" id="breed" />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="color">Color</Label>
                <Input type="text" id="color" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="gender">Gender</Label>
                <Input type="text" id="gender" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="location">Location (Zip Code)</Label>
                <Input type="text" id="location" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="dateFound">Date found</Label>
                <Input type="date" id="dateFound" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <h3 className="contact-info-h3">Contact Information</h3>
        <Form className="edit-contact-info-form">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="userEmail">Email</Label>
                <Input type="email" name="email" id="userEmail" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="userPhoneNumber">Phone Number</Label>
                <Input type="tel" id="userPhoneNumber" />
              </FormGroup>
            </Col>
          </Row>
          <Button className="edit-profile-update">Update</Button>
        </Form>
      </Container>
    </>
  );
}

export default EditProfile;
