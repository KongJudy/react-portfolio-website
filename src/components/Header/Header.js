import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand='lg' className='bg-light'>
      <Container>
        <Navbar.Brand href='#home'>Judy Kong's Portfolio Website</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#intro' className='nav-links'>
              INTRO
            </Nav.Link>
            <Nav.Link href='#about' className='nav-links'>
              ABOUT
            </Nav.Link>
            <Nav.Link href='#certs' className='nav-links'>
              CERTIFICATES
            </Nav.Link>
            <Nav.Link href='#portfolio' className='nav-links'>
              PORTFOLIO
            </Nav.Link>
            <Nav.Link href='#contact' className='nav-links'>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
