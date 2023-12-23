import Container from './Container';
import Copyright from './Copyright';
import Heading from './Heading';
import NavSocial from './NavSocial';
import Paragraph from './Paragraph';

import styles from './footer.module.scss';

const Footer = () => {
    return <footer className={styles.footer}>
        <Heading level={3} textAlign="center">
            Connect With Us!
        </Heading>
        <NavSocial></NavSocial>
        <Copyright></Copyright>
    </footer>
}

export default Footer;