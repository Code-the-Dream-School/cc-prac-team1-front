import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Row, Col } from "reactstrap";
import "./css/AboutPage.css";
import petImage from "../../creative-assets/pet-image.png";
import footerImg from "../../creative-assets/footer-logo.png";

function AboutPage() {
  const goToLogin = useNavigate();
  const goToContact = useNavigate();
  return (
    <>
      <Row className="first-row">
        <h1>About Pet Watch </h1>
        <p>Bring Lost Pets Back Home, One Paw at a Time</p>
      </Row>
      <Row className="second-row">
        <h2 className="purp-header">Our Mission</h2>
        <p>
          At Pet Watch, our mission is simple yet profound: to reunite lost pets
          with their worried families. We understand the deep bond between
          humans and their four-legged companions, and the heartache that ensues
          when a pet goes missing. That's why we've created a platform that
          harnesses the power of community, technology, and compassion to
          increase the chances of finding lost pets and bringing them back home
          where they belong.
        </p>
      </Row>
      <Row className="third-row">
        <Col md={6}>
          <h2 className="purp-header">A Community United</h2>
          <p>
            Pet Watch is more than just an app; it's a vibrant community of pet
            owners, animal lovers, and volunteers who share a common goal—to
            make a difference in the lives of pets and their families. By coming
            together, we form a network of support, helping one another during
            the distressing times when a pet is lost. Our community members
            offer encouragement, share valuable insights, and spread the word
            about missing pets, amplifying the search efforts and maximizing the
            chances of a joyful reunion.
          </p>
          <Button
            className="first-about-button"
            onClick={() => goToLogin("/login")}
          >
            {" "}
            Get Started
          </Button>
        </Col>
        <Col md={6}>
          <img src={petImage} alt="cat and dog" width={600} height={500} />
        </Col>
      </Row>
      <br />
      <Row className="fourth-row">
        <Col md={6}>
          <img
            src="https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Pit Bull Terrier"
            width={700}
            height={500}
          />
        </Col>
        <Col md={6}>
          <h2>Powerful Tools for Pet Owners </h2>
          <p>
            We believe that every pet owner deserves the best resources and
            tools to aid in the search for their lost companion. Pet Watch
            provides an intuitive platform that allows pet owners to create
            detailed listings, including essential information, photos, and
            contact details. By leveraging technology, we make the process
            easier, faster, and more efficient, ensuring that lost pets are
            found as soon as possible.
          </p>
        </Col>
      </Row>
      <Row className="fifth-row">
        <h2 className="purp-header">Making a Difference Together</h2>
        <p>
          Pet Watch isn't just for pet owners; it's for anyone who wants to make
          a positive impact in the lives of animals and their human families.
          Whether you're a volunteer, an animal shelter, or a concerned
          neighbor, your involvement can play a vital role in reuniting lost
          pets. By sharing posts, spreading awareness through social media, and
          keeping an eye out for missing pets in your area, you become a
          valuable part of our united efforts. Together, we can bring comfort,
          joy, and relief to those who are anxiously awaiting the return of
          their beloved companions.
        </p>
        <Button
          className="second-about-button"
          onClick={() => goToContact("/contact")}
        >
          Get in Touch
        </Button>
      </Row>
      <Row className="sixth-row">
        <h2>Join the Pet Watch Community</h2>
        <p>
          We invite you to become a part of the Pet Watch community and help us
          create countless happy reunions. Whether you're a pet owner in search
          of your lost fur baby or someone eager to lend a hand, our platform
          offers the resources and support you need. Together, let's harness the
          power of compassion and technology to ensure that no pet remains lost
          for long.
        </p>
        <Button
          className="third-about-button"
          onClick={() => goToLogin("/login")}
        >
          Get Started
        </Button>
      </Row>
      <Row className="last-row">
        <img src={footerImg} alt="cat and dog" />
        <div>
          <span className="copyright"> © 2023 </span>
          <span className="network-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="bi bi-facebook"
            ></a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="bi bi-instagram"
            ></a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den"
              target="_blank"
              rel="noreferrer"
              className="bi bi-twitter"
            ></a>
          </span>
          <span className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </Row>
    </>
  );
}

export default AboutPage;
