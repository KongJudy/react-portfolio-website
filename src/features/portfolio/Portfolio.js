import { Col } from 'react-bootstrap';
import { Container, Row } from 'reactstrap';
import './Portfolio.css';

import { BLOGIMAGES } from '../../app/shared/blogImages';
import { MOBILEIMAGES } from '../../app/shared/mobileImages';

const Portfolio = () => {
  return (
    <>
      <Container
        id='portfolio'
        className='portfolio-container d-flex justify-content-center align-items-center'
      >
        <div className='blog-site-container'>
          <Row className='blog-image-wrapper'>
            {BLOGIMAGES.map((image) => (
              <Col key={image.id}>
                <div>
                  <div className='blog-images-container'>
                    <img
                      src={image.image}
                      alt='certs'
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </Col>
            ))}
            <div>
              <a href='www.github.com/kongjudy'>github</a>
            </div>
          </Row>
        </div>
      </Container>
      <Container className='portfolio-container d-flex justify-content-center align-items-center'>
        <div className='mobile-container'>
          <Row className='mobile-wrapper'>
            {MOBILEIMAGES.map((image) => (
              <Col key={image.id}>
                <div>
                  <div className='mobile-images-container'>
                    <img src={image.image} alt='certs' width={200} />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
