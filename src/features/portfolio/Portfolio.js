import { Card, Col, Container, Row } from 'react-bootstrap';
import './Portfolio.css';

import { BLOGIMAGES } from '../../app/shared/blogImages';
import { MOBILEIMAGES } from '../../app/shared/mobileImages';

const Portfolio = () => {
  return (
    <>
      <Container id='portfolio' className='portfolio-container'>
        <div className='blog-site-container'>
          <Row className='justify-content-center'>
            {BLOGIMAGES.map((image) => (
              <Col xs={12} sm={6} md={4} key={image.id}>
                <Card className='b-card my-4'>
                  <Card.Img
                    src={image.image}
                    alt='blog site'
                    width={400}
                    height={200}
                  />
                </Card>
              </Col>
            ))}
            <div className='text-center my-4'>
              <a href='www.github.com/kongjudy' className='b-repo-link'>
                blog repo
              </a>
            </div>
          </Row>
        </div>
      </Container>
      <Container className='portfolio-container'>
        <div className='mobile-container'>
          <Row className='m-wrapper'>
            {MOBILEIMAGES.map((image) => (
              <Col xs={12} sm={6} md={4} key={image.id}>
                <Card className='b-card my-4'>
                  <Card.Img
                    src={image.image}
                    alt='blog site'
                    width={50}
                    height={800}
                  />
                </Card>
              </Col>
            ))}
            <div className='text-center my-4'>
              <a href='www.github.com/kongjudy' className='b-repo-link'>
                blog repo
              </a>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
