//React...
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

//NextJS...
import Link from 'next/link';

//Components...
import InfiniteScrollBar from '@nextjsportfolio/components/infiniteScrollBar';
import SpaceButton from '@nextjsportfolio/components/SpaceButton';
import { motion } from 'framer-motion'

//React Icons...
import { FiArrowRightCircle } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";

//data...
import { data } from "../../data";

//Styles...
import styles from "../../styles/Projects.module.scss";
import ScrollBackground from '@nextjsportfolio/components/ScrollBackground';
import LoadingScreen from '@nextjsportfolio/components/LoadingScreen';



interface Links {
    Github: string,
    live: string
}
export interface Icon {
    img: string, 
    name: string
}
export interface SingleProject {
    index: number;
    searchTitle: string;
    displayTitle: string;
    links: Links;
    colors: {
        featuredColor: string,
        headerColor: string,
        paragraphBgColor: string,
        textColor: string,
        challengeParaBgColor: string
    };
    backgroundImages: string[];
    mainImg: string;
    icons: Icon[];
    subImgs: string[];
    challengeImage: string;
    paragraphs: {
        challengeP: string;
        textOne: string;
        textTwo: string;
        textThree: string;
    }
    text: string;
}



const ProjectsPage = ({ dataM, pageLoading, setPageLoading }: {dataM: SingleProject, pageLoading: boolean, setPageLoading: any}) => {

    const router = useRouter();

    // Set up loading animation on route change
    useEffect(() => { 
        const handleRouteChangeStart = (url: string) => {
            console.log('route started to change')

            if(url.split('/')[1] !== 'projects'){
                setPageLoading(false);
                return;
            }

            setPageLoading(true)
        };
    
        const handleRouteChangeComplete = (url: string) => {
            // Fire after 1.5 seconds to allow for transition animation
            setTimeout(() => {
                setPageLoading(false);
            }, 1500); // 1.5 seconds delay
        };
    
        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
    
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, [router.events]);
    

    //Framer motion settings for animations...
    const parentVarients = {
        visible: {
            transition: {
                staggerChildren: 1
            }
        },
        hidden: {}
    }
    const leftCardVariants = {
        hiddenLeft: { y: '-15px', opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                type: 'spring', 
                stiffness: 50, 
                delay: 0.7
            } 
        },
    };
    const rightCardVariants = {
        hiddenRight: { y: '-15px', opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { 
                type: 'spring', 
                stiffness: 50, 
                delay: 0.9
            } 
        },
    };


    return (
        <section id={styles.projects_page} className='main-font-family'>
            <LoadingScreen loading={pageLoading}/>
            <ScrollBackground data={dataM}/> 
            {!pageLoading &&
            <>
                <nav className={`${pageLoading === false ? styles.active : ''}`}>
                    {dataM.searchTitle !== "Anime" && (
                        <Link 
                            className={styles.first_nav} 
                            href={`/projects/${data[dataM.index - 1].searchTitle}`}
                        >
                            <IoArrowBackCircleOutline />
                        </Link>
                    )}
                    {dataM.index < data.length - 1 && (
                        <Link 
                            className={styles.second_nav} 
                            href={`/projects/${data[dataM.index + 1].searchTitle}`}
                        >
                            <FiArrowRightCircle />
                        </Link>
                    )}
                </nav> 
                <motion.div 
                    id={styles.heading}
                    initial='hidden'
                    animate='visible'
                    variants={parentVarients}
                >
                    <motion.div
                        className={styles.left_card}
                        initial='hiddenLeft'
                        animate='visible'
                        variants={leftCardVariants}
                    >
                        <div 
                            className={styles.featured} 
                            style={{color: `#${dataM.colors.featuredColor}`}}
                        >
                            Featured Project
                        </div>
                        <h2 style={{color: `#${dataM.colors.headerColor}`}}>{dataM.displayTitle}</h2>
                        <p style={{color: `#${dataM.colors.textColor}`, backgroundColor: `#${dataM.colors.paragraphBgColor}`}}>{dataM.text}</p>

                    </motion.div>

                    <motion.div
                        className={styles.right_card}
                        initial='hiddenRight'
                        animate='visible'
                        variants={rightCardVariants}
                    >
                        <img src={dataM.mainImg} alt="main image showing off the project i built, also known as the homepage of my website" />

                    </motion.div>

                </motion.div>
                <InfiniteScrollBar data={dataM.icons} />
                <div className={styles.project_link_buttons}>
                    <SpaceButton data={dataM} text={"Github"}/>
                    <SpaceButton data={dataM} text={"Live"}/>
                </div>  
                {dataM.subImgs.map(img => {
                    return (
                        <img 
                            className={styles.images}
                            src={img}
                            alt='image of my project website and it features and pages'
                        />
                    )
                })}
                <div className={styles.challenge}>
                    <div className={styles.left_challenge}>
                        <svg 
                            height="1000" 
                            width="500" 
                            xmlns="http://www.w3.org/2000/svg" 
                        >
                            <circle r="450" cx="40" cy="480" fill="transparent" stroke='white'/>
                            <text 
                                x="80" 
                                y="200" 
                                fill="white" 
                                font-size="24"
                                className='anton-regular'
                            >
                                CHALLENGE
                            </text>
                        </svg> 

                        <p 
                            className={`anton-regular ${styles.challenge_para}`}
                            style={{backgroundColor: `#${dataM.colors.challengeParaBgColor}`}}
                        >
                            {dataM.paragraphs.challengeP}
                        </p>

                    </div>
                    <img src={dataM.challengeImage} alt="" />
                </div>
                <div className={styles.more_info}>
                    <h2>Redesign</h2>
                    <div className={styles.more_info_para_wrap}>
                        <p>{dataM.paragraphs.textOne}</p>
                        <p>{dataM.paragraphs.textTwo}</p>
                        <p>{dataM.paragraphs.textThree}</p>
                    </div>
                </div>
            </>
            }   
        </section>
    );
};

export async function getStaticPaths() {
    const paths = data.map((proj) => ({
        params: { projectID: proj.searchTitle },
    }));
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }: any) {
    const { projectID } = params;
    const dataM = data.find((proj) => proj.searchTitle === projectID);
    return {
        props: { dataM },
    };
}

export default ProjectsPage;