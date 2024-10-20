//React...
import React from 'react';

//React icons... 
import { IoDocumentText } from "react-icons/io5";

//Styles...
import styles from "../styles/Resume.module.scss"





const resume = () => {
    return (
        <div id={styles.resume_page} className='main-font-family'>
            <section className={styles.resume_wrap}>
                <div className={styles.left_resume}>
                    <img src={'/ProfilePic.jpg'} alt="" />

                    <h2>Oscar Reyes Denova</h2>
                    <div>Front-End Developer</div>
                    <div>512-446-9485</div>
                    <div>oscarneutron3@gmail.com</div>
                    <div>
                        Languages
                        <ul>
                            <li>React</li>
                            <li>NextJS</li>
                            <li>JavaScript</li>
                            <li>Firebase</li>
                            <li>NodeJS  </li>
                        </ul>
                    </div>
                    <div>
                        Interests
                        <ul>
                            <li>Novels</li>
                            <li>Coding</li>
                            <li>Writing</li>
                            <li>Piano</li>
                        </ul>
                    </div>
            
                </div>
                <div className={styles.right_resume}>
                    <p>Front-end developer with a background in nursing. With a primary focus on React/Next.Js, love chatGPT, google, and reading novels. Nothing like writing a good novel and staying up to date with front-end tech.</p>
                    <div>
                        <h2>Work Experience</h2>
                        <div></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default resume;


            // <h1>
            //         Resume Page
            //         <a>
            //             <IoDocumentText/>
            //             Resume Link
            //         </a>
            // </h1>   
            //  <section className={styles.resume_section}>
            //         <div className={styles.experience_block}>
            //             <h2>Experience</h2>

            //             <div>
            //                 <h2>
            //                     Brainnest 
            //                     <span> (Oct 2022 - Nov 2022)</span>
            //                 </h2>
            //                 <ul>
            //                     <li>Developed strong relationships with peers</li>
            //                     <li>Learned industry standards for formatting folders</li>
            //                     <li>How a team works with version control</li>
            //                     <li>Importance of semantic meaning for screen readers</li>
            //                 </ul>
            //             </div>

            //             <div>
            //                 <h2>Freelance</h2>
            //                 <ul>
            //                     <li>Time management</li>
            //                     <li>Nothing wrong in saying you dont know but learning how to do it</li>
            //                 </ul>
            //             </div>
            //         </div>
            //         <div className={styles.education_block}>
            //             <h2>Education</h2>
            //             <div>
            //                 <h2>Austin Community College</h2>
            //                 <ul>
            //                     <li>Graduated with 3.7 GPA</li>
            //                     <li>Scholastics Award</li>
            //                 </ul>
            //             </div>
            //         </div>   
            //         <div className={styles.skills_block}>
            //             <h2>Skills</h2>
            //             <ul>
            //                 <li>NextJS</li>
            //                 <li>React</li>
            //                 <li>TypeScript</li>
            //                 <li>JavaScript</li>
            //                 <li>Firebase</li>
            //                 <li>HTML</li>
            //                 <li>CSS</li>
            //             </ul>
            //         </div> 
            //         <div className={styles.languages_block}>
            //             <h2>Languages</h2>
            //             <ul>
            //                 <li>English</li>
            //                 <li>Spanish</li>
            //             </ul>
            //         </div>               
            //         <div className={styles.interest_block}>
            //             <h2>Interest</h2>
            //             <ul>
            //                 <li>Web-Development</li>
            //                 <li>Writing</li>
            //                 <li>Reading Novels</li>
            //                 <li>Anime</li>
            //                 <li>Fan-fiction</li>
            //                 <li>Relaxing</li>
            //             </ul>
            //         </div> 
            //  </section>   
            // <section id={styles.decoration_wrapper}>
            //     <div className={`${styles.ground} ${styles.mountains}`}></div>
            //     <div className={`${styles.ground} ${styles.left_side}`}></div>
            //     <div className={`${styles.ground} ${styles.middle}`}></div>
            //     <div className={`${styles.ground} ${styles.right_side}`}></div>
            // </section>