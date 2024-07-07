//React...
import React, { useEffect, useState } from 'react';

//Styles...
import styles from "../styles/Infinite.module.scss"; // Make sure to create this CSS module


interface Image {
    img: {src: string}; // Adjust the type if `img` is not a string (e.g., if it's an imported image module)
    name: string;
}

const InfiniteScrollBar = ({data}: {data: Image[]}) => {

    const [newData, setNewData] = useState<Image[]>([])

    useEffect(() => {
        setNewData([...data, ...data])
    }, [data])

    return (
        <div className={styles.scroller}>
            <ul className={`${styles.tag_list} ${styles.scroller_inner}`}>
                {
                    newData.map((item, i) => {
                        return (
                            <li key={`${item.name} - ${i}`}>
                                <img src={item.img.src} alt="" />
                                {item.name}
                            </li>
                        )
                    })
                }      
            </ul>
        </div>
    );
};

export default InfiniteScrollBar;




