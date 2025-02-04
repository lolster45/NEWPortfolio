//React...
import React, { useState } from 'react';

//Components...
import TypeWriter from './TypeWriter';

//Styles...
import styles from '@nextjsportfolio/styles/RougeAi.module.scss'

const RougeAIChat = () => {

    const [active, setActive] = useState(false);

    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState('');
    const [textResponse, setTextResponse] = useState('');

    const handleChange = (e: any) => {
        const {value} = e.target;
        setQuestion(value)
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setLoading(true);
        setActive(true);
        const response = await fetch("/api/ai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question }),
        });
        const data =  await response.json()
        setTextResponse(data);
        setQuestion('');
        setLoading(false);
    }

    return (
        <div className={`bebas-neue-regular ${styles.rouge_wrap}`}>
            <div className={styles.left}>
                <h2>Have Any Questions?</h2>
                <p>ask my rouge ai assitant i found in space</p>
            </div>
            <form action="" onSubmit={handleSubmit}>

                <input 
                    className={`bebas-neue-regular ${active ? styles.active: ''}`}
                    type="text" 
                    placeholder='Ask me anything about Oscar' 
                    value={question}
                    onChange={handleChange}
                />
                <div className={styles.ai_output}>
                    {textResponse &&
                        <TypeWriter 
                            text={textResponse} 
                            speed={50}
                            setActive={setActive}
                        />
                    }
                    {loading &&
                        <div className={styles.loader}></div>
                    }
                    
                </div>
            </form>
        </div>
    );
};

export default RougeAIChat;