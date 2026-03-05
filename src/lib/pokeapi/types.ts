export enum PokeAPIResource {
    Pokemon = 'pokemon',
}

export type PokePaginationParams = {
    page: number;
    items?: number;
};

export type PokeResource = {
    url: string;
    name: string;
};

export type PokeUnnamedResource = Omit<PokeResource, 'name'>;

export type PokePaginatedResult<T extends PokeResource = PokeResource> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
};
