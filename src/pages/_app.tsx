import '@nextjsportfolio/styles/globals.css'

//React...
import React, { useState } from 'react';

//NextJS...
import Link from 'next/link'
import type { AppProps } from 'next/app'

//Components...
import MobileNav from '@nextjsportfolio/components/mobileNav';

//React icons...
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

//Styles...
import styles from "../styles/Home.module.scss"

export default function App({ Component, pageProps }: AppProps) {

  const [mobileNav, setMobileNav] = useState<boolean>(false);

  return (
    <>
      <nav id={styles.floating_nav} className='main-font-family'>  
        <Link href={"/"}>Oscar Reyes</Link>
        <div className={styles.main_nav}>
          <Link href="/projects/Anime">
            Projects
          </Link>
          <Link href="/resume">
            Resume
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
        <div className={styles.social_links}>
              <a href='https://github.com/lolster45' target='_blank'>
                <FaGithub/>
              </a>
              <a href='https://www.linkedin.com/in/oscar-reyes-denova-34b4a81a2/?profileId=ACoAAC9qMesBdOfyvbt0Ge9xOPdena9LpMmVvhY' target='_blank'>
                <FaLinkedin/>
              </a>
        </div>

        <div 
            className={`${styles.hamburger_menu} ${mobileNav ? styles.active : ""}`} 
            onClick={() => setMobileNav(prev => !prev)}
          >
            {/* This is the actualy hamburger menu icon... */}
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </div>

        
      </nav>
      


      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />  
      <Component {...pageProps} />
    </>
  )
}
