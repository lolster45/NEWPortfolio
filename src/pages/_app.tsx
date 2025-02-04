import '@nextjsportfolio/styles/globals.css'

//React...
import React, { useRef, useState } from 'react';

//NextJS...
import type { AppProps } from 'next/app';

//Components...
import MobileNav from '@nextjsportfolio/components/mobileNav';
import { motion } from 'framer-motion';


//Styles...
import styles from "../styles/Home.module.scss";


export default function App({ Component, pageProps }: AppProps) {

  //State for my mobile nav...
  const [mobileNav, setMobileNav] = useState<boolean>(false);


  //Transition page...
  const [pageLoading, setPageLoading] = useState(false);


  const navBarItems = [
    { route: 'projects/vivabikesaustin', name: 'Projects'}, 
    { route: 'resume', name: 'Resume'}, 
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

  const contactSectionRef = useRef<HTMLElement>(null)
  const scrollToSection = () => {
    if(contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }


  return (
    <>
      {!pageLoading &&
        <nav 
          className={`${styles.floating_nav} main-font-family `} 
        >  
          {/* <motion.div
            className={styles.home_link_container}
            initial="hidden"
            animate="visible"
            custom={0} // Starting item for the animation
            variants={navVariants}
          >
            <Link href={"/"}>Oscar Reyes</Link>
          </motion.div> */}
          {/* <div className={styles.main_nav}>
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
          </div> */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={navBarItems.length + 1} // Social links stagger after all nav items
            variants={navVariants}
            className={styles.social_links}
          >
            <a 
              onClick={scrollToSection}
              className="bebas-neue-regular"
            >
                CONTACT ME
            </a>
          </motion.div>
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
      <Component 
        {...pageProps} 
        pageLoading={pageLoading} 
        setPageLoading={setPageLoading}
      />
      <footer 
        ref={contactSectionRef}
        id={styles.footer}
        className='main-font-family'
      >
        Designed and developed by me using NEXTJS, TypeScript, and SCSS
      </footer>
    </>
  );
}