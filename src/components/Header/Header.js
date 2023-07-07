import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
  return (
    <Navbar sticky='top' expand='lg' className='bg-body-tertiary'>
      <Container className='header-container'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link className='links' href='#intro'>
              INTRO
            </Nav.Link>
            <Nav.Link className='links' href='#about'>
              ABOUT
            </Nav.Link>
            <Nav.Link className='links' href='#portfolio'>
              PORTFOLIO
            </Nav.Link>
            <Nav.Link className='links' href='#resume'>
              RESUME
            </Nav.Link>
            <Nav.Link className='links' href='#contact'>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
