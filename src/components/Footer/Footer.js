import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container>
        <Row
          style={{
            textAlign: 'center',
            placeContent: 'center',
            justifyContent: 'center'
          }}
        >
          <a
            role='button'
            className='btn btn-social-icon btn-md'
            href='tel:+12679180313'
          >
            <i className='fa fa-phone' />
          </a>
          <a
            role='button'
            className='btn btn-social-icon btn-md'
            href='mailto:judy.kong817@gmail.com'
          >
            <i className='fa fa-envelope-o' />
          </a>
        </Row>
        <Row className='footer-site-info'>
          <Col>
            Copyright © 2023 connect | Privacy | Terms of Use | Security
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
