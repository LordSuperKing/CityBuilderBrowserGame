import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import { handleAdvisorClose, handleAdvisorShow } from '../../redux/eventSlice';
import advisor from '../../assets/images/people/advisor.webp'

export function AdvisorItem() {
    const dispatch = useAppDispatch();
    const eventState = useAppSelector((state) => state.events)

    const handleClose = () => dispatch(handleAdvisorClose());

    return (
        <>

            <Modal
                show={eventState.showAdvisor}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Advisor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='img-fluid ' src={advisor} alt=''></img>
                </Modal.Body>

                <Modal.Footer>
                    {eventState.activatedEvent?.eventIsComplete ? eventState.activatedEvent?.endMessage : eventState.activatedEvent?.startMessage}
                    <Button variant="primary" onClick={handleClose}>Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

