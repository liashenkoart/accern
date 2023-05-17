import React, { useState, useEffect, useContext, useRef, useCallback } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import LinkAdv from "../../../components/linkadv";
import { Context } from "../../../context/context";
import Swiper from 'react-id-swiper';
import Icon from "../../../components/icon";

import "./ServicesViewer.scss";
import { config } from "react-transition-group";

const ServicesViewer = ({ isVisible, page }) => {

  const [step, setStep] = useState(0);
  const { scrollB, dispatchLayout } = useContext(Context);
  const [isDisabledScroll, setIsDisabledScroll] = useState(false);
  const [isDetectPause, setIsDetectPause] = useState(false);
  const [isTouchStart, setIsTouchStart] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const preContainer = useRef();
  const container = useRef();
  const scrolsP = useRef(0);
  const scrolsN = useRef(0);
  const stepRef = useRef(0);
  const [swiper, setSwiper] = useState(null);
  const config = { scrolsToNextP: 1000, scrolsToNextN: -1000, detectDelay: 3000 }

  const options = {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
  }

  useEffect(() => {
    if (window.innerWidth < 1100) setIsDetectPause(true);
    dispatchLayout({ type: "SET_LAYOUT", data: { isSelectFocus: true } })
    setTimeout(() => {
      setIsMounted(true);
      dispatchLayout({ type: "SET_LAYOUT", data: { isSelectFocus: false } })
    }, 1000)
  }, [])

  useEffect(() => {
    if (swiper) swiper.on("slideChangeTransitionStart", onSwiperChange)

    return () => {
      if (swiper) swiper.off("slideChangeTransitionStart", onSwiperChange)
    }
  }, [swiper])

  useEffect(() => {
    if (swiper) swiper.slideTo(step);
  }, [step])

  useEffect(() => {
    document.addEventListener('wheel', onWheel);

    return () => {
      document.removeEventListener('wheel', onWheel);
    }
  }, [isDisabledScroll, isDetectPause])

  useEffect(() => {
    if (scrollB) scrollB.scrollbar.addListener(onScroll);

    return () => {
      scrollB.scrollbar.removeListener(onScroll)
    }
  }, [scrollB, isDetectPause])

  useEffect(() => {
    if (isDisabledScroll) {
      scrollB.scrollbar.setMomentum(0, 0);
      scrollB.scrollbar.scrollTo(0, scrollB.scrollbar.offset.y + container.current.getBoundingClientRect().top, 1000);
      dispatchLayout({ type: "SET_LAYOUT", data: { isSelectFocus: true } })
    }
  }, [isDisabledScroll]);

  const onSwiperChange = () => {
    setStep(swiper.realIndex);
  }

  const onScroll = () => {
    const preContainerPosition = preContainer.current.getBoundingClientRect().top;
    const containerBounding = container.current.getBoundingClientRect();

    if (preContainerPosition < (containerBounding.height / 2) && !isDetectPause && containerBounding.top > (-1 * containerBounding.height / 2)) {
      if (!isDisabledScroll) {
        //setIsDisabledScroll(true);
      }
    }
  }

  const onWheel = (e) => {
    if (isDisabledScroll) {
      if (e.deltaY > 0) {
        if (scrolsP.current > config.scrolsToNextP) {
          if (stepRef.current != page.columns.length - 1) {
            stepRef.current = stepRef.current < page.columns.length - 1 ? stepRef.current + 1 : stepRef.current
            setStep(stepRef.current);
          } else {
            setIsDetectPause(true);
            setIsDisabledScroll(false);
            setTimeout(() => {
              setIsDetectPause(false);
            }, config.detectDelay)
            dispatchLayout({ type: "SET_LAYOUT", data: { isSelectFocus: false } })
          }
          scrolsP.current = 0;
          scrolsN.current = 0;
        } else {
          scrolsP.current = scrolsP.current + (e.deltaY > 30 ? e.deltaY : 150);
        }
      } else {
        if (scrolsN.current < config.scrolsToNextN) {
          if (stepRef.current != 0) {
            stepRef.current = stepRef.current > 0 ? stepRef.current - 1 : stepRef.current
            setStep(stepRef.current);
          } else {
            setIsDetectPause(true);
            setIsDisabledScroll(false);
            setTimeout(() => {
              setIsDetectPause(false);
            }, 5000)
            dispatchLayout({ type: "SET_LAYOUT", data: { isSelectFocus: false } })
          }
          scrolsN.current = 0;
          scrolsP.current = 0;
        } else {
          scrolsN.current = scrolsN.current + (e.deltaY < -30 ? e.deltaY : -150);
        }
      }
    }
  }

  const enableScroll = () => {
    dispatchLayout({ type: "SET_LAYOUT", data: { isSelectFocus: false } })
  }

  const render = () => {
    switch (page.variant) {
      case "columns":
        return <div className={`${page.variant ? page.variant : ""}`}>
          <div className="services-viewer-slider-bg">
            <Swiper {...options} getSwiper={setSwiper}>
              {page.columns && page.columns.map((column, i) => (
                <div className={`services-viewer-slider-img ${column.video ? "video" : ""}`} key={`im-${i}`}>
                  {column.img && <img src={`./assets/img/${column.img}`} alt="" />}
                  {column.video && <video autoPlay={true} muted={true} loop={true}>
                    <source src={`../../assets/img/${column.video}`} type="video/mp4" />
                  </video>}
                </div>
              ))}
            </Swiper>
          </div>
          <Container className="services-viewer-slider-inner">
            <Row className="h-100">
              <Col md={6}>
                <div className="services-viewer-slider-justify">
                  <div>
                    <div className="services-viewer-slider-num">0{step + 1}</div>
                    <div className="services-viewer-content">
                      {page.columns && page.columns.map((column, i) => (
                        <div className={`services-viewer-content-inner ${i == step ? "active" : ""}`} key={`ic-${i}`}>
                          <div className="services-viewer-slider-title">{column.title}</div>
                          <div className="services-viewer-slider-subtitle">{column.subTitle}</div>
                          <div className="services-viewer-slider-description">{column.description}</div>
                          {column.icons && <div className="services-viewer-slider-icons">{column.icons.map((icon, i) => (
                            icon.img ? <img key={`fsi-${i}`} src={`/assets/img/${icon.img}`} alt="" /> : <div key={`fsi-${i}`} className="services-viewer-slider-icons-count">{icon.count}</div>
                          ))}</div>}
                          {column.bars && <div className="services-viewer-slider-bars">{column.bars.map((bar, z) => (
                            <div key={`pgi-${z}`}><span>{bar.name}</span><div><ProgressBar className={`${i == step ? "active" : ""}`} now={bar.perc} /><span>{bar.perc}%</span></div></div>
                          ))}</div>}
                          {column.blocks && <div className="services-viewer-slider-blocks">{column.blocks.map((block, i) => (
                            <div key={`sfb-${i}`}>
                              <div><img src={`/assets/img/${block.img}`} alt="" /></div>
                              <div>
                                <h4>{block.title}</h4>
                                <p>{block.description}</p>
                              </div>
                            </div>
                          ))}</div>}
                          <div className="services-viewer-slider-list">
                            {column.list && column.list.map((item, i) => (
                              <div key={`si-${i}`} className="services-viewer-slider-item"><Icon variant="allow" />{item.name}</div>
                            ))}
                          </div>
                          <div className="services-viewer-slider-button" onClick={enableScroll}><LinkAdv data={column.button} /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="services-viewer-slider-changer">
                      {page.columns && page.columns.map((column, i) => (
                        <div key={`si-${i}`} className={`${i == step ? "active" : ""}`} onClick={() => { setStep(i); stepRef.current = i; }}>
                          <div className="services-viewer-changer-label">0{i + 1}</div>
                          <div className="services-viewer-changer-title">{column.title}</div>
                          <div className="services-viewer-changer-description">{column.label}</div>
                          <div className="services-viewer-changer-button" onClick={enableScroll}><LinkAdv data={column.button} /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      default:
        return <div className="h-100">
          <div className="services-viewer-slider-bg">
            <Swiper {...options} getSwiper={setSwiper}>
              {page.columns && page.columns.map((column, i) => (
                <div className="services-viewer-slider-img" key={`im-${i}`}>
                  {column.img && <img src={`./assets/img/${column.img}`} alt="" />}
                  {column.video && <video autoPlay={true} muted={true} loop={true}>
                    <source src={`../../assets/img/${column.video}`} type="video/mp4" />
                  </video>}
                </div>
              ))}
            </Swiper>
          </div>
          <Container className="services-viewer-slider-inner">
            <Row>
              <Col md={6}>
                <div className="services-viewer-slider-num">0{step + 1}</div>
                <div className="services-viewer-content">
                  {page.columns && page.columns.map((column, i) => (
                    <div className={`services-viewer-content-inner ${i == step ? "active" : ""}`} key={`ic-${i}`}>
                      <div className="services-viewer-slider-title">{column.title}</div>
                      <div className="services-viewer-slider-subtitle">{column.subTitle}</div>
                      <div className="services-viewer-slider-description">{column.description}</div>
                      {column.icons && <div className="services-viewer-slider-icons">{column.icons.map((icon, i) => (
                        icon.img ? <img key={`fsi-${i}`} src={`/assets/img/${icon.img}`} alt="" /> : <div key={`fsi-${i}`} className="services-viewer-slider-icons-count">{icon.count}</div>
                      ))}</div>}
                      {column.bars && <div className="services-viewer-slider-bars">{column.bars.map((bar, z) => (
                        <div key={`pgi-${z}`}><span>{bar.name}</span><div><ProgressBar className={`${i == step ? "active" : ""}`} now={bar.perc} /><span>{bar.perc}%</span></div></div>
                      ))}</div>}
                      {column.blocks && <div className="services-viewer-slider-blocks">{column.blocks.map((block, i) => (
                        <div key={`sfb-${i}`}>
                          <div><img src={`/assets/img/${block.img}`} alt="" /></div>
                          <div>
                            <h4>{block.title}</h4>
                            <p>{block.description}</p>
                          </div>
                        </div>
                      ))}</div>}
                      <div className="services-viewer-slider-list">
                        {column.list && column.list.map((item, i) => (
                          <div key={`si-${i}`} className="services-viewer-slider-item"><Icon variant="allow" />{item.name}</div>
                        ))}
                      </div>
                      <div className="services-viewer-slider-button" onClick={enableScroll}><LinkAdv data={column.button} /></div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="services-viewer-slider-changer">
                  {page.columns && page.columns.map((column, i) => (
                    <div key={`si-${i}`} className={`${i == step ? "active" : ""}`} onClick={() => { setStep(i); stepRef.current = i; }}>
                      <div className="services-viewer-changer-label">0{i + 1}</div>
                      <div className="services-viewer-changer-title">{column.title}</div>
                      <div className="services-viewer-changer-description">{column.label}</div>
                      <div className="services-viewer-changer-button" onClick={enableScroll}><LinkAdv data={column.button} /></div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    }
  }

  return (
    <div ref={preContainer} className={`services-viewer ${page.className ? page.className : ""} sect-spacer ${isVisible ? "active" : ''}`}>
      {isMounted && <>
        <Container>
          <Row>
            <Col>
              {page.label && <div className="text-label"><span>{page.label}</span></div>}
              {page.title && <h2 dangerouslySetInnerHTML={{ __html: page.title }} className={`${page.titleCL ? page.titleCL : "mw-550"}`}></h2>}
              {page.description && <p className={`mt-4 ${page.descrCL ? page.descrCL : "mw-550"}  text-medium`}>{page.description}</p>}
            </Col>
          </Row>
        </Container>
        <div ref={container} className={`services-viewer-slider s${step + 1} bg-dark sect-spacer`}>
          {render()}
        </div>
      </>
      }
    </div>
  );
}

export default ServicesViewer;