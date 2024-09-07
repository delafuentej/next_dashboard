'use client';

import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { useAppDispatch, useAppSelector } from "@/store";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { toggleFavourite } from "@/store/pokemons/pokemonsSlice";

interface Props {
    pokemon: SimplePokemon;  
}

export const PokemonCard = ({pokemon}: Props) => {
    const {id, name} = pokemon;

    const isFavourite = useAppSelector( state => !!state.pokemons[id])
    const dispatch = useAppDispatch();
    // console.log('isFavourite', isFavourite)

    const onToggleFavourite = () => {
       dispatch(toggleFavourite(pokemon));
        
    }
    
  return (
             <div className=" mx-auto right-0 mt-2 w-60">
                    <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b ">
                             <Image 
                                key={id}
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                width= {100}
                                height= {100}
                                alt={name}
                                // lazy-load priority=> for images to be uploaded on demand
                                priority={false}

                     />
                        
                        <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
                       
                        <div className="mt-5">
                            <Link
                                href={`/dashboard/pokemons/${name}`}
                                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                            >
                            More Info...
                            </Link>
                        </div>
                        </div>
                        <div className=" flex justify-center border-b">
                            <div 
                                onClick={onToggleFavourite}
                                className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer" >
                              
                                    <div className="text-red-600 text-center">
                                        { isFavourite ?  (<IoHeart size={25}/>) :  (<IoHeartOutline size={25}/>)}
                                   
                                    </div>
                                    <div className="pl-3">
                                    <p className="text-sm font-medium text-gray-800 leading-none">
                                        { isFavourite ? 'Favourite': 'Not favourite'}
                                    </p>
                                    <p className="text-xs text-gray-500">Click here to change</p>
                                    </div>
                            
                            </div>
                            
                        </div>
    
                       
                    </div>
                </div>
  )
}
