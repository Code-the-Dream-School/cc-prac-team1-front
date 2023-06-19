
import {Nav, Navbar, Container, Button, Form} from 'react-bootstrap';



const NavBar = () =>{
    return(
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Profile</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};


export default NavBar;
