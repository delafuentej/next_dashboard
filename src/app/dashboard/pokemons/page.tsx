
import { PokemonsResponse, SimplePokemon, PokemonGrid } from '@/pokemons';
import Image from 'next/image';



const getPokemons = async(limit= 20, offset=0): Promise<SimplePokemon[]>=>{
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
                .then( res => res.json());
    
    const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    }))
    //throw new Error('This is a error');


    return pokemons;
};


const Pokemons = async() => {
    const pokemons = await getPokemons(151);
    console.log('pokemons', pokemons)
    return (
        <div className='flex flex-col'>
            <span className='text-center my-6 text-4xl'>Pokemon´s List<small className='text-blue-500'> static</small></span>
            <PokemonGrid 
                pokemons={pokemons}
            />
        </div>
    )
}

export default Pokemons;