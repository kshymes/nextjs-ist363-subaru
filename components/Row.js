import classnames from 'classnames/bind';

import styles from './row.module.scss';

const cx = classnames.bind(styles);

const Row = ({ children, justifyContent }) => {
    const rowClasses = cx({
        row: true,
        [`justify-content-${justifyContent}`] : justifyContent
    });
    return <div className={rowClasses}>{children}</div>
}
export default Row;