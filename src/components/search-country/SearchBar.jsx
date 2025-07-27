import React from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-red-500" />
            </div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Busca un Pokémon..."
                className="w-full pl-10 pr-12 py-3 rounded-full border-2 border-red-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-lg"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FaStar className="text-yellow-500 animate-pulse" />
            </div>
        </div>
    );
};

export default SearchBar;