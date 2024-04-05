import '../assets/images/city/c1.webp'

import React, { useState, useEffect } from 'react';
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

    return <img style={{ transition: '1s ease-in-out'}} className="img-fluid" src={imageSrc} alt="City" />;
}
