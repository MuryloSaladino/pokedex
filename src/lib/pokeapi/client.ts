import { PokeAPIResource, PokePaginatedResult, PokePaginationParams } from './types';

export class PokeAPI {
    private readonly baseUrl = 'https://pokeapi.co/api/v2';

    async get(resource: PokeAPIResource, id: string | number) {
        const url = `${this.baseUrl}/${resource}/${id}`;
        const response = await fetch(url);
        return await response.json();
    }

    async list(
        resource: PokeAPIResource,
        { page = 1, items = 20 }: PokePaginationParams
    ): Promise<PokePaginatedResult> {
        const limit = items.toString();
        const offset = (items * (page - 1)).toString();

        const params = new URLSearchParams({ limit, offset });
        const url = `${this.baseUrl}/${resource}?${params}`;

        const response = await fetch(url);
        return await response.json();
    }
}
