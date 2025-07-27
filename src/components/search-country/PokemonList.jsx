import React from 'react';

const PokemonList = ({ pokemons, onSelect, isLoading }) => {
    if (isLoading) {
        return (
            <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-600"></div>
                <p className="mt-2 text-red-700">Cargando Pokémon...</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pokemons.map(pokemon => (
                <div
                    key={pokemon.id}
                    onClick={() => onSelect(pokemon)}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer border-b-4 border-red-400 hover:border-yellow-400 text-center"
                >
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="w-24 h-24 mx-auto hover:scale-110 transition-transform"
                    />
                    <h3 className="font-bold text-red-600 capitalize mt-2">{pokemon.name}</h3>
                    <p className="text-sm text-gray-600">#{pokemon.id.toString().padStart(3, '0')}</p>
                </div>
            ))}
        </div>
    );
};

export default PokemonList;