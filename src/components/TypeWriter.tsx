import React, { useEffect, useState } from 'react';

const TypeWriter = ({text, speed = 10, setActive}: {text: string, speed: number, setActive: any}) => {

    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {

        if(index < text.length) {

            const timeOut = setTimeout(() => {
                setDisplayedText(text.slice(0, index + 1));
                setIndex(index + 1);
            }, speed)
            return () => clearTimeout(timeOut)
        }
        else {
            console.log('index is equal to text length')
            handleReset()
            
        }

      
    }, [index])

    const handleReset = () => {
        console.log("started deletion")
        setTimeout(() => {
            setDisplayedText('');
            setActive(false);
        }, 6000)
    }


    return (
        <p className='bebas-neue-regular'>{displayedText}</p>
    );
};

export default TypeWriter;