import React, { useEffect } from 'react';
import useScript from '../hooks/useScript';
import styles from '../styles/Home.module.css';

const NewsletterForm = () => {
    let formScriptLoaded = useScript(
        process.env.NEXT_PUBLIC_HB_FORM,
        false,
        false
    );

    useEffect(() => {
        if (formScriptLoaded && window.hbspt) {
            window.hbspt.forms.create({
                region: 'na1',
                portalId: '19504985',
                formId: '8ff527ab-cf11-44c9-adbe-9431c2ca0233',
            });
        }
    }, [formScriptLoaded]);

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Newsletter <span className={styles.hubspotcolor1}>Form</span>
            </h1>
        </main>
    );
};

export default NewsletterForm;
