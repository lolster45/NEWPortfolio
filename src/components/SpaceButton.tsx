//React...
import React from 'react';

//Styles...
import styles from "../styles/SpaceButton.module.scss"

const SpaceButton = ({data, text} : {data : any, text: string}) => {

    const handleClick = (e: any) => {
        const destination = e.target.textContent
        if(destination === "Github") {
            window.open(data.links.Github, '_blank'); // Open link in a new tab
        }
        else if (destination === "Live") {
            window.open(data.links.live, '_blank'); // Open link in a new tab
        }
        else {
            console.log("error...")
        }
    };

    return (
        <div className={styles.box} >
            <button className={styles.button} onClick={handleClick}>{text}</button>
            <div className={styles.space}>
                {
                    [31, 12, 57, 93, 23, 70, 6].map((value, index) => (
                        <span 
                            key={index} 
                            className={styles.star}
                            style={{ '--i': value } as React.CSSProperties} 
                        >                                   
                        </span>

                    ))
                }
            </div>
        </div> 
    );
};

export default SpaceButton;