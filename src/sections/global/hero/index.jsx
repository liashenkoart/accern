import React, { useState, useContext } from "react";
import { Link, navigate } from "@reach/router";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Typed from "react-typed";
import { Context } from "../../../context/context";
import { OpenModal } from "../../../services/modalsManager";
import Icon from "../../../components/icon";
import LinkAdv from "../../../components/linkadv";

import "./Hero.scss"

const Hero = ({ isVisible, page }) => {

  const { dispatchModals, scrollB, userMail, dispatchUserMail } = useContext(Context);

  const onSubmit = (e) => {
    e.preventDefault();
    OpenModal("request", dispatchModals);
  }

  const scrollTo = (elmId) => {
    const position = document.querySelector(`#${elmId}`).getBoundingClientRect().top;
    scrollB.scrollbar.scrollTo(0, position, 1000);
  }

  const renderButton = () => {
    return <div className="text-center text-md-left mt-5">
      <LinkAdv
        data={page.button}
        variant={page.button.variant ? page.button.variant : "outline-primary"}
        onClick={() => page.button.scrollTo ? scrollTo(page.button.scrollTo) : page.button.modal ? OpenModal(page.button.modal, dispatchModals, page.button.data) : page.button.link.indexOf('@') != -1 ? location.href = page.button.link : navigate(page.button.link)}
      />
    </div>
  }

  const renderHero = () => {
    switch (page.variant) {
      case "simple-video":
        return <div className={`hero simple-video ${page.className ? page.className : ""} ${isVisible ? "active" : ''}`}>
          <Container>
            <Row className="h-100">
              <Col lg={8} className="hero-inner">
                <div>
                  {page.label && <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>}
                  {page.title && <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>}
                  {page.description &&
                    <p className={`text-medium mb-4 mb-lg-5 text-center text-md-left ${page.descriptionCL ? page.descriptionCL : "mw-700"}`}>{page.description}</p>
                  }
                  {page.level &&
                    <div className="hero-block-duration">
                      <span className="d-flex align-items-center mr-3"><Icon className="mr-2" variant={page.level.toLowerCase()} />{page.level}</span>
                      <span className="d-flex align-items-center"><Icon className="mr-2" variant="clock" />{page.duration}</span>
                    </div>
                  }
                  {page.button &&
                    renderButton()
                  }
                </div>
                {(page.additional || page.brands) &&
                  <div className="hero-bottom-section">
                    <div className="text-center text-lg-left mt-5 mt-lg-0 text-medium">{page.additional && <span dangerouslySetInnerHTML={{ __html: page.additional }}></span>}</div>
                    <div className="blocks mobile-wrap mt-5">
                      {page.brands.map((brand, i) => (
                        <div key={`bc-${i}`} className="block d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                          {brand.link ? <Link to={brand.link} className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></Link> : <div className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                }
              </Col>
              {page.isVideoModal ?
                  <div className="hero-bg in-modal" style={{ backgroundImage: `${`url(/assets/img/${page.bg ? page.bg : "hero-bg.png"})`}` }}>
                    {page.img && <img src={`../../assets/img/${page.img}`} alt="" />}
                    {page.video &&
                      <video autoPlay={true} muted={true} loop={true}>
                        <source src={`../../assets/img/${page.video}`} type="video/mp4" />
                      </video>
                    }
                    <div className="simple-video-play" onClick={() => OpenModal("video", dispatchModals, { url: page.url })}><Icon variant="play" /></div>
                  </div>
                :
                <div className="hero-bg" style={{ backgroundImage: `${`url(/assets/img/${page.bg ? page.bg : "hero-bg.png"})`}` }}>
                  {page.img && <img src={`../../assets/img/${page.img}`} alt="" />}
                  {page.video &&
                    <video autoPlay={true} muted={true} loop={true}>
                      <source src={`../../assets/img/${page.video}`} type="video/mp4" />
                    </video>
                  }
                </div>
              }

            </Row>
          </Container>
        </div>

      case "simple":
        return <div className={`hero ${page.video ? "video" : ""} simple ${page.className ? page.className : ""} ${isVisible ? "active" : ''}`}>
          <Container>
            <Row className="h-100">
              <Col lg={8} className="hero-inner">
                <div>
                  {page.label && <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>}
                  {page.title && <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>}
                  {page.description &&
                    <p className={`text-medium mb-4 mb-lg-5 text-center text-md-left ${page.descriptionCL ? page.descriptionCL : "mw-700"}`}>{page.description}</p>
                  }
                  {page.level &&
                    <div className="hero-block-duration">
                      <span className="d-flex align-items-center mr-3"><Icon className="mr-2" variant={page.level.toLowerCase()} />{page.level}</span>
                      <span className="d-flex align-items-center"><Icon className="mr-2" variant="clock" />{page.duration}</span>
                    </div>
                  }
                  {page.button &&
                    renderButton()
                  }
                </div>
                {(page.additional || page.brands) &&
                  <div className={`hero-bottom-section ${page.brandsCL ? page.brandsCL : ""}`}>
                    <div className="text-center text-lg-left mt-5 mt-lg-0">{page.additional && <span dangerouslySetInnerHTML={{ __html: page.additional }}></span>}</div>
                    <div className="blocks mobile-wrap mt-5">
                      {page.brands.map((brand, i) => (
                        <div key={`bc-${i}`} className="block d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                          {brand.link ? <Link to={brand.link} className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></Link> : <div className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                }
              </Col>
              <Col lg={4}>
                <div className="hero-bg" style={{ backgroundImage: `${!page.video ? `url(/assets/img/${page.bg ? page.bg : "hero-bg.png"})` : ""}` }}>
                  {page.img && <img src={`../../assets/img/${page.img}`} alt="" />}
                  {page.video &&
                    <video autoPlay={true} muted={true} loop={true}>
                      <source src={`../../assets/img/${page.video}`} type="video/mp4" />
                    </video>
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      case "lines":
        return <div className={`hero ${page.className ? page.className : ""} ${isVisible ? "active" : ''}`}>
          <Container>
            <Row className={`position-relative ${page.theme ? page.theme : ""}`}>
              <div className="hero-lines-shape"><Icon variant="lines-shape" /></div>
              <Col lg={12} className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <div className={`hero-lines-inner`}>
                  <div className="hero-lines-columns">
                    {page.isSmallShape ? <div className="shape-homehero-4"><img src="../../assets/img/dots-medium-3.svg" alt="" /></div> : <div className="shape-homehero-2"><img src="../../assets/img/dots-medium-4.svg" alt="" /></div>}
                    <div className={`${page.img ? "hero-lines-c" : ""}`}>
                      {page.icon && <img className="hero-icon" src={`../assets/img/${page.icon}`} />}
                      {page.logo && <img className="hero-logo" src={`../assets/img/${page.logo}`} />}
                      {page.label && <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>}
                      {page.for && <div className="mt-4 mb-2 text-center text-md-left text-gray"><span className="text-light-gray">{page.for}</span></div>}
                      {page.title && <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-700"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>}
                      {page.description &&
                        <p className={`${page.isSmallDescription ? "" : "text-medium"} mb-4 mb-lg-5 text-center text-md-left ${page.descriptionCL ? page.descriptionCL : "mw-700"}`}>{page.description}</p>
                      }
                      {page.button &&
                        renderButton()
                      }
                    </div>
                    {page.img &&
                      <div className="hero-lines-c">
                        <img className="hero-lines-img" src={`../assets/img/${page.img}`} />
                      </div>
                    }
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

      case "simple-feedback":
        return <div className={`hero simple-feedback ${page.className ? page.className : ""} ${isVisible ? "active" : ''}`}>
          <Container className="position-relative">
            <Row className="simple-feedback-row">
              <Col lg={7} className="hero-inner">
                <div>
                  {page.label && <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>}
                  {page.title && <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>}
                  {page.description &&
                    <p className={`text-medium mb-4 mb-lg-5 text-center text-md-left ${page.descriptionCL ? page.descriptionCL : "mw-700"}`}>{page.description}</p>
                  }
                  {page.button &&
                    renderButton()
                  }
                </div>
              </Col>
              {page.feedback &&
                <Col lg={5} className="d-flex align-items-center">
                  <div className="hero-bg-feedback">
                    <div className="hero-bg-feedback-img" style={{ backgroundImage: `url(./assets/img/${page.feedback.img})` }}></div>
                    <div className="hero-bg-feedback-coment">
                      <div className="text-medium fw-300">"{page.feedback.coment}"</div>
                      <div className="text-dark mt-2">{page.feedback.name} - {page.feedback.title}</div>
                    </div>
                  </div>
                </Col>
              }
            </Row>
            <Row className="hero-bottom-section">
              <Col>
                {(page.additional || page.brands) &&
                  <div>
                    <div className="text-center text-lg-left mt-5 mt-lg-0">{page.additional && <span dangerouslySetInnerHTML={{ __html: page.additional }}></span>}</div>
                    <div className="blocks mobile-wrap mt-5">
                      {page.brands.map((brand, i) => (
                        <div key={`bc-${i}`} className="block d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                          {brand.link ? <Link to={brand.link} className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></Link> : <div className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                }
              </Col>
            </Row>
          </Container>
        </div>

      case "simple-video":
        return <div className={`hero simple-video ${page.className ? page.className : ""} ${isVisible ? "active" : ''}`}>
          <Container className="position-relative">
            <Row className="simple-video-row">
              <Col lg={7} className="hero-inner">
                <div>
                  {page.label && <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>}
                  {page.title && <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>}
                  {page.description &&
                    <p className={`text-medium mb-4 mb-lg-5 text-center text-md-left ${page.descriptionCL ? page.descriptionCL : "mw-700"}`}>{page.description}</p>
                  }
                  {page.button &&
                    renderButton()
                  }
                </div>
              </Col>
              {page.video &&
                <Col lg={5} className="d-flex align-items-center">
                  <div className="hero-bg-video">
                    <div className="hero-bg-video-source">
                      <div className="hero-bg-play"><Icon variant="play" /></div>
                    </div>
                    {page.feedback &&
                      <div className="hero-bg-feedback-coment">
                        <div className="text-medium fw-300">"{page.feedback.coment}"</div>
                        <div className="text-dark mt-2">{page.feedback.name} - {page.feedback.title}</div>
                      </div>
                    }
                  </div>
                </Col>
              }
            </Row>
            <Row className="hero-bottom-section">
              <Col>
                {(page.additional || page.brands) &&
                  <div>
                    <div className="text-center text-lg-left mt-5 mt-lg-0">{page.additional && <span dangerouslySetInnerHTML={{ __html: page.additional }}></span>}</div>
                    <div className="blocks mobile-wrap mt-5">
                      {page.brands.map((brand, i) => (
                        <div key={`bc-${i}`} className="block d-flex align-items-center justify-content-center justify-content-lg-start mb-4 mb-lg-0">
                          {brand.link ? <Link to={brand.link} className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></Link> : <div className={brand.className}><img src={`../../assets/img/${brand.logo}`} alt="" /></div>}
                        </div>
                      ))}
                    </div>
                  </div>
                }
              </Col>
            </Row>
          </Container>
        </div>

      default:
        return <div className={`hero sect-spacer ${page.className ? page.className : ""} ${isVisible ? "active" : ''}`}>
          <Container>
            <Row>
              <Col lg={6} className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <div className="">
                  <div className="position-relative mt-5 mb-5 mt-lg-0 mb-lg-0">
                    {page.isSmallShape ? <div className="shape-homehero-4"><img src="../../assets/img/dots-medium-3.svg" alt="" /></div> : <div className="shape-homehero-2"><img src="../../assets/img/dots-medium-4.svg" alt="" /></div>}
                    <div className="mb-2 text-center text-md-left"><span className="text-label">{page.label}</span></div>
                    {!page.strings && <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`} dangerouslySetInnerHTML={{ __html: page.title }}></h1>}
                    {page.strings &&
                      <h1 className={`mb-4 text-center text-md-left ${page.titleCL ? page.titleCL : "mw-550"}`}>
                        {page.title}
                        <span className="font-weight-medium">
                          <Typed
                            strings={page.strings}
                            typeSpeed={50}
                            backSpeed={30}
                            backDelay={2000}
                            showCursor={page.strings.length > 1 ? true : false}
                            className="text-center text-md-left"
                            loop={page.strings.length > 1 ? true : false}
                          />
                        </span>
                      </h1>
                    }
                    {page.description &&
                      <p className={`text-medium mb-4 mb-lg-5 text-center text-md-left ${page.descriptionCL ? page.descriptionCL : "mw-550"}`}>{page.description}</p>
                    }
                    {page.form && page.form.isActive &&
                      <Form onSubmit={onSubmit} className="form-base d-inline-flex w-480 mb-4">
                        <div className="w-100 d-flex flex-column flex-md-row">
                          <Form.Control type="email" className="input-shadow mb-4 mb-md-0" value={userMail} onChange={e => dispatchUserMail({ type: "SET_USER_MAIL", data: e.target.value })} placeholder={page.form.placeholder} required />
                          <Button variant="primary" onClick={() => OpenModal("request", dispatchModals)}>{page.form.button}</Button>
                        </div>
                      </Form>
                    }
                    {page.loginLink && page.loginLink.isActive && <div className="text-center text-md-left mb-2 mt-2 mt-md-0"><span className="text-gray-medium">{page.loginLink.label} <Link to={page.loginLink.link}>{page.loginLink.name}</Link></span></div>}
                    {page.button &&
                      renderButton()
                    }
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className={`${page.variant == "fluid" ? "preset-img-1" : "preset-img-5"}`}>
                  <img src={`../../assets/img/${page.img}`} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    }
  }

  return page ? renderHero() : <></>

}

export default Hero;