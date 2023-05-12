import React, { useRef, useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Package from "../../components/pricing/Package";
import { filterIt } from "../../utils/scripts";
import { Context } from "../../context/context";
import Icon from "../icon";

import "./Pricing.scss";

const Packages = ({ data, className }) => {

  const packagesContainer = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  const { scrollB } = useContext(Context);

  useEffect(()=>{
    if(scrollB) scrollB.scrollbar.addListener((status) => {
      setScrollTop(status.offset.y)
    });
  },[scrollB])

  const getFeatureDetail = (features, id) => {
    const feature = filterIt(features, id, "id");

    if (feature.length > 0) {
      return feature[0].description ?
        <span className={`package-feature-item-detail fw-500 ${feature[0].className ? feature[0].className : "text-gray"}`}>{feature[0].description}</span>
        :
        <span className={`package-feature-item-detail text-primary`}><Icon variant="allow" /></span>
    } else {
      return <span className="package-feature-item-detail text-error"><Icon variant="icon-close" /></span>
    }
  }

  return (
    <div className={`packages ${className ? className : ""}`}>
      <Container fluid className="pl-0 pr-0 sect-spacer">
        <Row ref={packagesContainer}>
          <Col>
            <div className="packages-cover mt-0 mb-4 d-flex d-lg-none">
              <div>
                <div><span className="text-small text-primary" dangerouslySetInnerHTML={{ __html: data.unitsDescription }}></span></div>
                <div><span className="text-tiny text-dark" dangerouslySetInnerHTML={{ __html: data.unitsNotification }}></span></div>
              </div>
            </div>
            <div className="packages-table">
              <div className="packages-row">
                <div className="packages-column-1">
                  <div className="packages-cover">
                    <div>
                      <div><span className="text-small text-primary" dangerouslySetInnerHTML={{ __html: data.unitsDescription }}></span></div>
                      <div><span className="text-tiny text-dark" dangerouslySetInnerHTML={{ __html: data.unitsNotification }}></span></div>
                    </div>
                  </div>
                  <div className="package-border-lb pb-4 pt-4">
                    {data.includedLabels.map((item, i) => (
                      <div key={`pi-${i}`} className="package-feature-label">{item}</div>
                    ))}
                  </div>
                  <div className="mt-dw mb-dw text-label-primary"><span className="packages-vm">{data.labelFeatures}</span></div>
                  <div className="package-feature-groups">
                    {data.features.map((feature, i) => (
                      <div key={`pg-${i}`} className="package-feature-group">
                        <div className="package-feature-label"><span className="text-primary fw-500 text-small">{feature.name}</span></div>
                        {feature.list.map((featureSub, i) => (
                          <div key={`psg-${i}`} className="package-feature-item text-dark">{featureSub.name}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="packages-column-2">
                  {data.list.map((pack, i) => (
                    <div key={`pck-${i}`} className="packages-col">
                      <Package
                        data={pack}
                        isFirst={i == 0}
                        containerHeight={packagesContainer.current ? packagesContainer.current.getBoundingClientRect().height : 0}
                        containerTop={packagesContainer.current ? packagesContainer.current.getBoundingClientRect().top : 0}
                        isFirst={i == 0}
                        buttonName={data.button.name}
                      />
                      <div className="package-border-rb included pb-4 pt-4">
                        {pack.included.map((item, i) => (
                          <div key={`pckf-${i}`} className="package-feature-label fw-500 text-center"><span className="d-block d-md-none text-primary">{data.includedLabels[i]}</span><span>{item}</span></div>
                        ))}
                      </div>
                      <div className="mt-dw mb-dw text-label-primary d-flex"><span className="packages-vm d-block d-md-none">{data.labelFeatures}</span><span>&nbsp;</span></div>
                      <div className="package-feature-groups inner">
                        {data.features.map((feature, i) => (
                          <div key={`pf-${i}`} className="package-feature-group">
                            <div className="package-feature-label"><span className="text-primary text-small d-block d-md-none">{feature.name}</span><span>&nbsp;</span></div>
                            {feature.list.map((featureSub, i) => (
                              <div key={`pfi-${i}`} className="package-feature-item center">
                                <span className="d-block d-lg-none">{featureSub.name}</span>
                                {getFeatureDetail(pack.features, featureSub.id)}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Packages;