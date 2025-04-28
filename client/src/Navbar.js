import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Navbar.css'; // still using the custom styles

function MyNavBar() {
  return (
    <Navbar expand="lg" className="shadow-sm custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="logo-text">
          GDD
        </Navbar.Brand>

        {/* Mobile toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Centered Navbar links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link href="/">Home</Nav.Link>

            {/* Dropdown for Case Studies */}
            <NavDropdown title="Case Studies" id="case-studies-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="/case-studies/project1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="/case-studies/project2">Project 2</NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown for Resources */}
            <NavDropdown title="Resources" id="resources-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="/resources/articles">Articles</NavDropdown.Item>
              <NavDropdown.Item href="/resources/videos">Videos</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>

          {/* Sign In / Sign Up button on far right */}
          <Button variant="outline-primary" href="/login" className="signin-button">
            Sign In / Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
