import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import ButtonUI from './ButtonUI';
import Container from './Container';
import Link from 'next/link';
import Logo from './Logo';
import Nav from './Nav';
import Row from './Row';

import styles from './header.module.scss';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    
    return <header className={styles.header}>
        <Container>
            <Row justifyContent= "space-between">
                <Link href="/">
                    <Logo />
                </Link>
                <Nav.Desktop />
                <ButtonUI 
                    icon="menu" 
                    clickHandler={() => {
                        setIsMobileNavOpen(true);
                    }}
                />
                <AnimatePresence>
                    {isMobileNavOpen &&  <Nav.Mobile closeHandler={() => {
                        setIsMobileNavOpen(false);
                    }} />}    
                </AnimatePresence>          
            </Row>
        </Container>
    </header>
}

export default Header;