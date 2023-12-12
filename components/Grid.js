import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

import styles from './grid.module.scss';

const Grid = ({ items }) => {
    const sectionVariants = {
        closed: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: {
                staggerChldren: 0.2
            }
        }
    }
    const articleVariants = {
        close: {
            y: 50,
            opacity: 0
        },
        open: {
            y: 0,
            opacity: 1
        }
    }

    return <motion.section 
        initial="closed"
        animate="open"
        variants={sectionVariants}
        className={styles.grid}>
        {items.map((item, index) => {
                const { title, slug, vehicleInformation } = item.node;
                const { trimLevels } = vehicleInformation;
                return <motion.article 
                    key={index}
                    variants={articleVariants}>
                        {trimLevels && trimLevels[0].images.thumbnail && 
                        <Image 
                            src={trimLevels[0].images.thumbnail.node.sourceUrl}
                            alt={trimLevels[0].images.thumbnail.node.altText}
                            width={trimLevels[0].images.thumbnail.node.mediaDetails.width}
                        height={trimLevels[0].images.thumbnail.node.mediaDetails.height}
                        />
                        }
                <h3>{title}</h3>
                <Link href={`/vehicles/${slug}`}>Learn More</Link>
                </motion.article>
            })}
    </motion.section>
}

export default Grid;