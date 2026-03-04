import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';

export const kumbhSans = Kumbh_Sans({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Pokédex',
    description: 'Simple pokédex app based on the PokeAPI',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={kumbhSans.className}>{children}</body>
        </html>
    );
}
