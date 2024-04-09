import React, { useEffect } from "react";
import CityView from "../components/CityView";
import { Col, Row } from "react-bootstrap";
import { StateBar } from "../components/statebar/StateBar";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { EconomyBarLeft } from "../components/economy/EconomyBarLeft";
import { EconomyBarRight } from "../components/economy/EconomyBarRight";
import { GameSpeedComponent } from "../components/Speedseetings/GameSpeedComponent";

export function GameScreen() {
    const populationState = useAppSelector(
        (state) => state.population
    );

    return (
        <>
            <Row className='mt-2'>
                <Col xs={3}>
                    <GameSpeedComponent></GameSpeedComponent>
                </Col>
                <Col></Col>
            </Row>

            <Row className="mt-2 d-flex justify-content-evenly ">
                <StateBar></StateBar>
            </Row>
            <Row className="mt-2 g-1 d-flex justify-content-center ">
                <Col xs={3}>

                    <EconomyBarLeft></EconomyBarLeft>
                </Col>
                <Col className="d-flex justify-content-center " xs={5}>
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
