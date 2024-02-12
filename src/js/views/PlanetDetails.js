import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetails = () => {

    const { planetId } = useParams();
    const [planetDetails, setPlanetDetails] = useState(null);

    useEffect(() => {
        const fetchPlanetInfo = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/planets/${planetId}/`)
                const data = await response.json();
                setPlanetDetails(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPlanetInfo();
    }, []);

    if (!planetDetails) {
        return <p>Loading planet details...</p>;
    }

    const containerStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        margin: '20px',
        width: '500px',
        borderRadius: '20px',
    };

    return (
        <div style={containerStyle}>
            <h1 className="mb-4">{planetDetails.name}</h1>
            <h5>Description: {planetDetails.description}</h5>
            <h5>Diameter: {planetDetails.diameter}</h5>
            <h5>Rotation period: {planetDetails.rotation_period}</h5>
            <h5>Orbital period: {planetDetails.orbital_period}</h5>
            <h5>Gravity period: {planetDetails.gravity}</h5>
            <h5>Population: {planetDetails.population}</h5>
            <h5>Climate: {planetDetails.climate}</h5>
        </div>
    );
};