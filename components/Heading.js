import classnames from 'classnames/bind';
import styles from './heading.module.scss';

const cx = classnames.bind(styles);

const Heading = ({ children, color, level, textAlign, marginBottom, marginTop, marginLeft, marginRight, paddingBottom, paddingTop, paddingLeft, paddingRight }) => {
    const Tag = level > 6 ? 'h6' : `h${level}`;

    const headingClasses = cx({
        heading: true, 
        [`heading${level}`] : level,
        [`font-color-${color}`] : color,
        [`margin-bottom-${marginBottom}`] : marginBottom,
        [`margin-top-${marginTop}`] : marginTop,
        [`margin-left-${marginLeft}`] : marginLeft,
        [`margin-right-${marginRight}`] : marginRight,
        [`text-align-${textAlign}`] : textAlign,
        [`padding-bottom-${paddingBottom}`] : paddingBottom,
        [`padding-top-${paddingTop}`] : paddingTop,
        [`padding-left-${paddingLeft}`] : paddingLeft,
        [`padding-right-${paddingRight}`] : paddingRight
    });
    
    return <Tag className={headingClasses}>{children}</Tag>
}
export default Heading;