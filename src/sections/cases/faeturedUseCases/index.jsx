import React, {useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockCase from "../../../components/blocks/blockcase";
import { filterIt } from "../../../utils/scripts";
import LinkAdv from "../../../components/linkadv";
import { Context } from "../../../context/context";
import { OpenModal } from "../../../services/modalsManager";

const FeaturedUseCases = ({ isVisible, page }) => {

  const { dispatchModals } = useContext(Context);

  const getDetails = (name) => {
    const solution = filterIt(page.useCases.workflows.options, name, "value");

    return solution.length > 0 ? { img: solution[0].img, variant: solution[0].variant } : { img: "use-case-primary.svg", variant: "primary" };
  }

  const filterUseCases = () => {
    return filterIt(page.useCases.list, "Credit Risk", "solution").slice(0, 3);
  }

  return (
    <div className={`featured-usecases sect-spacer ${isVisible ? "active" : ""} ${page.className ? page.className : ""}`}>
      <Container>
        <Row>
          <Col md={12} className="mb-5">
            {page.label && <span className="text-label">{page.label}</span>}
          </Col>
          {filterUseCases().map((item, i) => (
            <Col key={`bi-${i}`} lg={4} md={6} onClick={() => OpenModal("requestAccess", dispatchModals, { ...item, ...getDetails(item.workflow) })}>
              <BlockCase data={{ ...item, ...getDetails(item.workflow) }} />
            </Col>
          ))}
        </Row>
        {page.link &&
          <Row>
            <Col>
              <LinkAdv data={page.link} variant="outline-light" className="w-100" />
            </Col>
          </Row>
        }
      </Container>
    </div>
  );
}

export default FeaturedUseCases;