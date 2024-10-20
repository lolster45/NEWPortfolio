// LoadingScreen.tsx
import React, { useEffect, useState } from 'react';


import styles from '../styles/LoadingScreen.module.scss' // Your custom styles

const LoadingScreen = ({ loading }: { loading: boolean }) => {
    return (
        <div className={`${styles.loadingScreen} ${loading ? styles.active : ''}`}>
            <div className={styles.loader}></div> {/* Cool animation */}
        </div>
    );
};

export default LoadingScreen;
