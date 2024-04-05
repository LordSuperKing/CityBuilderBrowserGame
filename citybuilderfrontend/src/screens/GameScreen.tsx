import React, { useEffect } from "react";
import CityView from "../components/CityView";
import { Col, Row } from "react-bootstrap";
import { StateBar } from "../components/statebar/StateBar";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import {
    populationGrowth,
    startPopulationGrowth,
} from "../redux/populationSlice";
import { EconomyBarLeft } from "../components/economy/EconomyBarLeft";
import { EconomyBarRight } from "../components/economy/EconomyBarRight";

export function GameScreen() {
    const populationState = useAppSelector(
        (state) => state.population.populationState
    );

    return (
        <>
            <Row>
                <StateBar></StateBar>
            </Row>
            <Row className="g-1">
                <Col xs={3}>
                    <EconomyBarLeft></EconomyBarLeft>
                </Col>
                <Col xs={6}>
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
