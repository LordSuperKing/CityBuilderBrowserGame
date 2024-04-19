import React, { ReactNode, useCallback, useState } from 'react';
import { Card, Form, Button, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BuildingData } from '../building';
import { changeBuilding, setBuildingBipPercentage, setBuildingIsProducing, updateBuildingPercentageIfPossible } from '../../redux/citySlice';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { GiUpgrade } from "react-icons/gi";
import './EconomyBuilding.css'
import { checkSufficientResources } from '../../utils/helpFunctions';
import { payResources, setBipPercentage } from '../../redux/resourcesSlice';
import { MyToast } from '../UI/MyToast';
import { OverlayChildren, OverlayInjectedProps } from 'react-bootstrap/esm/Overlay';
import { UpgradeCosts } from '../UI/UpgradeCosts';


type EconomyBuildingProps = {
    buildingData: BuildingData;
};

export function EconomyBuilding({ buildingData }: EconomyBuildingProps) {
    const [showToast, setShowToast] = useState(false);

    const [bipPercentageInput, setBipPercentageInput] = useState(buildingData.bipPercentage.toString());
    const dispatch = useAppDispatch();
    const resourcesState = useAppSelector((state) => state.resources);

    const handleBipPercentageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valueToSet = event.target.value;
        const availableBip = buildingData.bipPercentage + resourcesState.bipPercentage

        if (availableBip < +valueToSet) {
            setBipPercentageInput(availableBip.toString())
        } else {
            setBipPercentageInput(valueToSet);
        }

    }


    const handleBipPercentageSubmit = useCallback(() => {
        let value = parseFloat(bipPercentageInput);
        if (value < 0) value = 0;
        if (value > 100) value = 100;

        dispatch(updateBuildingPercentageIfPossible(buildingData, value));
        setBipPercentageInput(value.toString());
    }, [bipPercentageInput, buildingData, dispatch])

    const handleUpgrade = () => {
        if (checkSufficientResources(resourcesState, buildingData.upgradeCosts)) {
            dispatch(payResources(buildingData.upgradeCosts))
            dispatch(changeBuilding({ oldBuildingId: buildingData.id, newBuildingId: buildingData.upgradeAbleTo}))
            dispatch(setBuildingIsProducing({id: buildingData.id, isProducing: false}))
            dispatch(setBuildingIsProducing({ id: buildingData.upgradeAbleTo, isProducing: true }))

            const bipPercentageOld = buildingData.bipPercentage
            dispatch(setBuildingBipPercentage({ id: buildingData.id, newPercentage: 0}))
            dispatch(setBuildingBipPercentage({ id: buildingData.upgradeAbleTo, newPercentage: bipPercentageOld }))


        } else {
            setShowToast(true)
        }
    }

    const renderTooltip = (props: OverlayInjectedProps) => (
        <Tooltip {...props}>
            <UpgradeCosts resources={buildingData.upgradeCosts}></UpgradeCosts>
        </Tooltip>
    );


    if (buildingData.id.startsWith('l')) {
        return (
            <>
                {showToast && <MyToast message={'We need more resources!'} toggleShow={() => setShowToast(false)} ></MyToast>}
                <Card className="d-flex flex-row p-1" style={{ width: '100%' }}>
                    <Card.Img style={{ width: '50%', objectFit: 'cover' }} variant="left" src={buildingData.imageSrc} />
                    <Card.Body style={{ width: '50%' }}>


                        <Row >
                            <Col xs={9}>
                                <Card.Title style={{ fontSize: "13px" }}>{buildingData.name}</Card.Title>
                            </Col>
                            <OverlayTrigger placement='right' overlay={renderTooltip}>
                                <Col className='d-flex justify-content-end'>
                                    {buildingData.isUpgradeAvailable &&
                                        <GiUpgrade onClick={handleUpgrade} className='pulse-icon' />
                                    }
                                </Col>
                            </OverlayTrigger>
                        </Row>

                        <Card.Text style={{ fontSize: "10px" }}>
                            {buildingData.description}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </>
        );
    }


    return (
        <Card className="d-flex flex-row p-1" style={{ width: '100%' }}>
            <Card.Img style={{ width: '50%', objectFit: 'cover' }} variant="left" src={buildingData.imageSrc} />
            <Card.Body style={{ width: '50%' }}>

                <Row >
                    <Col xs={9}>
                        <Card.Title style={{ fontSize: "13px" }}>{buildingData.name}</Card.Title>
                    </Col>
                    <OverlayTrigger placement='right' overlay={renderTooltip}>
                        <Col className='d-flex justify-content-end'>
                            {buildingData.isUpgradeAvailable &&
                                <GiUpgrade onClick={handleUpgrade} className='pulse-icon' />
                            }
                        </Col>
                    </OverlayTrigger>
                </Row>

                <Card.Text style={{ fontSize: "10px" }}>
                    {buildingData.description}
                </Card.Text>

                <Form style={{ fontSize: "10px" }} onSubmit={(e) => e.preventDefault()}>
                    <Form.Group controlId="formLaborInput">
                        <Form.Label >BIP (%)</Form.Label>
                        <Form.Control
                            style={{ fontSize: "10px" }}
                            type="number"
                            value={bipPercentageInput}
                            onChange={handleBipPercentageInput}
                            onBlur={handleBipPercentageSubmit}
                            min="0"
                            max="100"
                        />
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}
