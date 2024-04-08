import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { BuildingData } from '../building';
import { updateBuildingPercentageIfPossible } from '../../redux/citySlice';
import { useAppDispatch } from '../../redux/reduxHooks';

type EconomyBuildingProps = {
    buildingData: BuildingData;
};

export function EconomyBuilding({ buildingData }: EconomyBuildingProps) {
    const [bipPercentageInput, setBipPercentageInput] = useState(buildingData.bipPercentage.toString());
    const dispatch = useAppDispatch();


    function handleBipPercentageSubmit() {
        let value = parseFloat(bipPercentageInput);
        if (value < 0) value = 0;
        if (value > 100) value = 100;

        dispatch(updateBuildingPercentageIfPossible(buildingData, value));
        setBipPercentageInput(value.toString()); // Update local state to reflect the corrected value
    }


    if (buildingData.id.startsWith('l')) {
        return (
            <Card className="d-flex flex-row p-1" style={{ width: '100%' }}>
                <Card.Img style={{ width: '50%', objectFit: 'cover' }} variant="left" src={buildingData.imageSrc} />
                <Card.Body style={{ width: '50%' }}>
                    <Card.Title style={{ fontSize: "13px" }}>{buildingData.name}</Card.Title>
                    <Card.Text style={{ fontSize: "10px" }}>
                        {buildingData.description}
                    </Card.Text>

                </Card.Body>
            </Card>
        );
    }


    return (
        <Card className="d-flex flex-row p-1" style={{ width: '100%' }}>
            <Card.Img style={{ width: '50%', objectFit: 'cover' }} variant="left" src={buildingData.imageSrc} />
            <Card.Body style={{ width: '50%' }}>
                <Card.Title style={{ fontSize: "13px" }}>{buildingData.name}</Card.Title>
                <Card.Text style={{ fontSize: "10px" }}>
                    {buildingData.description}
                </Card.Text>
                <Form style={{ fontSize: "10px" }} >
                    <Form.Group controlId="formLaborInput">
                        <Form.Label >BIP (%)</Form.Label>
                        <Form.Control
                            style={{ fontSize: "10px" }}
                            type="number"
                            value={bipPercentageInput}
                            onChange={(e) => setBipPercentageInput(e.target.value)}
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
