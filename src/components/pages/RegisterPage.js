import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./css/RegisterPage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform Register request with email and password
    // Add logic here
  };

  return (
    <Container className="center-container">
      <Form
        onSubmit={handleSubmit}
        className="register-form"
      >
        <FormGroup>
          <p>Please fill out the form below</p>
          <Label for="name">Name</Label>
          <Input
            type="name"
            id="name"
            placeholder="First name"
            value={name}
            onChange={handleNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Provide an email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Provide a password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input
            type="phone"
            id="phone"
            placeholder="(xxx) xxx-xxxx"
            value={phone}
            onChange={handlePhoneChange}
          />
        </FormGroup>
        <div className="center-button">
          <Button
            type="submit"
            color="primary"
          >
            Register
          </Button>
        </div>
        <div className="prompt">
          <p>Already have an account?</p>
          <a href="/login">Login</a>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterPage;
