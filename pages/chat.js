import React from 'react';
import useScript from '../hooks/useScript';
import styles from '../styles/Home.module.css';

const Chat = () => {
    useScript(process.env.NEXT_PUBLIC_HB_TRACKING, true, true);
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                <span className={styles.hubspotcolor1}>Chat</span>bot
            </h1>
        </main>
    );
};

export default Chat;
