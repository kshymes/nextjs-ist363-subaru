//core import
import { motion } from "framer-motion";

//custom components
import ButtonUI from './ButtonUI';
import Link from 'next/link';

//styles
import styles from './nav.module.scss';

//utility functions
import { getDesktopNavItems, getMobileNavItems } from '../lib/nav';

const Nav = () => {
    return <nav className={styles.nav}>Nav goes here.</nav>
}
const Desktop = () => {
    const navItems = getDesktopNavItems();
    return <nav className={styles.nav__desktop}>
        <ul className={styles.nav__list}>
            {navItems.map((navItem, index) => {
                const { label, slug } = navItem;
                return <li key={index} className={styles.nav__list__item}>
                    <Link href={`/${slug}`}>
                        {label}
                    </Link>
                </li>
            })}
        </ul>
    </nav>
}
//compound components
Nav.Desktop= Desktop;

const Mobile = ({ closeHandler }) => {
    const navItems = getMobileNavItems();
    const mobileNavVariants = {
        closed: {
            left: '-100%'
        },
        open: {
            left: 0,
        }
    }
    const listVariants = {
        closed: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }
    const itemVariants = {
        closed: {
            x: -50,
            opacity: 0
        },
        open: {
            x: 0,
            opacity: 1
        }
    }

    return <motion.nav 
        className={styles.nav__mobile}
        initial= "closed"
        animate= "open"
        exit= "closed"
        variants= {mobileNavVariants}
    >
        <ButtonUI 
            icon="close"
            clickHandler={closeHandler} 
        />
        <motion.ul 
            className={styles.nav__list}
            variants={listVariants}
        >
            {navItems.map((navItem, index) => {
                const { label, slug } = navItem;
                return <motion.li 
                    key={index} 
                    className={styles.nav__list__item}
                    variants={itemVariants}
                    >
                    <Link href={`/${slug}`}>
                        {label}
                    </Link>
                </motion.li>
            })}
        </motion.ul>
    </motion.nav>
}
Nav.Mobile = Mobile;

export default Nav;