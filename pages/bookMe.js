import React from 'react';
import useScript from '../hooks/useScript';
import styles from '../styles/Home.module.css';

const BookMe = () => {
    useScript(process.env.NEXT_PUBLIC_HB_MEETING, false, false);
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                <span className={styles.hubspotcolor1}>Book</span> Me
            </h1>

            <div
                style={{ width: '100%', height: '100%' }}
                className='meetings-iframe-container'
                data-src='https://meetings.hubspot.com/rjolaverria?embed=true'
            />
        </main>
    );
};

export default BookMe;
