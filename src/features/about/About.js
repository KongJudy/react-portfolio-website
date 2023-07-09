import { Container, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './About.css';
import { CERTS } from '../../app/shared/certs';

const About = () => {
  return (
    <Container id='about' className='about-container'>
      <Row>
        <div className='a-right flex'>
          <h1 className='a-title' id='about'>
            about me
          </h1>
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
      <Row>
        <div className='swiper-container'>
          <Swiper
            spaceBetween={2}
            slidesPerView={1}
            breakpoints={{
              576: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 3
              }
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='swiper-main'
          >
            {CERTS.map((certs) => (
              <SwiperSlide key={certs.id}>
                <div>
                  <div className='certs-image-container'>
                    <img src={certs.image} alt='certs' width={220} />
                  </div>
                  <div className='certs-name'>{certs.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Row>
    </Container>
  );
};

export default About;
