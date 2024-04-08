import React, { useEffect } from "react";
import CityView from "../components/CityView";
import { Col, Row } from "react-bootstrap";
import { StateBar } from "../components/statebar/StateBar";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { EconomyBarLeft } from "../components/economy/EconomyBarLeft";
import { EconomyBarRight } from "../components/economy/EconomyBarRight";

export function GameScreen() {
    const populationState = useAppSelector(
        (state) => state.population
    );

    return (
        <>

            <Row className="mt-4 d-flex justify-content-evenly ">
                <StateBar></StateBar>
            </Row>
            <Row className="mt-2 g-1 d-flex justify-content-center ">
                <Col xs={3}>
                    
                    <EconomyBarLeft></EconomyBarLeft>
                </Col>
                <Col xs={5}>
                    <CityView population={populationState.amount}></CityView>
                </Col>
                <Col xs={3}>
                    <EconomyBarRight></EconomyBarRight>
                </Col>
            </Row>
            <Row></Row>
        </>
    );
}
