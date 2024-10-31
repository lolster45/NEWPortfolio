//React...
import React from 'react';

//React icons... 
import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

//Styles...
import styles from "../styles/Resume.module.scss"



const resume = () => {
    return (
        <div id={styles.resume_page} className='main-font-family'>
            <section className={styles.top_section}>
                <h1>Oscar Reyes</h1>
                <p>Front-End-Developer</p>
                <div className={styles.info}>
                    <div className={styles.location_email}>
                        <span>
                            <FaLocationDot/>
                            USA
                        </span>
                        <span>
                            <MdEmail/>
                            oscarneutron3@gmail.com
                        </span>
                    </div>
                    <div className={styles.link_buttons}>
                        <a href='https://www.linkedin.com/in/oscar-reyes-denova-34b4a81a2/?profileId=ACoAAC9qMesBdOfyvbt0Ge9xOPdena9LpMmVvhY' target='_blank'>
                            <FaLinkedin/>
                            /Oscar
                        </a>
                        <a href='https://github.com/lolster45' target='_blank'>
                            <FaGithub/>
                            /lolster45
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.bottom_section}>
                <div className={styles.education_wrap}>
                    <h3>Education</h3>
                    <div>
                        <div>Austin Community College</div>
                        <span>Aug 2020 - 2022</span>
                    </div>
                </div>
                <div className={styles.experience_wrap}>
                    <h3>Experience</h3>
                    <div className={styles.experience_bottom}>
                        <div className={styles.job}>
                            <div className={styles.job_title_wrap}>
                                <div>Freelance Dev</div>
                                <span>Oct 2022 - Now</span>
                            </div>
                            <div className={styles.job_languages}>
                                <span>React</span>
                                <span>NextJS</span>
                                <span>Firebase</span>
                                <span>NodeJS</span>
                                <span>Express</span>
                            </div>
                            <ul>
                                <li>Worked with clients in setting up both Front and Backend for their sites</li>
                                <li>Setting up domains and working with firebase</li>
                            </ul>
                        </div>

                        
                        <div className={styles.job}>
                            <div className={styles.job_title_wrap}>
                                <div>Brainnest</div>
                                <span>Oct 2022 - Oct 2022</span>
                            </div>
                            <div className={styles.job_languages}>
                                <span>JavaScript</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                            <ul>
                                <li>Learned Industry standard Folder structure</li>
                                <li>Team collaboration and clean code</li>
                            </ul>
                          
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default resume;