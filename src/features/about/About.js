import { Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container id='about' className='about-container'>
      <Row>
        <div className='a-right flex'>
          <h1 className='a-title'>about me</h1>
          <div className='a-aboutme py-4'>
            <p className='a-aboutme-para justify-content-center'>
              I grew up in Elkins Park, PA, which is a suburb of Philadelphia.
              Currently, I reside in Willow Grove, PA. Initially, I pursued a
              degree in Graphic Design but eventually made the decision to
              transition into the field of Baking as my profession. I completed
              my education at the Art Institute of Philadelphia, obtaining a
              degree in Baking and Pastry. After a few years of working at a
              bakehouse, I discovered coding as a new hobby. I made the decision
              to change careers and graduated from Nucamp Bootcamp in June 2023.
              Presently, I reside with my spouse and share my home with a
              dachshund named Jeenie.
            </p>
          </div>
          <div className='about-self-img'></div>
        </div>
      </Row>
    </Container>
  );
};

export default About;
