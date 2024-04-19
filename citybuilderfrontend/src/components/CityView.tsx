import React, { useState, useEffect } from 'react';
import { AdvisorItem } from './Events/AdvisorItem';
type CityViewProps = {
    population: number
}



export default function CityView({ population }: CityViewProps) {
    const [imageSrc, setImageSrc] = useState('');


    const [index, setIndex] = useState(1);

    // let index = 1;

    useEffect(() => {
        if (population > 5) {
            setIndex(2)
        }
        if (population > 10) {
            setIndex(3)
        }
        if (population > 20) {
            setIndex(4)
        }
        if (population > 50) {
            setIndex(5)
        }
        if (population > 100) {
            setIndex(6)
        }
        if (population > 200) {
            setIndex(7)
        }
        if (population > 400) {
            setIndex(8)
        }
        if (population > 800) {
            setIndex(9)
        }
        if (population > 1600) {
            setIndex(10)
        }

    }, [population]);

    return (
        <>
            <AdvisorItem></AdvisorItem>
            <img style={{ maxHeight: "94%" }} className="img-fluid" src={`/images/city/c${index}.webp`} alt="City" />

        </>


    )
}
