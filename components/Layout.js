import { Fragment } from 'react';
import CallToAction from './CallToAction';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return <Fragment>
        <Header/>
            <main>
                {children}
            </main>
            <div id="call-to-action">
            <CallToAction />
        </div>
            <Footer />
    </Fragment>
}

export default Layout;