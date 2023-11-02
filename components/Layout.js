import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return <Fragment>
        <header>
            <main>
                {children}
            </main>
            <footer />
        </header>
    </Fragment>
}

export default Layout;