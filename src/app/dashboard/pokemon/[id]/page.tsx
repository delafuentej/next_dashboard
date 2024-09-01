import React from 'react'
import { PokemonsResponse } from '@/pokemons';
interface Props {
    params: {id: string}
}

export const metadata = {
    title:'Pokemon Page',
    description: 'Pokemon Page Info',
}

const getPokemon = async(id: string): Promise<PokemonsResponse>=>{
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        cache:'force-cache'
    })
        .then( res => res.json());

    console.log('pokemon',pokemon);
    return pokemon;
};


const Pokemon = async({params}: Props) => {
   // console.log('props', {props})
   const pokemon = await getPokemon(params.id);
   console.log('pokemon', pokemon)
  return (
    <>
        <div>Pokemon {params.id}</div>
        <div>{JSON.stringify(pokemon)}</div>
    </>
    
  )
}
export default Pokemon;
