import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Swiper from 'react-id-swiper';
import { settings } from "../../../data/settings";
import Title from "../../../components/title";

import 'swiper/swiper.scss'

import "./SliderBlocks.scss"

const SliderBlocks = ({ page }) => {

  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  const [dragable1, setDragable1] = useState(false);
  const [dragable2, setDragable2] = useState(false);

  const options = {
    slidesPerView: 6,
    spaceBetween: 30,
    setWrapperSize: true,
    loop: true,
    freeMode: true, 
    speed: 12000,
    autoplay: {
      delay: 1,
    },

    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      1500: {
        slidesPerView: 6,
        spaceBetween: 40
      }
    }
  }

  const options2 = {
    slidesPerView: 6,
    spaceBetween: 30,
    setWrapperSize: true,
    loop: true,
    freeMode: true, 
    speed: 9000,
    autoplay: {
      delay: 1,
    },

    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1100: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      1500: {
        slidesPerView: 6,
        spaceBetween: 40
      }
    }
  }

  const renderBlock = (item, i) => {
    switch (page.variant) {
      case "case":
        return item.link ?
          <div key={`sb-${i}`} className={`case-block ${item.variant ? item.variant : "primary"}`}>
            <a href={item.link.link} target="_blank">
              {(item.logo || item.img) && <div className="simple-block-img"><img className={`${item.className ? item.className : "icon-carousel"}`} src={`../../assets/img/${item.logo || item.img}`} alt="" /></div>}
              {item.description && <p className="mb-0 text-small">{item.description}</p>}
              {item.label && <div className="text-medium text-dark"><span>{item.label}</span></div>}
              {item.by && <div className="case-block-label"><span>{`${settings.texts.by} ${item.by}`}</span></div>}
            </a>
          </div>
          :
          <div key={`sb-${i}`} className={`case-block ${item.variant ? item.variant : "primary"}`}>
            {(item.logo || item.img) && <div className="simple-block-img"><img className={`${item.className ? item.className : "icon-carousel"}`} src={`../../assets/img/${item.logo || item.img}`} alt="" /></div>}
            {item.description && <p className="mb-0 text-small">{item.description}</p>}
            {item.label && <div className="text-medium text-dark"><span>{item.label}</span></div>}
            {item.by && <div className="case-block-label"><span>{`${settings.texts.by} ${item.by}`}</span></div>}
          </div>
      default:
        return item.link ?
          <div key={`sb-${i}`} className="simple-block">
            <a href={item.link.link} target="_blank">
              {(item.logo || item.img) && <div className="simple-block-img"><img className={`${item.className ? item.className : "icon-carousel"}`} src={`../../assets/img/${item.logo || item.img}`} alt="" /></div>}
            </a>
          </div>
          :
          <div key={`sb-${i}`} className="simple-block">
            {(item.logo || item.img) && <div className="simple-block-img"><img className={`${item.className ? item.className : "icon-carousel"}`} src={`../../assets/img/${item.logo || item.img}`} alt="" /></div>}
          </div>
    }
  }

  return (
    <div className={`slider-blocks sect-spacer ${page.className ? page.className : ""}`}>
      <Container>
        <Row>
          <Col>
            <Title page={page} />
          </Col>
        </Row>
      </Container>
      {page.columns &&
        <div className={`slider-blocks-container ${dragable1 ? "draged" : ""}`} onMouseDown={()=>setDragable1(true)} onMouseUp={()=> setTimeout(()=>{setDragable1(false);swiper1.autoplay.start()}, 10000)}>
          <Swiper {...options} getSwiper={setSwiper1}>
            {page.columns.map((item, i) => (
              renderBlock(item, i)
            ))}
          </Swiper>
        </div>
      }
      {page.columns2 &&
        <div className={`slider-blocks-container pt-0 ${dragable2 ? "draged" : ""}`} onMouseDown={()=>setDragable2(true)} onMouseUp={()=> setTimeout(()=>{setDragable2(false);swiper2.autoplay.start()}, 10000)}>
          <Swiper {...options2} getSwiper={setSwiper2}>
            {page.columns2.map((item, i) => (
              renderBlock(item, i)
            ))}
          </Swiper>
        </div>
      }
    </div>
  );
}

export default SliderBlocks;