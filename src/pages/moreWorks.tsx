//React...
import React from 'react';
import Image from 'next/image';

//Images...
import Quiz from "../../public/quizProj.png"
import Calc from "../../public/calculatorProj.png"
import MarkUp from "../../public/markUp.png"
import Ecom from "../../public/eCom.png"
import ColorS from "../../public/colorScheme.png"
import TicTacToe from "../../public/ticTacToe.png"
import PassWordGen from "../../public/passwordGenerator.png"
import converter from "../../public/converterNEW.png"

//Styles...
import styles from "../styles/MoreWorks.module.scss"


const moreWorks = () => {
    return (
        <section id={styles.more_work_section}>
            <div className={styles.projects}>
                <h1>Notable Projects</h1>
                <div className={styles.projects_wrapper}>   
                    <div>
                        <Image 
                           src={converter}
                           alt="picture of my converter website project"                    
                        />    
                        <h2>Measurement Converter</h2>
                        <div>
                            <p>A simple measurement converter built using plain JavaScript. Able to convet meters to milimeters, Ibs to Kg and more.</p>
                            <a href="https://github.com/lolster45/converter" target='_blank'>LIVE</a>
                        </div>
                    </div>
                    <div>
                        <Image 
                           src={Quiz}
                           alt="picture of my quiz project website"                 
                        />    
                        <h2>Quiz</h2>
                        <div>
                            <p>A simple 4 step quiz with eeach step having multiple options to choose from which your total is tallied up at the end.</p>
                            <a href="https://four-step-quiz.vercel.app/#/">LIVE</a>                        
                        </div>
                    </div>
                    <div>
                        <Image 
                           src={Calc}
                           alt="picture of my calculator project" 
                        />    
                        <h2>Calculator</h2>
                        <div>
                            <p>It doesnt get more simpler than this, its just a simple calculator.</p>
                            <a href="https://github.com/lolster45/Calculator-brainnest">LIVE</a>
                        </div>
                    </div>
                    <div>
                        <Image 
                           src={MarkUp}
                           alt="picture of my markup editor website project"      
                        />    
                        <h2>MarkUp Editor</h2>
                        <div>
                            <p>A simple markup editor where you can multiple projects opened up at the same time saved onto local storage.</p>
                            <a href="https://mark-up-editor-six.vercel.app/">LIVE</a>                        
                        </div>
                    </div>
                    <div>
                        <Image 
                           src={Ecom}
                           alt="picture of my E commerse website project"    
                        />    
                        <h2>ECOM</h2>
                        <div>
                            <p>A modern ECOM website with built in add to car feature and an API with products on display and the option to filter through them.</p>
                            <a href="https://e-commerce-eeb6a.web.app/#/">LIVE</a>                        
                        </div>
                    </div>
                    <div>
                        <Image 
                           src={ColorS}
                           alt="profile picture of me"                 
                        />    
                        <h2>Color Gen.</h2>
                        <div>
                            <p>Choose your color and you are able to get a color scheme out of it.</p>
                            <a href="https://lolster45.github.io/Color-Scheme-Maker/">LIVE</a>                        
                        </div>
                    </div>
                    <div>
                        <Image 
                           src={TicTacToe}
                           alt="profile picture of me" 
                        />    
                        <h2>Tic-Tac-Toe</h2>
                        <div>
                            <p>The classic game that everyone has played once in their lives. Get the of the same symbol in a row and win, on the right you can keep tracks of your score.</p>
                            <a href="https://lolster45.github.io/Tic-Tac-Toe/">LIVE</a>                        
                        </div>
                    </div>
                    <div>
                        <Image 
                           src={PassWordGen}
                           alt="profile picture of me"                  
                        />    
                        <h2>PassWord Generator</h2>
                        <div>
                            <p>Have you no imagination or are unable to think of a password, than this is the perfect websie. Just one click and two seemingly uncrackable passwords will be generated.</p>
                            <a href="https://lolster45.github.io/Password-generator/">LIVE</a>                        
                        </div>
                    </div>
                </div>
            </div>     
        </section>
    );
};

export default moreWorks;