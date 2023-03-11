import { useCounterStore } from './Store';
import { useEffect } from 'react';

export function PokemonList() {
  const getPokemons = useCounterStore(state => state.fetchPokemon)
  const pokemonList = useCounterStore(state => state.pokemon)
  useEffect(() => {
    getPokemons()
  }, [getPokemons])

  if (!pokemonList.length) {
    return "Loading"
  }

  return (
    <ol>
        {pokemonList.map(item => {
            return <li key={item.name}>{item.name}</li>
        })}
    </ol>
  );
}

