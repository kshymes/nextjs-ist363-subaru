import styles from './filterbar.module.scss';

const FilterBar = ({ items }) => {
    return <div className={styles.filterBar}>
            <ul className={styles.filterBarList}>
                {items.map((item, index) => {
                    const { name, slug } = item.node;
                    return <li key={index} className={styles.filterBarListItem}>
                        <button>
                            {name}
                        </button>
                    </li>
                })}
            </ul>
        </div>
}
export default FilterBar;