//React...
import React, { useState, useRef } from 'react';
import Image from 'next/image';

//Components...
import { useInView } from 'react-intersection-observer';

//React slick...
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Images...
import Profile from "../../public/ProfilePic.jpg"

//Styles...
import styles from '../styles/About.module.scss';

const About = () => {

    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_: any, newIndex: number) => setCurrentSlide(newIndex),
    };

    const goToSlide = (slideNumber: number) => {
        if(sliderRef.current) {
            sliderRef.current.slickGoTo(slideNumber);
        }
    };

    const { ref, inView } = useInView({
        threshold: 0.40, // Adjust this value as needed
        triggerOnce: true, // Trigger only once
    });

    return (
        <section id={styles.about_me_page} className="main-font-family">
            <main id={styles.main} ref={ref} className={`${inView ? styles.active : ""}`}>
                <h1>Experience and Skills</h1>
                <div>
                    <nav>
                        <span
                            className={currentSlide === 0 ? styles.active : ""} 
                            onClick={() => goToSlide(0)}
                        >
                            ABOUT
                        </span>
                        <span
                            className={currentSlide === 1 ? styles.active : ""} 
                            onClick={() => goToSlide(1)}
                        >
                            SKILLS
                        </span>
                        <span
                            className={currentSlide === 2 ? styles.active : ""} 
                            onClick={() => goToSlide(2)}
                        >
                            EXPERIENCE
                        </span> 
                    </nav>
                    <section className={styles.carousel_section}>
                        <Slider ref={sliderRef} {...settings}>
                            <div id={styles.about_me}>
                                <div id={styles.left_side_aboutMe}>
                                    <p>
                                        Hi, my name is Oscar Reyes, and I am an aspiring self-taught Front-End Web Developer. My journey into web development began back in high school, but it wasn't until 2022 that I truly immersed myself in it. Now, almost two years later, I can’t get enough of the amazing world that React and other technologies have to offer.
                                        <br />
                                        <br />
                                        I’ve built numerous projects with React and have even made them full-stack using Firebase and NodeJS, which I find incredibly rewarding when everything comes together. Through these experiences, I've come to realize the importance of debugging, and I've learned to embrace it as a key part of the process.
                                    </p>
                                        <div>
                                        <span>
                                            <h3>Experience</h3>
                                            <span>2+ years</span>
                                        </span>
                                        <span>
                                            <h3>Location</h3>
                                            <span>Austin, TX</span>
                                        </span>
                                        <span>
                                            <h3>Hobbies</h3>
                                            <span>Reading, Writing, Piano</span>
                                        </span>
                                        </div>
                                    </div>
                                    <div id={styles.about_me_image}>
                                        <Image 
                                            src={Profile}
                                            alt="profile picture of me" 
                                            objectFit="contain"
                                        />                                   
                                    </div>
                            </div>
                            <div id={styles.skills_page}>
                                <p>
                                    I have primarily been working with React and Next.js but recently started using TypeScript and exploring other libraries like Tailwind CSS to create clean, fast, and modern websites.
                                </p>
                                <ul id={styles.list_of_skills}>
                                    <li>
                                        <h3>HTML/CSS</h3>
                                        <p>SCSS, SASS, Flex, Grid, </p>
                                    </li>
                                    <li>
                                        <h3>Design</h3>
                                        <p>Figma</p>
                                    </li>
                                    <li>
                                        <h3>Development</h3>
                                        <p>Javascript(ES6 +), APIs, React, Typescript, NextJS, Firebase</p>
                                    </li>
                                    <li>
                                        <h3>Tools</h3>
                                        <p>Git/Github, </p>
                                    </li>
                                    <li>
                                        <h3>Soft Skills</h3>
                                        <p>Flexible, Team player, Creative problem solver, Adaptable, growth-mindset</p>
                                    </li>
                                </ul>   
                            </div>     
                            <div id={styles.experience_page}>
                                <p>
                                    My journey into development began in early 2022, learning HTML, CSS, vanilla
                                    JavaScript, and React. As a freelance developer, I embarked on various small
                                    projects, steadily building my skills. I'm a quick learner, naturally inquisitive,
                                    and fortunate to love what I do.
                                </p>
                                <ul>
                                    <li>
                                        <h3>FREELANCE</h3>
                                        <p>Frontend Developer, November 2022 present</p>
                                        <div>
                                            <p>Contribute and collaborate with other developers on open source projects</p>
                                        </div>
                                        <p className={styles.types}>REACT | TYPESCRIPT | NODEJS | FIREBASE</p>
                                    </li>
                                    <li>
                                        <h3>Brainnest</h3>
                                        <p>Junior Frontend Developer, Oct 2022 - Nov 2022</p>
                                        <div>
                                            <p>
                                            Learned the industry standards for file structuring and semantic meaning and
                                            made 4 projects
                                            </p>
                                        </div>
                                        <p className={styles.types}>HTML | CSS | JAVASCRIPT</p>
                                    </li>
                                </ul>
                            </div>            
                        </Slider>
                    </section>
                </div>
            </main>
        </section>
    );
};

export default About;
