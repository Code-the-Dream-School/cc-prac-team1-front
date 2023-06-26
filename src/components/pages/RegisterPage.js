import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./css/RegisterPage.css";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5005/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
        }
      );

      // Handle successful registration
      setIsRegistered(true);
      console.log(response.data); // You can customize the handling of the response data
    } catch (error) {
      // Handle registration error
      setError("Error registering user");
      console.error(error.response.data); // You can customize the handling of the error
    }
  };

  return (
    <Container className="register-form-center-container">
      <Form
        onSubmit={handleSubmit}
        className="register-form"
      >
        <FormGroup>
          {isRegistered && (
            <p className="register-form-success">Successfully registered!</p>
          )}
          {error && <p className="register-form-error">{error}</p>}
          <p className="register-form-prompt">Please fill out the form below</p>
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
          <Label for="password">Password (must be at least 8 characters)</Label>
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
        <div className="register-form-center-button">
          <Button
            type="submit"
            className="register-form-button"
          >
            Register
          </Button>
        </div>
        <div className="register-form-prompt">
          <p>Already have an account?</p>
          <a
            href="/login"
            className="register-form-link "
          >
            Login
          </a>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterPage;
