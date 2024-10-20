import '@nextjsportfolio/styles/globals.css'

//React...
import React, { useState } from 'react';

//NextJS...
import Link from 'next/link';
import type { AppProps } from 'next/app';

//Components...
import MobileNav from '@nextjsportfolio/components/mobileNav';
import LayoutComponent from '@nextjsportfolio/components/LayoutComponent';

//React icons...
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

//Styles...
import styles from "../styles/Home.module.scss";

import { motion } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {

  const [mobileNav, setMobileNav] = useState<boolean>(false);


  const [pageLoading, setPageLoading] = useState(false);

  //const navBarItems = ['projects', 'Resume', 'Contact'];


  const navBarItems = [
    { route: 'projects/Anime', name: 'Projects'}, 
    { route: 'resume', name: 'Resume'}, 
    // { route: 'contact', name: 'Contact'}, 
  ];

  // Animation variants for staggering
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggering delay for each item
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      {!pageLoading &&

        <nav 
          className={`${styles.floating_nav} main-font-family `} 
        >  
          {/* Stagger for Oscar Reyes */}
          <motion.div
            className={styles.home_link_container}
            initial="hidden"
            animate="visible"
            custom={0} // Starting item for the animation
            variants={navVariants}
          >
            <Link href={"/"}>Oscar Reyes</Link>
          </motion.div>

          {/* Stagger for NavBar Items */}
          <div className={styles.main_nav}>
            {
              navBarItems.map((item, i) => (
                <motion.li
                  key={item.route}
                  custom={i + 1} // Starting after Oscar Reyes (hence +1)
                  initial="hidden"
                  animate="visible"
                  variants={navVariants}
                >
                  <Link href={`/${item.route}`}>
                    {item.name}
                  </Link>
                </motion.li>
              ))
            }
          </div>

          {/* Stagger for Social Links */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={navBarItems.length + 1} // Social links stagger after all nav items
            variants={navVariants}
            className={styles.social_links}
          >
            <a href='https://github.com/lolster45' target='_blank'>
              <FaGithub/>
            </a>
            <a href='https://www.linkedin.com/in/oscar-reyes-denova-34b4a81a2/' target='_blank'>
              <FaLinkedin/>
            </a>
          </motion.div>

          {/* Hamburger Menu */}
          <div 
            className={`${styles.hamburger_menu} ${mobileNav ? styles.active : ""}`} 
            onClick={() => setMobileNav(prev => !prev)}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </nav>

      }



      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />  


      <Component {...pageProps} pageLoading={pageLoading} setPageLoading={setPageLoading}/>


      <footer 
        id={styles.footer}
        className='main-font-family'
      >
        <button onClick={() => console.log(pageLoading)}>CLICK ME</button>
        Designed and developed by me using NEXTJS, TypeScript, and SCSS
      </footer>
    </>
  );
}
