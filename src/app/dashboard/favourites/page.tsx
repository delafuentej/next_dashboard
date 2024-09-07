
import { PokemonsResponse, SimplePokemon, PokemonGrid, FavouritePokemons } from '@/pokemons';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Favourites',
    description: 'Section favourites pokemons'
}




const Pokemons = async() => {
  
    return (
        <div className='flex flex-col'>
            <span className='text-center my-6 text-4xl'>Favourites Pokemons<small className='text-blue-500'> Global State</small></span>
          <FavouritePokemons />
        </div>
    )
}

export default Pokemons;