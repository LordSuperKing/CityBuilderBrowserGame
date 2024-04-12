import '../assets/images/city/c1.webp'

import React, { useState, useEffect } from 'react';
import { AdvisorItem } from './Events/AdvisorItem';
type CityViewProps = {
    population: number
}



export default function CityView({ population }: CityViewProps) {
    const [imageSrc, setImageSrc] = useState('');


    useEffect(() => {
        let index = 1;
        if (population > 5) {
            index = 2
        }
        if (population > 10) {
            index = 3
        }
        if (population > 20) {
            index = 4
        }
        if (population > 50) {
            index = 5
        }
        const loadImage = async () => {
            try {
                const image = await import(`../assets/images/city/c${index}.webp`);
                setImageSrc(image.default);
            } catch (err) {
                console.error('Fehler beim Laden des Bildes', err);
            }
        };

        loadImage();
    }, [population]);

    return (
        <>
            <AdvisorItem></AdvisorItem>
            <img style={{ maxHeight: "94%" }} className="img-fluid" src={imageSrc} alt="City" />

        </>


    )
}
