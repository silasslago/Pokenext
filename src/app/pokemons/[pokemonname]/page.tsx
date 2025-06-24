export default async function PokemonName({
  params,
}: {
  params: Promise<{ pokemonname: string }>
}) {

  const data = await params

  return (
    <>
      <h1>{data.pokemonname}</h1>
    </>
  )
}