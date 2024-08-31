import React from 'react'



const getPokemons = async(limit= 20, offset=0)=>{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
                .then( res => res.json());

    return data;
};


const Pokemons = async() => {
    const pokemons = await getPokemons();
    console.log('pokemons', pokemons)
    return (
        <div>
            {JSON.stringify(pokemons)}
        </div>
    )
}

export default Pokemons;