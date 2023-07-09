import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { CERTS } from '../../app/shared/certs';
import './Certs.css';

const Certs = () => {
  return (
    <Container id='certs'>
      <Row>
        {CERTS.map((cert) => (
          <Col xs={12} sm={6} md={4} key={cert.id}>
            <Card className='certs-card ms-auto'>
              <Card.Img variant='top' src={cert.image} alt={cert.name} />
              <Card.Body>
                <Card.Title>{cert.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certs;
