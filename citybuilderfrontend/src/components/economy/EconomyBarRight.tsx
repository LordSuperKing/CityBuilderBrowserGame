import React from "react";
import { Col, Row } from "react-bootstrap";
import { EconomyBuilding } from "./EconomyBuilding";
import { useAppSelector } from "../../redux/reduxHooks";

export function EconomyBarRight() {
    const cityState = useAppSelector((state) => state.city);

    return (
        <>
            <Row className="mb-2">
                <Col>
                    <EconomyBuilding
                        buildingData={cityState.buildings[3]}
                    ></EconomyBuilding>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <EconomyBuilding
                        buildingData={cityState.buildings[4]}
                    ></EconomyBuilding>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col>
                    <EconomyBuilding
                        buildingData={cityState.buildings[5]}
                    ></EconomyBuilding>
                </Col>
            </Row>
        </>
    );
}
