import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./css/LoginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5005/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      // Handle successful login
      console.log(response.data);
      // Redirect to the map page
      navigate("/map");
    } catch (error) {
      // Handle registration error
      setError("Invalid credentials. Try again.");
      console.error(error.response.data);
    }
  };

  return (
    <Container className="login-form-center-container">
      <Form
        onSubmit={handleSubmit}
        className="login-form"
      >
        <FormGroup>
          {error && <p className="login-form-error">{error}</p>}
          <p className="login-form-prompt">
            Please login with your credentials
          </p>
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
        <div className="login-form-center-button">
          <Button
            type="submit"
            className="login-form-button"
          >
            Login
          </Button>
        </div>
        <div className="login-form-prompt">
          <p>Don't have an account?</p>
          <a
            href="/register"
            className="login-form-link"
          >
            Register
          </a>
        </div>
      </Form>
    </Container>
  );
};

export default LoginPage;
