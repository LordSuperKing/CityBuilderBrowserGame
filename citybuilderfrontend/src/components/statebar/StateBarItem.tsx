import React, { ReactNode, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import './StateBarItem.css';
import { LiaLocationArrowSolid } from 'react-icons/lia';
import { FaMinus } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { IoFastFoodOutline } from "react-icons/io5";


type StateBarItemProps = {
    description: ReactNode[];
    value: number | string;
};

export function StateBarItem({ description, value }: StateBarItemProps) {
    const previousValueRef = useRef(value);
    const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0, // Minimale Anzahl von Nachkommastellen
        maximumFractionDigits: 2, // Maximale Anzahl von Nachkommastellen
    });

    


    useEffect(() => {
        if (value !== previousValueRef.current) {
            previousValueRef.current = value;
        }
    }, [value]);

    function showArrow() {
        if (typeof value === 'number' && typeof previousValueRef.current === 'number') {
            if (value > previousValueRef.current) {
                return <LiaLocationArrowSolid style={{ color: 'green' }} />;
            } else if (value < previousValueRef.current) {
                return <LiaLocationArrowSolid style={{ color: 'red', transform: 'rotate(180deg)' }} />;
            }
        }
        return <FaMinus />;
    }

    return (
        <Row className='container small'>
            <Col xs={2} className='text-start description'>{ description[0] }</Col>
            <Col xs={8} className='text-start value'>
                {typeof value === 'number' ? formatter.format(value) : value}
            </Col>

            <Col xs={1} className='text-end'>{showArrow()}</Col>
        </Row>
    );
}
