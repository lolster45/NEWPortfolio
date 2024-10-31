import React from 'react';

//Styles...
import styles from "../styles/StarrySky.module.scss"

const StarrySky = () => {
    return (
        <div className={styles.main_container}>

            <div className={styles.sub_container}>
                <div className={styles.sky}>
                    <div className={styles.stars}></div>
                    <div className={styles.stars2}></div>
                    <div className={styles.stars3}></div>
                    <div className={styles.comet}></div>
                </div>
            </div>
            
        </div>
    );
};

export default StarrySky;