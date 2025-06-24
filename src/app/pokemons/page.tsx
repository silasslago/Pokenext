import Link from "next/link";

interface Pokemon {
  name: string,
  url: string
}

interface PokemonPage {
  count: number,
  next: string,
  previous: number | null,
  results: Array<Pokemon>
}

export default async function Test() {

  const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
  const pokemons: PokemonPage = await data.json();

  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {pokemons.results.map(pokemon => <li key={pokemon.name}>
            <Link 
              key={"link_"+pokemon.name} 
              href={"/pokemons/"+pokemon.name}
            >
              {pokemon.name}
            </Link>
          </li>
        )}
      </ul>
    </>
  )
}