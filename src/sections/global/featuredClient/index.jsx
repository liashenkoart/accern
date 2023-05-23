import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../../../components/icon";
import LinkAdv from "../../../components/linkadv";
import Title from "../../../components/title";
import Swiper from 'react-id-swiper';

import 'swiper/swiper.scss';

import "./FeaturedClient.scss";

const FeaturedClient = ({ page, isVisible }) => {

  const [active, setActive] = useState(0);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) swiper.slideTo(active);
  }, [active]);

  useEffect(() => {
    if (swiper) swiper.on("slideChangeTransitionStart", onSwiperChange)

    return () => {
      if (swiper) swiper.off("slideChangeTransitionStart", onSwiperChange)
    }
  }, [swiper]);

  const onSwiperChange = () => {
    setActive(swiper.realIndex);
  }

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
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
  }

  const render = () => {
    switch (page.variant) {
      case "carousel":
        return <>
          {page.title && <Container>
            <Row className="mb-5">
              <Col>
                <Title page={page} />
              </Col>
            </Row>
          </Container>}
          <div className={`featured-client-inner ${page.isCoverInner ? "with-cover" : ""}`}>
            <Container>
              <Row className="mb-d-2">
                <Col md={6}>
                  <div className="featured-client-img">
                    <Swiper {...options} getSwiper={setSwiper}>
                      {page.clients.map((client, i) => (
                        <div key={`cfii-${i}`} className="featured-client-slide" style={{ backgroundImage: `url(../../assets/img/${client.img})` }}>
                          {client.logo && <div className="featured-client-slide-logo"><img src={`./assets/img/${client.logo}`} alt=""/></div>}
                        </div>
                      ))}
                    </Swiper>
                  </div>
                </Col>
                <Col md={6} className="featured-client-content with-carousel">
                  {page.clients.map((client, i) => (
                    <div className={`featured-client-content-item ${active == i ? "active" : ""}`} key={`cfi-${i}`}>
                      {client.label && <div className="text-label"><span>{client.label}</span></div>}
                      {client.title && <h2 className="mw-1000">{client.title}</h2>}
                      {client.button && <LinkAdv data={client.button} className="d-block mt-5" variant="link" />}
                    </div>
                  ))}
                  <div className="featured-client-changer">
                    <div>
                      {page.clients.map((client, i) => (
                        <div className={`featured-client-name ${active == i ? "active" : ""}`} key={`cfti-${i}`}>
                          <h4 className="mb-0">{client.name}</h4>
                          <p className="text-light-gray mb-0">{client.jobTitle}</p>
                        </div>
                      ))}
                    </div>
                    <div className="featured-client-changer-buttons">
                      <div onClick={goPrev}><Icon variant="arrow-left"/></div>
                      <div onClick={goNext}><Icon variant="arrow-right"/></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </>;

      default:
        return page.clients.map((client, i) => (
          <div key={`cfi-${i}`}>
            {page.title && <Container>
              <Row className="mb-5">
                <Col>
                  <Title page={page} />
                </Col>
              </Row>
            </Container>}
            <div className={`featured-client-inner ${page.isCoverInner ? "with-cover" : ""}`}>
              <Container>
                <Row className="mb-d-2">
                  <Col lg={5}>
                    <div className="featured-client-img"><img src={`../../assets/img/${client.img}`} alt="" /></div>
                  </Col>
                  <Col lg={7} className="featured-client-content">
                    <div>
                      {client.label && <div className="text-label"><span>{client.label}</span></div>}
                      {client.title && <h2 className="mw-1000">{client.title}</h2>}
                      {client.button && <LinkAdv data={client.button} className="d-block mt-5" variant="link" />}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        ))
    }
  }

  return (
    <div className={`featured-client sect-spacer ${isVisible ? "active" : ''} ${page.className ? page.className : ""}`}>
      {render()}
    </div>
  );
}

export default FeaturedClient;