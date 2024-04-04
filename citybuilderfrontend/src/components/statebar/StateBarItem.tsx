import React, { useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import './StateBarItem.css';
import { LiaLocationArrowSolid } from 'react-icons/lia';
import { FaMinus } from 'react-icons/fa';

type StateBarItemProps = {
    description: string;
    value: number | string;
};

export function StateBarItem({ description, value }: StateBarItemProps) {
    const previousValueRef = useRef(value);

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
        <Row style={{ width: '300px' }} className='container'>
            <Col xs={5} className='text-start description'>{description}</Col>
            <Col xs={5} className='text-start value'>{value}</Col>
            <Col xs={1} className='text-end'>{showArrow()}</Col>
        </Row>
    );
}
