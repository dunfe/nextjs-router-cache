export interface Pokemon {
  name: string;
  id: number;
}

export const getPokeData = async (): Promise<Pokemon> => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch Pokemon data');
  }
  
  return res.json();
};

export const getPikachuData = async (): Promise<Pokemon> => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch Pokemon data');
  }
  
  return res.json();
};
