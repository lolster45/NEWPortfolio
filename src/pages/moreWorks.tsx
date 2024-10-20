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
                                <div className={styles.card_proj}>
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
                                            <a className={styles.git_link} href="" target='_blank'>
                                                <FaGithub/>
                                            </a>
                                            <a className={styles.live_link} href="" target='_blank'>
                                                <MdLiveTv/>
                                            </a>               
                                        </div>  
                                    </div>
                                    <div 
                                        ref={ref2}
                                        className={`${styles.title} ${inView2 ? styles.active : ''}`}
                                    >
                                        <h2>{proj.title}</h2> 
                                    </div>
                                </div>

                            )
                        })
                    }



                    {/* <div>
                        <div className={styles.image_container}>
                            <Image 
                            src={Quiz}
                            alt="picture of my quiz project website"                 
                            />    
                        </div>

                        <h2>Quiz</h2>
                        
                    </div>
                    <div>
                        <div className={styles.image_container}>
                            <Image 
                            src={Calc}
                            alt="picture of my calculator project" 
                            />    
                        </div>

                        <h2>Calculator</h2>
                       
                    </div>
                    <div>
                        <div className={styles.image_container}>
                            <Image 
                                src={MarkUp}
                                alt="picture of my markup editor website project"      
                            />    
                        </div>

                        <h2>MarkUp Editor</h2>
                       
                    </div>
                    <div>
                        <div className={styles.image_container}>
                            <Image 
                            src={Ecom}
                            alt="picture of my E commerse website project"    
                            />    
                        </div>

                        <h2>ECOM</h2>
                        
                    </div>
                    
                    <div>
                        <div className={styles.image_container}>
                            <Image 
                            src={ColorS}
                            alt="profile picture of me"                 
                            />    
                        </div>

                        <h2>Color Gen.</h2>
                    </div>
                    <div>
                        <div className={styles.image_container}>
                            <Image 
                            src={TicTacToe}
                            alt="profile picture of me" 
                            />    
                        </div>

                        <h2>Tic-Tac-Toe</h2>
                    </div>
                    <div>
                        <div className={styles.image_container}>
                            <Image 
                            src={PassWordGen}
                            alt="profile picture of me"                  
                            />    
                        </div>

                        <h2>PassWord Generator</h2>
                    </div> */}

                </div>
            </div>     
        </section>
    );
};

export default moreWorks;