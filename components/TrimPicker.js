import { useState } from 'react';

import FormGroup from './FormGroup';
import Heading from './Heading';
import Image from 'next/image';
import Label from './Label';
import Select from './Select';

import styles from './trimpicker.module.scss';

const TrimPicker = ({ trims, locations }) => {
    const [] = useState();
    //state variable, setter function
    const [activeTrim, setActiveTrim] = useState(0);
    const [activeLocation, setActiveLocation] = useState(0);
    //create an array of objects
    //each object has a value and a label
    const trimOptions = trims.map((trim, index) => {
        const { name } = trim;
        return {
            label: name,
            value: index
        }
    });
    const locationOptions = locations.map((location, index) => {
        const { name } = location;
        return {
            label: name,
            value: index
        }
    });

    return <section className={styles.trimpicker}>
        <div className={styles.trimpicker__text}>
            <Heading 
                level={2} 
                color="white"
                marginBottom={2}
            >
                Picture Yourself Behind the Wheel
            </Heading>
            <form>
                <FormGroup>
                    <Label>I want to drive a...</Label>
                    <Select 
                        options={trimOptions} 
                        changeHandler={setActiveTrim}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Change the driving location to...</Label>
                    <Select 
                        options={locationOptions}
                        changeHandler={setActiveLocation}
                    />
                </FormGroup>
            </form>
        </div>
        <div className={styles.trimpicker__images}>
            <Image 
                src={`/backgrounds/series-background-${activeLocation +2}.jpg`}
                alt={`${locations[activeLocation].name}background`}
                width={1900}
                height={656}
                className={styles.trimpicker__images__background}
            />
            {trims[activeTrim].images.large&&
            <Image 
                src={trims[activeTrim].images.large.node.sourceUrl}
                alt={trims[activeTrim].images.large.node.altText}
                width={trims[activeTrim].images.large.node.mediaDetails.width}
                height={trims[activeTrim].images.large.node.mediaDetails.height}
                className={styles.trimpicker__images__foreground}
            />
            }
        </div>
    </section>
}
export default TrimPicker;