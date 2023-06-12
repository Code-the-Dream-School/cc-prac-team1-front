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
// import "./css/EditProfile.css";

function EditProfile() {
  return (
    <>
      <img src="..." className="" alt="..." />

      <Container>
        <h3>Pet Information</h3>

        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="petName" className="form-label">
                  Pet Name
                </Label>
                <Input type="text" className="form-control" id="petName" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="status" className="form-label">
                  Lost or found?
                </Label>
                <Input type="text" className="form-control" id="status" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="animalType" className="form-label">
                  Animal type
                </Label>
                <Input type="" className="form-control" id="animalType" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="breed" className="form-label">
                  Breed
                </Label>
                <Input type="text" className="form-control" id="breed" />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="color" className="form-label">
                  Color
                </Label>
                <Input type="text" className="form-control" id="color" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="gender" className="form-label">
                  Gender
                </Label>
                <Input type="text" className="form-control" id="gender" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="location" className="form-label">
                  Location (Zip Code)
                </Label>
                <Input type="text" className="form-control" id="location" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="dateFound" className="form-label">
                  Date found
                </Label>
                <Input type="date" className="form-control" id="dateFound" />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <h3>Contact Information</h3>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="userEmail">Email</Label>
                <Input type="email" name="email" id="userEmail" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="userPhoneNumber" className="form-label">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  className="form-control"
                  id="userPhoneNumber"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Update</Button>
        </Form>
      </Container>
    </>
  );
}

export default EditProfile;
