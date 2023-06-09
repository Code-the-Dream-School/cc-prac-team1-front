import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./css/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login request with email and password
    // Add logic here
  };

  return (
    <Container className="center-container">
      <Form
        onSubmit={handleSubmit}
        className="login-form"
      >
        <FormGroup>
          <p>Please login with your credentials</p>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <div className="center-button">
          <Button
            type="submit"
            color="primary"
          >
            Login
          </Button>
        </div>
        <p className="prompt">Don't have an account?</p>
      </Form>
    </Container>
  );
};

export default LoginPage;
