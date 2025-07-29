import React from 'react';
import './styles.css'; // Asegúrate de importar el CSS que compartimos antes

const CardComponent = ({ imageUrl, title, description, tags }) => {
    return (
        <div className="card">
            <div>

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

            <div>

                {tags.map((tag, index) => {
                    return <span key={index} className='m-1 inline-block px-3 py-1 rounded-md bg-gray-50 text-gray-700 border border-gray-200 text-sm font-medium transition-all hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-300'>{tag}</span>
                })}
            </div>
        </div>
    );
};

export default CardComponent;