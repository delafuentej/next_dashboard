'use client';
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const FavouritePokemons = () => {
    const favouritePokemons = useAppSelector( state => Object.values(state.pokemons) );
    console.log('favouritePokemons',favouritePokemons)
  return (
    <PokemonGrid 
    pokemons={favouritePokemons}
/>
  )
}
