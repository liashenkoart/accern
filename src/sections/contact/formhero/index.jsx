import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import GoogleMapReact from 'google-map-react';
import Dot from "../../../components/dot";
import Icon from "../../../components/icon";
import FormComp from "../../../components/form";

import "./FormHero.scss"

const FormHero = ({ isVisible, page }) => {

  const [currentMap, setCurrentMap] = useState(null);
  const [curLocation, setCurrLocation] = useState(0);

  const mapConfig = {
    center: {
      lat: page.map.locations[0].lat,
      lng: page.map.locations[0].lng
    },
    zoom: 14,
  };

  const createMapOptions = (maps) => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      disableDefaultUI: true,
      styles: page.map.styles,
    }
  }

  const handleGoogleApiLoaded = ({ map, maps }) => {
    setCurrentMap(map)
  }

  const setLocation = (i) => {
    setCurrLocation(i)
    currentMap.panTo({ lat: page.map.locations[i].lat, lng: page.map.locations[i].lng });
  }

  return (
    <div className={`form-hero ${isVisible ? "active" : ''}`}>
      <Container>
        <Row>
          <Col lg={5} className="d-flex align-items-center justify-content-center justify-content-lg-start">
            {page.isForm && <FormComp from="Contact page" data={page.form}/>}
          </Col>
          <Col lg={7}>
            <div className="preset-map">
              <div className="preset-map-top-gradient"></div>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDg7SkeXjmBiDFHkunLPaGge_FVbX84jCY" }}
                defaultCenter={mapConfig.center}
                defaultZoom={mapConfig.zoom}
                onGoogleApiLoaded={handleGoogleApiLoaded}
                options={createMapOptions}
              >
                {page.map.locations.map((location, i) => (
                  <Dot key={`d-${i}`} lat={location.lat} lng={location.lng} />
                ))}
              </GoogleMapReact>
            </div>
          </Col>
        </Row>
        <Row className="mt-s">
          {page.map.locations.map((elm, i) => (
            <Col lg={6} key={`cc-${i}`} className="pb-g">
              <div className={`adress-box ${curLocation == i ? "active" : ""}`} onClick={() => { setLocation(i) }}>
                <div><Icon variant={elm.icon} /></div>
                <div className="text-medium" dangerouslySetInnerHTML={{ __html: elm.address }}></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default FormHero;