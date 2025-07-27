import React from 'react';

const PokemonCard = ({ pokemon }) => {
    const types = pokemon.types.map(t => t.type.name).join(', ');
    const abilities = pokemon.abilities.map(a => a.ability.name).join(', ');

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 mb-8 transform transition-all duration-300 border-4 border-blue-400">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Imagen Pokémon */}
                <div className="flex-shrink-0 ">
                    <img
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt={pokemon.name}
                        className="w-52 h-52 object-contain animate-bounce"
                    />
                </div>

                {/* Información */}
                <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-red-600 mb-1 capitalize">
                        {pokemon.name}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                        #{pokemon.id.toString().padStart(3, '0')}
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-semibold text-blue-600">✨ Tipo</p>
                            <p className="capitalize">{types}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-blue-600">🦾 Habilidades</p>
                            <p className="capitalize">{abilities}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-blue-600">⚖️ Peso</p>
                            <p>{(pokemon.weight / 10).toFixed(1)} kg</p>
                        </div>
                        <div>
                            <p className="font-semibold text-blue-600">📏 Altura</p>
                            <p>{(pokemon.height / 10).toFixed(1)} m</p>
                        </div>
                        <div>
                            <p className="font-semibold text-blue-600">❤️ HP</p>
                            <p>{pokemon.stats[0].base_stat}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-blue-600">💪 Ataque</p>
                            <p>{pokemon.stats[1].base_stat}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;