import React from "react";
import { Col, Row } from "react-bootstrap";
import { EconomyBuilding } from "./EconomyBuilding";
import { useAppSelector } from "../../redux/reduxHooks";

export function EconomyBarLeft() {
  const cityState = useAppSelector((state) => state.city);

  return (
    <>
      <Row className="mb-2">
        <Col>
          <EconomyBuilding
            buildingData={cityState.city.buildings[0]}
          ></EconomyBuilding>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <EconomyBuilding
            buildingData={cityState.city.buildings[1]}
          ></EconomyBuilding>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <EconomyBuilding
            buildingData={cityState.city.buildings[2]}
          ></EconomyBuilding>
        </Col>
      </Row>
    </>
  );
}
