//React...
import React from 'react';

//Styles...
import styles from "../styles/floatingDownArrow.module.scss"


const FloatingDownArrow = () => {
    return (
        <a href="#">
            <div id={styles.mouse_scroll}>
            <div className={styles.mouse}>
                <div className={styles.mouse_in}></div>
            </div>
            <div>
                <span className={styles.down_arrow_1}></span>
                <span className={styles.down_arrow_2}></span>
                <span className={styles.down_arrow_3}></span>
            </div>
            </div>
        </a>
    );
};

export default FloatingDownArrow;