import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from 'react-id-swiper';
import Icon from "../../../components/icon";

import 'swiper/swiper.scss'

import "./SimpleCarousel.scss"

const SimpleCarousel = ({ page }) => {

  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const options = {
    slidesPerView: 5,
    spaceBetween: 30,
    setWrapperSize: true,
    loop: true,

    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1500: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  }

  return (
    <div className={`simple-carousel ${page.className ? page.className : ""}`}>
      <Container>
        {page.label &&
          <Row>
            <Col>
              <div className="text-label"><span>{page.label}</span></div>
            </Col>
            {page.columns.length > 5 &&
              <Col className="d-flex justify-content-end">
                <button className="btn-icon mb-1" onClick={goPrev}><Icon variant="arrow-left"/></button>
                <button className="btn-icon mb-1 ml-3" onClick={goNext}><Icon variant="arrow-right"/></button>
              </Col>
            }
          </Row>
        }
        <Row>
          <Col>
            <div className="simple-carousel-container">
              <Swiper {...options} getSwiper={setSwiper}>
                {page.columns.map((item, i) => (
                  item.link ?
                    <div key={`sb-${i}`} className="simple-block">
                      <a href={item.link.link} target="_blank">
                        {item.label && <div className="text-label"><span>{item.label}</span></div>}
                        {item.link.name && <div className="text-medium">{item.link.name}</div>}
                        {item.logo && <div className="simple-block-img"><img className={`${item.logoH ? "simple-block-img-absolute" : ""} ${item.className ? item.className : "icon-carousel"}`} src={`../../assets/img/${item.logo}`} alt="" />{item.logoH && <img className={`${item.className ? item.className : "icon-carousel"}`} src={`../../assets/img/${item.logoH}`} alt="" />}</div>}
                        {item.title && <h4 className="text-subtitle-strong">{item.title}</h4>}
                        {item.description && <p className="mb-0 text-small">{item.description}</p>}
                      </a>
                    </div>
                    :
                    <div key={`sb-${i}`} className="simple-block">
                      {item.label && <div className="text-label"><span>{item.label}</span></div>}
                      {item.logo && <div className="d-flex h-100 align-items-center justify-content-center"><img className={`${item.className ? item.className : "icon-carousel"}`} src={`../../assets/img/${item.logo}`} alt="" /></div>}
                      {item.title && <h4 className="text-subtitle-strong">{item.title}</h4>}
                      {item.description && <p className="mb-0 text-small">{item.description}</p>}
                    </div>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SimpleCarousel;