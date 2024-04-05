import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import { Col, Row } from 'react-bootstrap';
import { StateBarItem } from './StateBarItem';

export function StateBar() {
  const populationState = useAppSelector((state) => state.population.populationState);
  const resourcesState = useAppSelector((state) => state.resources.resourcesState)
  return (
    <>
      <Row>
        <Col>
          <StateBarItem description={'Satisfaction'} value={populationState.satisfaction}></StateBarItem>
          <StateBarItem description={'Population'} value={populationState.amount}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={'Food'} value={resourcesState.food}></StateBarItem>
          <StateBarItem description={''} value={''}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={''} value={''}></StateBarItem>
          <StateBarItem description={''} value={''}></StateBarItem>
        </Col>
        <Col>
          <StateBarItem description={'Bip'} value={resourcesState.bipPercentage}></StateBarItem>
          <StateBarItem description={'Gold'} value={resourcesState.gold}></StateBarItem>
        </Col>
      </Row>
    </>
  )
}
