//React...
import React from 'react';
import Image from 'next/image';

//Components...
import { useInView } from 'react-intersection-observer';

//React icons...
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

//Data...
import { projectsMain } from '@nextjsportfolio/data';

//Styles...
import styles from "../styles/MoreWorks.module.scss"




const moreWorks = () => {

    return (
        <section id={styles.more_work_section}>
            <div className={styles.projects}>
                <h1 className='bebas-neue-regular'>Notable Projects</h1>
                <div 
                    className={styles.projects_wrapper}
                > 
                    {
                        projectsMain.map(proj => {

                            const { ref, inView } = useInView({
                                threshold: 0.80, // Adjust this value as needed
                                triggerOnce: true, // Trigger only once
                            });

                            const { ref: ref2, inView: inView2 } = useInView({
                                threshold: 0.30, // Adjust this value as needed
                                triggerOnce: true, // Trigger only once
                            });

                            return (
                                <div 
                                    className={styles.card_proj} 
                                >
                                    <div
                                        ref={ref}
                                        className={`${styles.image_container} ${inView ? styles.active : ''}`}
                                    >
                                        <Image 
                                            src={proj.image}
                                            width={500}
                                            height={400}
                                            alt="picture of my converter website project"                    
                                        />  
                                        <div className={styles.image_links}>
                                            <a className={styles.git_link} href={proj.links.github} target='_blank'>
                                                <FaGithub/>
                                            </a>
                                            <a className={styles.live_link} href={proj.links.live} target='_blank'>
                                                <MdLiveTv/>
                                            </a>               
                                        </div>  
                                    </div>
                                    <div 
                                        ref={ref2}
                                        className={`${styles.title} ${inView2 ? styles.active : ''}`}
                                    >
                                        <h2>{proj.title}</h2> 
                                        <div className={styles.proj_info}>
                                            <h3>Technologies Used:</h3>
                                            <div className={styles.tech_wrap}>
                                                {
                                                    proj.icons.map(item => {
                                                        return (
                                                            <span>
                                                                <Image 
                                                                    src={item.img} 
                                                                    alt='image of language used'
                                                                />
                                                                {item.name}
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>     
        </section>
    );
};

export default moreWorks;