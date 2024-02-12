import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetails = () => {

    const { characterId } = useParams();
    const [characterDetails, setCharacterDetails] = useState(null);

    useEffect(() => {
        const fetchCharacterInfo = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/people/${characterId}/`)
                const data = await response.json();
                setCharacterDetails(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCharacterInfo();
    }, []);

    if (!characterDetails) {
        return <p>Loading character details...</p>;
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
            <h1 className="mb-4">{characterDetails.name}</h1>
            <h5>Gender: {characterDetails.gender}</h5>
            <h5>Birth Year: {characterDetails.birth_year}</h5>
            <h5>Description: {characterDetails.description}</h5>
            <h5>Mass: {characterDetails.mass}kg</h5>
            <h5>Hair color: {characterDetails.hair_color}</h5>
            <h5>Skin color: {characterDetails.skin_color}</h5>
            <h5>Eye color: {characterDetails.eye_color}</h5>
        </div>
    );
};

