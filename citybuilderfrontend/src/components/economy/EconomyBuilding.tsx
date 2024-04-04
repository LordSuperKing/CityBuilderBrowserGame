import React from 'react';
import { Card } from 'react-bootstrap';
import { BuildingData } from '../building';

type EconomyBuildingProps = {
    buildingData: BuildingData;
};

export function EconomyBuilding({ buildingData }: EconomyBuildingProps) {
    return (
        <Card className="d-flex flex-row p-1 " style={{ width: '100%' }}>
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
