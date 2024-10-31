//React/NextJS...
import React from 'react';
import Link from 'next/link';

//Styles...
import styles from "../styles/MobileNav.module.scss"

interface MobileNavProps {
    mobileNav: boolean;
    setMobileNav: (value: boolean | ((prev: boolean) => boolean)) => void;
}
  
const MobileNav: React.FC<MobileNavProps> = ({mobileNav, setMobileNav}) => {

    const removeNav = () => {
        setMobileNav(false);
    }

    return (
        <div 
            className={`${styles.mobile_nav} ${mobileNav ? styles.active : ""} main-font-family`}
            onClick={removeNav}
        >
            <div onClick={(e) => e.stopPropagation()} className={styles.actual_menu_mobile}>
                <ul>
                    <Link onClick={removeNav} href="/">Home</Link>
                    <Link onClick={removeNav} href="/projects/Anime">Projects</Link >
                    <Link onClick={removeNav} href="/resume">Resume</Link >
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;