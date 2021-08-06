export interface PokemonResult {
   name: string;
   url: string;
}

interface PokemonResultList {
   count: number;
   next: string;
   previous: string;
   results: PokemonResult[];
}

interface Ability {
   slot: number;
   is_hidden: boolean;
   ability: {
      name: string;
      url: string;
   };
}

interface Pokemon {
   id: number;
   name: string;
   order: number;
   weight: number;
   sprites: {
      back_default: string;
      back_female: string;
      back_shiny: string;
      back_shiny_female: string;
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
   };
   abilites: Ability[];
}

export class PokeAPI {
   private baseURL = 'https://pokeapi.co/api/v2';

   public getPokemonList(limit: number = 20): Promise<PokemonResultList> {
      return fetch(`${this.baseURL}/pokemon?limit=${limit}`).then((res) =>
         res.json()
      );
   }

   public getPokemonByName(name: string): Promise<Pokemon> {
      return fetch(`${this.baseURL}/pokemon/${name}`).then((res) => res.json());
   }

   public getPokemonById(id: number): Promise<Pokemon> {
      return fetch(`${this.baseURL}/pokemon/${id}`).then((res) => res.json());
   }
}
