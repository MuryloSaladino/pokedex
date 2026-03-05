import { PokeAPI, PokeAPIResource } from '@/lib/pokeapi';
import { NextSearchParams } from '@/types';
import Link from 'next/link';

export default async function Page({ searchParams }: { searchParams: NextSearchParams }) {
    const pokeApi = new PokeAPI();

    const { page: pageParam } = await searchParams;
    const page = Math.max(Number(pageParam ?? 1), 1);
    const items = 20;

    const { results, count } = await pokeApi.list(PokeAPIResource.Pokemon, { items, page });

    const maxPage = Math.ceil(count / items);
    const nextLink = `?page=${Math.min(maxPage, page + 1)}`;
    const prevLink = `?page=${Math.max(1, page - 1)}`;

    return (
        <div>
            <ul>
                {results.map(({ name }, i) => (
                    <li key={name}>
                        {items * (page - 1) + i + 1} {name}
                    </li>
                ))}
            </ul>

            <div style={{ display: 'flex', gap: '10px' }}>
                <Link href={prevLink}>Prev</Link>
                <Link href={nextLink}>Next</Link>
            </div>
        </div>
    );
}
