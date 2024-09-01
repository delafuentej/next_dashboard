import React from 'react'
import { PokemonsResponse } from '@/pokemons';
import { Metadata } from 'next';
interface Props {
    params: {id: string}
}

// export const metadata = {
//     title:'Pokemon Page',
//     description: 'Pokemon Page Info',
// }

export const generateMetadata = async({params}: Props): Promise<Metadata>=>{
    const {id, name} = await getPokemon(params.id);
    return{
        title:`${id}-${name}`,
        description: `Pokemon Page Info: ${name} `,
    }
}
const getPokemon = async(id: string): Promise<PokemonsResponse>=>{
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        cache:'force-cache'
       // next: {
          //  revalidate: 60 * 60 * 30 * 6
       // }
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
        <div>{JSON.stringify(pokemon.name)}</div>
    </>
    
  )
}
export default Pokemon;
