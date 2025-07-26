import React from 'react';
import './styles.css'; // Asegúrate de importar el CSS que compartimos antes

const CardComponent = ({ imageUrl, title, description }) => {
    return (
        <div className="card">
            {imageUrl && (
                <div className="card-image-container">
                    <img src={imageUrl} alt={title} className="card-image" />
                </div>
            )}
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

export default CardComponent;