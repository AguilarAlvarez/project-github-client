"use client"
import React, { useState, useEffect } from 'react';
import PokemonCard from '../../components/search-country/CountryList';
import SearchBar from '../../components/search-country/SearchBar';
import PokemonList from '../../components/search-country/PokemonList';
import './styles.css';

const App = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
                const data = await response.json();
                const pokemonData = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        return await res.json();
                    })
                );
                setPokemons(pokemonData);
                setSelectedPokemon(pokemonData[0]); // Mostrar primer Pokémon por defecto
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching pokemons:", error);
            }
        };

        fetchPokemons();
    }, []);

    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-100 to-yellow-100 p-6">
            {/* Header festivo */}
            <header className="text-center mb-8">
                <h1 className="text-5xl font-bold text-red-600 mb-2">
                    🎊 PokéParty Dex 🎉
                </h1>
                <p className="text-xl text-blue-600">
                    ¡Encuentra tus Pokémon favoritos para la fiesta!
                </p>
            </header>

            {/* Componente principal */}
            {selectedPokemon && (
                <PokemonCard pokemon={selectedPokemon} />
            )}

            {/* Barra de búsqueda */}
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {/* Lista de resultados */}
            <PokemonList
                pokemons={filteredPokemons}
                onSelect={setSelectedPokemon}
                isLoading={isLoading}
            />
        </div>
    );
};

export default App;