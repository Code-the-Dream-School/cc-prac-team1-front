
import {Nav, Navbar, Container, Button, Form} from 'react-bootstrap';
import '../pages/css/NavBar.css'



const NavBar = () =>{
    return(
     <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='navbar-link' href="/">Home</Nav.Link>
            <Nav.Link className='navbar-link' href="/about">About</Nav.Link>
            <Nav.Link className='navbar-link' href="/contact">Contact</Nav.Link>
            <Nav.Link  className='navbar-link' href="/dashboard">Dashboard</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button href='/profile' variant="outline-success" className='navbar-button'>Profile</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};


export default NavBar;
