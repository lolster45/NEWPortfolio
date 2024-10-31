//React...
import React, {useRef} from 'react';
import Image from 'next/image';

//import { motion, useInView} from 'framer-motion'

//Images...
import Quiz from "../../public/quizProj.png"
import Calc from "../../public/calculatorProj.png"
import MarkUp from "../../public/markUp.png"
import Ecom from "../../public/eCom.png"
import ColorS from "../../public/colorScheme.png"
import TicTacToe from "../../public/ticTacToe.png"
import PassWordGen from "../../public/passwordGenerator.png"
import converter from "../../public/converterNEW.png"

//React icons...
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";


//Styles...
import styles from "../styles/MoreWorks.module.scss"

import { useInView } from 'react-intersection-observer';


import { projectsMain } from '@nextjsportfolio/data';

const moreWorks = () => {




    const { ref, inView } = useInView({
        threshold: 0.80, // Adjust this value as needed
        triggerOnce: true, // Trigger only once
    });

    // const ref = useRef(null);
    // const isInView = useInView(ref, {once: false, amount: 1})





    return (
        <section id={styles.more_work_section}>
            <div className={styles.projects}>
                <h1>Notable Projects</h1>
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