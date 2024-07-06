//React...
import React, { useState } from 'react';

//NextJS...
import Link from 'next/link';

//Components...
import InfiniteScrollBar from '@nextjsportfolio/components/infiniteScrollBar';
import { useInView } from 'react-intersection-observer';

//React slick...
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Icons...
import { FiArrowRightCircle } from "react-icons/fi";
import { IoArrowBackCircleOutline } from "react-icons/io5";

//data...
import projData from "../../data";

//Styles...
import styles from "../../styles/Projects.module.scss";

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
        <div onClick={(e) => { onClick(e); leftScroll(); }} className={styles.left_arrow}>
            ←
        </div>
    );
};

const CustomNextArrow = (props: any) => {
    const { rightScroll, onClick } = props;
    return (
        <div onClick={(e) => { onClick(e); rightScroll(); }} className={styles.right_arrow}>
            →
        </div>
    );
};


const ProjectsPage = ({ data }: { data: SingleProject }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [fade, setFade] = useState(true);

 
    const rightScroll = () => {
        triggerFade();
        setCurrentIndex((prevIndex) => (prevIndex === data.videos.length - 1 ? 0 : prevIndex + 1));
    };

    const leftScroll = () => {
        triggerFade();
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.videos.length - 1 : prevIndex - 1));
    };

    //This is for the load in animation...
    const triggerFade = () => {
        setFade(false);
        setTimeout(() => {
            setFade(true);
        }, 300);
    };
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const settings = {
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow leftScroll={leftScroll} />,
        nextArrow: <CustomNextArrow rightScroll={rightScroll} />,
        //afterChange: (current: number) => setCurrentIndex(current),
    };

    const handleClick = (e: any) => {
        console.log(e.target.textContent)
        const destination = e.target.textContent

        if(destination === "Github") {
            window.open(data.links.Github, '_blank'); // Open link in a new tab
        }
        else if (destination === "Live") {
            window.open(data.links.live, '_blank'); // Open link in a new tab
        }
        else {
            console.log("error...")
        }
    };

    return (
        <section id={styles.projects_page} className="main-font-family">
            <nav>
                {data.searchTitle !== "Anime" && (
                    <Link className={styles.first_nav} href={`/projects/${projData[data.index - 1].searchTitle}`}>
                        <IoArrowBackCircleOutline />
                    </Link>
                )}
                {data.index < projData.length - 1 && (
                    <Link className={styles.second_nav} href={`/projects/${projData[data.index + 1].searchTitle}`}>
                        <FiArrowRightCircle />
                    </Link>
                )}
            </nav>
            <div id={styles.heading}>
                <h2>{data.displayTitle}</h2>
                <p>{data.text}</p>
            </div>
            <InfiniteScrollBar data={data.Images} />
            <div className={styles.project_link_buttons}>
                <div className={styles.box} >
                    <button className={styles.button} onClick={handleClick}>Github</button>
                    <div className={styles.space}>
                        {
                            [31, 12, 57, 93, 23, 70, 6].map((value, index) => (
                                <span 
                                    key={index} 
                                    className={styles.star}
                                    style={{ '--i': value } as React.CSSProperties} 
                                >                                   
                                </span>

                            ))
                        }
                    </div>
                </div>     
                <div className={styles.box}>
                    <button className={styles.button} onClick={handleClick}>Live</button>
                    <div className={`${styles.space} ${styles.color}`}>
                        {
                            [31, 12, 57, 93, 23, 70, 6].map((value, index) => (
                                <span 
                                    key={index} 
                                    className={styles.star}
                                    style={{ '--i': value } as React.CSSProperties} 
                                >                                   
                                </span>

                            ))
                        }
                    </div>
                </div>
            </div>
            <div id={styles.projects_info}>
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
                </div>
                <div id={styles.projects_right_side}>
                    <p className={fade ? styles.active : ''}>
                        {data.videos[currentIndex].text}
                    </p>
                </div>
            </div>      
        </section>
    );
};

export async function getStaticPaths() {
    const paths = projData.map((proj) => ({
        params: { projectID: proj.searchTitle },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const { projectID } = params;
    const data = projData.find((proj) => proj.searchTitle === projectID);

    return {
        props: { data },
    };
}

export default ProjectsPage;