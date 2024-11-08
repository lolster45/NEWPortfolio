//React...
import React from 'react';

//Styles...
import styles from '../styles/LoadingScreen.module.scss' // Your custom styles

const LoadingScreen = ({ loading }: { loading: boolean }) => {
    return (
        <div className={`${styles.loadingScreen} ${loading ? styles.active : ''}`}>
            <div className={styles.loader}></div> {/* Cool animation */}
            <h1>Loading...</h1>
        </div>
    );
};

export default LoadingScreen;
