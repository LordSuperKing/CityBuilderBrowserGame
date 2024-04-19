import React, { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

type MyToastProps = {
    message: string
    toggleShow: ()=> void
    
}


export function MyToast({ message, toggleShow }: MyToastProps) {
    return (
        <ToastContainer position="top-center">
            <Toast show={true} onClose={toggleShow} delay={3000} autohide bg='dark'>
  
                <Toast.Body className={'dark text-white text-center '}>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}


