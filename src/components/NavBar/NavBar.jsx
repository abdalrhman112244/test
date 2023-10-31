import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBarStyle.css'
import Button from 'react-bootstrap/Button';
const NavBar = () => {
  return (
    <Navbar expand="lg" className="NavBar">
      <Container className='bero'>
        <Navbar.Brand href="#home" className="text-white">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbarToggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-4">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#link" className="text-white">About</Nav.Link>
            <Nav.Link href="#link" className="text-white">Service</Nav.Link>
            <Nav.Link href="#link" className="text-white">Protofilo</Nav.Link>
            <Nav.Link href="#link" className="text-white">Team</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="text-white">Contact</Nav.Link>
            <Button variant="outline-info" className='btnNav'>Info</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar