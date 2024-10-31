//React...
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

//Styles...
import styles from "../styles/Infinite.module.scss"; // Make sure to create this CSS module


import { Icon } from '@nextjsportfolio/pages/projects/[projectID]';

const InfiniteScrollBar = ({data}: {data: Icon[]}) => {

    const [newData, setNewData] = useState<Icon[]>([])

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
                                <Image src={item.img} alt="" />
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




