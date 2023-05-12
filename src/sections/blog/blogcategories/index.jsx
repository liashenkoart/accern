import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCategory from "../../../components/blog/BlogCategory";
import { settings } from "../../../data/settings";
import Icon from "../../../components/icon";
import Swiper from 'react-id-swiper';
import { navigate } from "@reach/router";

import 'swiper/swiper.scss'

const BlogCategories = ({ isVisible, page }) => {

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
    slidesPerView: 4,
    spaceBetween: 30,
    setWrapperSize: true,
    loop: true,

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  }

  return (
    <div className={`blog-categories ${page.data.className ? page.data.className : ""} ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col className="mb-4 mt-4"><span className="text-label">{page.data.label}</span></Col>
        </Row>
        <Row>
          <Col>
            {page.tags &&
              <div className="blog-carousel">
                <div className="blog-carousel-inner">
                  <Swiper {...options} getSwiper={setSwiper}>
                    {page.tags.map((tag, i) => (
                      <BlogCategory key={`bci-${i}`} data={tag} onClick={() => navigate(`/category/${tag.slug}`)} />
                    ))}
                  </Swiper>
                </div>
                <div className="blog-carousel-nav" onClick={goNext}>
                  <Icon variant="arrow-right" />
                </div>
              </div>
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogCategories;