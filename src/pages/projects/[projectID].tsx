//React...
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//NextJS...
import Link from 'next/link';

//Components...
import InfiniteScrollBar from '@nextjsportfolio/components/infiniteScrollBar';
import { useInView } from 'react-intersection-observer';
import SpaceButton from '@nextjsportfolio/components/SpaceButton';

import { motion } from 'framer-motion'


//React slick...
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Icons...
import { FiArrowRightCircle } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

//data...
import { data } from "../../data";

//Styles...
import styles from "../../styles/Projects.module.scss";
import ScrollBackground from '@nextjsportfolio/components/ScrollBackground';
import LoadingScreen from '@nextjsportfolio/components/LoadingScreen';

interface Video {
    src: string;
    text: string;
}
interface Image {
    img: { src: string };
    name: string;
}
interface Links {
    Github: string,
    live: string
}
interface SingleProject {
    index: number;
    searchTitle: string;
    displayTitle: string;
    links: Links;
    videos: Video[];
    Images: Image[];
    text: string;
    github_link: string;
    live_proj: string;
}

//Customs arrow functions for react slick nav sliders...
const CustomPrevArrow = (props: any) => {
    const { leftScroll, onClick } = props;
    return (
        <div onClick={(e) => { onClick(e); leftScroll(); }} className={`${styles.arrow} ${styles.left_arrow}`}>
            <BsChevronLeft/>
        </div>
    );
};

const CustomNextArrow = (props: any) => {
    const { rightScroll, onClick } = props;
    return (
        <div onClick={(e) => { onClick(e); rightScroll(); }} className={`${styles.arrow} ${styles.right_arrow}`}>
            <BsChevronRight/>
        </div>
    );
};


const ProjectsPage = ({ dataM, pageLoading, setPageLoading }: any) => {

    //const [loading, setLoading] = useState(false);

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
    



    //const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [fade, setFade] = useState(true);

    //Animations for react slick when users clicks the arrows to navigate thorugh videos...
    // const rightScroll = () => {
    //     triggerFade();
    //     setCurrentIndex((prevIndex) => (prevIndex === data.videos.length - 1 ? 0 : prevIndex + 1));
    // };
    // const leftScroll = () => {
    //     triggerFade();
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.videos.length - 1 : prevIndex - 1));
    // };

    //This is for the load in animation...
    const triggerFade = () => {
        setFade(false);
        setTimeout(() => {
            setFade(true);
        }, 300);
    };
    // const { ref, inView } = useInView({
    //     threshold: 0,
    //     triggerOnce: true,
    // });

    // const settings = {
    //     dots: false,
    //     speed: 500,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: <CustomPrevArrow leftScroll={leftScroll} />,
    //     nextArrow: <CustomNextArrow rightScroll={rightScroll} />,
    // };


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


                <img 
                    className={styles.images} 
                    src={dataM.subImgs[0]} 
                    alt="image of the website showing off its features" 
                />
                <img 
                    className={styles.images} 
                    src={dataM.subImgs[1]} 
                    alt="image of the website showing off its features" 
                />
                <img 
                    className={styles.images} 
                    src={dataM.subImgs[2]} 
                    alt="image of the website showing off its features" 
                />
                <img 
                    className={styles.images} 
                    src={dataM.subImgs[3]} 
                    alt="image of the website showing off its features" 
                />


                {/* <div id={styles.projects_info}>
                    <div ref={ref} className={`${styles.projects_left_side} ${inView ? styles.inView : ""}`}>
                        <Slider {...settings} className={styles.actual_slider}>
                            {data.videos.map((video, index) => (
                                <div key={index} className={styles.video_slide}>
                                    {index === currentIndex && (
                                        <video
                                            src={video.src}
                                            className={styles.actual_video}
                                            autoPlay
                                            muted
                                            loop
                                        />
                                    )}
                                </div>
                            ))}
                        </Slider> 
                        <span id={styles.slide_show_num}>{currentIndex + 1} / {data.videos.length}</span>
                    </div>
                    <div id={styles.projects_right_side}>
                        <p className={fade ? styles.active : ''}>
                            {data.videos[currentIndex].text}
                        </p>
                    </div>
                </div>  */}

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
                            This project was the very first big project I attempted to build. Starting from a simple site, to a more complex site with a backend and three sections working simultaenously, many challenges have popped up. One of many being, how to persist data on refresh, which sounds like an amateur concept to any experienced developer, but to me at the time, this was a 'Holy Sh*t' moment.
                        </p>

                    </div>
                    <img src={dataM.longImage} alt="" />
                </div>


                <img className={styles.old_anime_pic} src="/oldAnimePicProj.png" alt="" />

                <div className={styles.more_info}>
                    <h2>Redesign</h2>

                    <p>
                        Going from a mess of a site (sorry old site) to current modern refreshing look was adeous task. Struggling to create something beautiful and creative to trasnfer into code requires a special type of skill, so I racked my brain for ideas on what to do. So naturally, I typed figma into my search bar and searched designs.
                    </p>


                    <p>At the time of making this 'masterpiece', I thought to myself 'Do I have to much power?'. To me, this felt like I had some enlightemnet, to have been able to figure everything out, to finally work with a REST API and managed to connect everything in one piece, I felt like a Genius. But like any ohter coder will tell you, I quickly figured out this was not the case...</p>

                    <p>From rags to riches some say, but I went the other way. From so high and mighty to saying 'Wow... Im horrible'. A quick google search will do the trick, one look at the competition and poof, all my pride shattered... well not really. This was an eye opener for me to not be complacent, to strive to become better every single day. I slowly started building getting better and better.</p>



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