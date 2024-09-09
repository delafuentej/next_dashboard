'use client';
import { useState, useEffect } from "react";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavouritePokemons = () => {

   
    const favouritePokemons = useAppSelector( state => Object.values(state.pokemons.favourites) );

   // const [favourites, setFavourites ]=useState(favouritePokemons);

    // useEffect(()=>{
    //   //console.log('favouritePokemons', favouritePokemons)
    //   setFavourites(favouritePokemons);
    // },[favouritePokemons]);

    console.log('favouritePokemons',favouritePokemons)
  return (
    <>
         { favouritePokemons.length === 0 ? (<NotFavourites /> ): (<PokemonGrid pokemons={favouritePokemons}/>)}
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
