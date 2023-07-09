import { Container, Col, Row } from 'react-bootstrap';
import selfPhoto from '../../app/assets/images/self/Self01.png';
import './Intro.css';

const Intro = () => {
  return (
    <Container id='intro' className='intro-container'>
      <Row className='intro-wrapper'>
        <Col lg={6} sm={12}>
          <div className='left-intro-container'>
            <h2 className='i-intro'>Hello, my name is</h2>
            <h1 className='i-name mt-4'>Judy Kong</h1>
            <div className='i-title mt-4'>
              <div className='i-title-wrapper'>
                <div className='i-title-item flex'>Software Engineer</div>
                <div className='i-title-item flex'>Baker</div>
                <div className='i-title-item flex'>Life Learner</div>
                <div className='i-title-item flex'>
                  Mother to a dachshund 🌭
                </div>
              </div>
            </div>
            <div className='i-desc'>
              <p className='i-desc-item'>Nucamp online bootcamp graduate</p>
              <p className='i-desc-item'>Certificate of completion for:</p>
              <p className='i-desc-item'>
                Full Stack Web and Mobile Development - June 2023
              </p>
              <p className='i-desc-item'>
                Backend, SQL and DevOps with Python Bootcamp - Nov 2022
              </p>
              <p className='i-desc-item'>
                Web Development Fundamentals Bootcamp - July 2022
              </p>
            </div>
          </div>
        </Col>
        <Col
          lg={6}
          sm={12}
          className='d-flex justify-content-center align-items-center'
        >
          <div className='self-container'>
            <div className='circle-border'>
              <img src={selfPhoto} alt='self' className='self-img' />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
