import { useEffect, useState } from "react";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../creative-assets/logo.png";
import personFillIcon from "../../creative-assets/person-fill.svg";
import addPetIcon from "../../creative-assets/add-pet-icon.svg";
import "../pages/css/NavBar.css";

const NavBar = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector(".navbar");
      if (window.scrollY > 0 && location.pathname !== "/dashboard") {
        navBar.classList.add("sticky");
      } else {
        navBar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleLogout = () => {
    // Delete token from local storage
    localStorage.removeItem("token");

    // Navigate user to home page
    navigate("/");
  };

  const renderMenuItems = () => {
    if (isLoggedIn) {
      return (
        <>
          <Nav.Link
            as={Link}
            to="/"
            className="navbar-link"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className="navbar-link"
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className="navbar-link"
          >
            Contact
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard"
            className="navbar-link"
          >
            Dashboard
          </Nav.Link>
          <Dropdown
            align="end"
            show={showProfileMenu}
            onToggle={toggleProfileMenu}
          >
            <Dropdown.Toggle
              variant="outline-success"
              id="profile-dropdown"
              className="navbar-button"
              style={{
                backgroundColor: "#8464b6",
                color: "white",
                borderColor: "#8464b6",
              }}
            >
              <img
                src={personFillIcon}
                alt="profile"
                className="profile-icon"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to="/profile"
              >
                Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link
            as={Link}
            to="/"
            className="navbar-link"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className="navbar-link"
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className="navbar-link"
          >
            Contact
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/login"
            className="nav-link"
          >
            <button className="navbar-login-button">Get Started</button>
          </Nav.Link>
        </>
      );
    }
  };

  return (
    <Navbar
      expand="lg"
      className="navbar"
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
        >
          <img
            src={logo}
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            navbarScroll
          >
            {renderMenuItems()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
