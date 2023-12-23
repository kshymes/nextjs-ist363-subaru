import Image from 'next/image';

import styles from './navsocial.module.scss';


const NavSocial = () => {
    return <div className={styles.navSocial}>
        <ul className= "socialStyles">
            <li>
                <a href = "https://www.facebook.com/subaruofamerica">
                <Image
                    src="/icons/fb-icon.svg"
                    width={35}
                    height={25}
                />
                </a>
                <a href = "https://www.instagram.com/subaru_usa/">
                    <Image 
                        src="/icons/ig-icon.svg"
                        width={35}
                        height={25}
                    />
                </a>
                <a href = "https://twitter.com/subaru_usa">
                    <Image 
                        src="/icons/twt-icon.svg"
                        width={35}
                        height={25}
                    />
                </a>
                <a href = "https://www.youtube.com/@Subaru">
                    <Image 
                        src="/icons/yt-icon.svg"
                        width={35}
                        height={25}
                    />
                </a>
                <a href = "https://www.tiktok.com/@subaruofamerica?lang=en">
                    <Image 
                        src="/icons/tiktok.svg"
                        width={35}
                        height={25}
                    />
                </a>
            </li>
        </ul>
    </div>
}
export default NavSocial;