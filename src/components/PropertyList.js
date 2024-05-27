import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Fetch properties from backend when component mounts
        axios.get('http://localhost:8000/api/properties/')
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error('Error fetching properties:', error);
            });
    }, []);

    return (
        <div>
            <h2>Properties List</h2>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        {property.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
