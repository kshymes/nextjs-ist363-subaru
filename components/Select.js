import styles from './select.module.scss';

const Select = ({ changeHandler, options }) => {
    return <select 
        className={styles.select}
        onChange={(event) => {
            event.preventDefault();
            changeHandler(parseInt(event.target.value));
        }}
    >
        {options?.map((option, index) => {
           const { label, value } = option;
           return <option key={index} value={value}>{label}</option> 
        })}
    </select>
}
export default Select;