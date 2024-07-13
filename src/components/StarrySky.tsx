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

   {/* This is the old animation.... */}
            {/* <div className={styles.stars}></div>
            <div className={styles.stars}></div>
            <div className={styles.stars}></div>
            <div className={`${styles.star} ${styles.star1}`}></div>
            <div className={`${styles.star} ${styles.star2}`}></div>
            <div className={`${styles.star} ${styles.star3}`}></div>
            <div className={`${styles.star} ${styles.star4}`}></div>
            <div className={`${styles.star} ${styles.star5}`}></div> */}