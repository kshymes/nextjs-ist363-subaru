import { scroller } from 'react-scroll';

import Button from './Button';
import Image from 'next/image';
import Heading from './Heading';

import styles from './showcase.module.scss';

const Showcase = ({ featuredImage, subtitle, title }) => {
    return <section className={styles.showcase}>
        {featuredImage &&
            <Image 
                src={featuredImage.node.sourceUrl}
                alt={featuredImage.node.altText}
                width={featuredImage.node.mediaDetails.width}
                height={featuredImage.node.mediaDetails.height}
                className={styles.showcase__image}
            />
        }
        <div className={styles.showcase__gradient}></div>
        <div className={styles.showcase__text}>
            <Heading level={3} color="white" marginBottom={1}>2024 {subtitle}</Heading>
            <Heading level={1} color="white" marginBottom={2}>{title}</Heading>
            <Button 
                type="primary"
                clickHandler={() => {
                    scroller.scrollTo("main-content", {
                        duration: 800,
                        delay: 0,
                        smooth: true
                    });
                }}
                > Learn more </Button>
        </div>
    </section>
}
export default Showcase;