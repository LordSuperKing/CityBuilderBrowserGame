import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { Col, Row } from "react-bootstrap";
import { StateBarItem } from "./StateBarItem";
import { PiSmiley } from "react-icons/pi";
import { PiSmileyAngry } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiGoldBar } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";

export function StateBar() {
  const populationState = useAppSelector(
    (state) => state.population
  );
  const resourcesState = useAppSelector(
    (state) => state.resources
  );
  return (
    <>
      <Row className="d-flex justify-content-center ">
        <Col>
          <StateBarItem
            description={[<PiSmiley />, <PiSmileyAngry />]}
            value={populationState.satisfaction}
          ></StateBarItem>
          <StateBarItem
            description={[<IoPeopleSharp />]}
            value={populationState.amount}
          ></StateBarItem>
        </Col>
        <Col>
          <StateBarItem
            description={[<IoFastFoodOutline />]}
            value={resourcesState.food}
          ></StateBarItem>
          <StateBarItem description={[""]} value={""}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={[""]} value={""}></StateBarItem>
          <StateBarItem description={[""]} value={""}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={[""]} value={""}></StateBarItem>
          <StateBarItem description={[""]} value={""}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={[""]} value={""}></StateBarItem>
          <StateBarItem description={[""]} value={""}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={[""]} value={""}></StateBarItem>
          <StateBarItem description={[""]} value={""}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem
            description={["BIP"]}
            value={resourcesState.bipPercentage}
          ></StateBarItem>
          <StateBarItem
            description={[<GiGoldBar />]}
            value={resourcesState.gold}
          ></StateBarItem>
        </Col>
      </Row>
    </>
  );
}
