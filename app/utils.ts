export interface Pokemon {
  name: string;
  id: number;
}

export const getPokeData = async (): Promise<{ name: string; time: string }> => {
  const time = new Date().toLocaleTimeString();

  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch Pokemon data');
  }
  
  return { ...res.json(), time };
};

export const getPikachuData = async (): Promise<{ name: string; time: string }> => {
  const time = new Date().toLocaleTimeString();
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch Pokemon data');
  }
  
  return { ...res.json(), time };
};
