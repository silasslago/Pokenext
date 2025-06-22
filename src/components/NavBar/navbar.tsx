import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/pokemons">
                        Pokemons
                    </Link>
                </li>
                <li>
                    <Link href="/sobre">
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}