import Container from './Container';

import styles from './footer.module.scss';

const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
            footer goes here.
        </Container>
    </footer>
}

export default Footer;