'use client';
import { useState } from "react";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavouritePokemons = () => {

   
    const favouritePokemons = useAppSelector( state => Object.values(state.pokemons) );

    const [favourites, setFavourites ]=useState(favouritePokemons);

    console.log('favouritePokemons',favouritePokemons)
  return (
    <>
         { favourites.length === 0 ? (<NotFavourites /> ): (<PokemonGrid pokemons={favourites}/>)}
    </>
   
   
  )
}

const NotFavourites = () => {
    return(
        <div className='flex flex-col h-[50vh] items-center justify-center'>
            <IoHeartOutline size={150} className='text-red-500' />
            <span>There are not favourites</span>
        </div>
    )
}
