import classnames from 'classnames/bind';

import styles from '../components/button.module.scss'

let cx = classnames.bind(styles);

const Button = ({
    children,
    clickHandler,
    type
}) => {
    let buttonClasses = cx({
        btn: true,
        primary: type == 'primary',
        secondary: type == 'secondary'
    })
    return <button 
        className={buttonClasses}
        onClick={clickHandler}
    >
        {children}
    </button>
}
export default Button;