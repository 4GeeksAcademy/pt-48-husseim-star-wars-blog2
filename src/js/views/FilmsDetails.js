import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const FilmsDetails = () => {

    const { filmId } = useParams();
    const [filmDetails, setFilmDetails] = useState(null);

    useEffect(() => {
        const fetchPlanetInfo = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/starships/${filmId}/`)
                const data = await response.json();
                setFilmDetails(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPlanetInfo();
    }, []);

    if (!filmDetails) {
        return <p>Loading film details...</p>;
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
            <h1 className="mb-4">{filmDetails.name}</h1>
            <h5>Description: {filmDetails.description}</h5>
            <h5>Model: {filmDetails.model}</h5>
            <h5>Starship class: {filmDetails.starship_class}</h5>
            <h5>Manufacturer: {filmDetails.manufacturer}</h5>
            <h5>Cost: {filmDetails.cost_in_credits} credits</h5>
            <h5>Length: {filmDetails.length}</h5>
            <h5>Passengers: {filmDetails.passengers}</h5>
        </div>
    );
};