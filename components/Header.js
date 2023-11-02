import Link from 'next/link';

const Header = () => {
    return <header>
        Header goes here.
        logo <br />
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                    <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
                </li>
            </ul>
        </nav>
        
        </header>
}

export default Header;