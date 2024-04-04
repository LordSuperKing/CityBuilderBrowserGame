import React from "react";
import { Col, Row } from "react-bootstrap";
import { EconomyBuilding } from "./EconomyBuilding";
import { buildings } from "../building";

export function EconomyBar() {
  return (
    <>
      <Row>
        <Col>
        <EconomyBuilding buildingData={buildings[0]}></EconomyBuilding>
        </Col>
      </Row>
      <Row></Row>
      <Row></Row>
    </>
  );
}
