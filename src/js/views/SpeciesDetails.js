import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SpeciesDetails = () => {

    const { speciesId } = useParams();
    const [speciesDetails, setSpeciesDetails] = useState(null);

    useEffect(() => {
        const fetchSpeciesInfo = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/species/${speciesId}/`)
                const data = await response.json();
                setSpeciesDetails(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchSpeciesInfo();
    }, []);

    if (!speciesDetails) {
        return <p>Loading species details...</p>;
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
            <h1 className="mb-4">{speciesDetails.name}</h1>
            <h5>Classification: {speciesDetails.classification}</h5>
            <h5>Designation: {speciesDetails.designation}</h5>
            <h5>Description: {speciesDetails.description}</h5>
            <h5>Average height: {speciesDetails.average_height}kg</h5>
            <h5>Average lifespan: {speciesDetails.average_lifespan}</h5>
            <h5>Hair colors: {speciesDetails.hair_colors}</h5>
            <h5>Skin colors: {speciesDetails.skin_colors}</h5>
        </div>
    );
};