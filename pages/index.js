import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
          <Head>
              <title>Sandox for HubSpot Tools</title>
              <link rel='icon' href='/favicon.ico' />
          </Head>

          <main className={styles.main}>
              <h1 className={styles.title}>
                  Welcome to my{' '}
                  <span className={styles.hubspotcolor1}>HubSpot</span> sandbox!
              </h1>

              <p className={styles.description}>
                  Some tools are added to the document body with the custom hook{' '}
                  <code>useScript</code>.
              </p>

              <div className={styles.grid}>
                  <a href='/chat' className={styles.card}>
                      <h3 className={styles.hubspotcolor1}> Chat &rarr;</h3>
                      <p>Use the Chatbot.</p>
                  </a>

                  <a href='/bookMe' className={styles.card}>
                      <h3 className={styles.hubspotcolor1}> Book Me &rarr;</h3>
                      <p>Book a meeting with me.</p>
                  </a>

                  <a href='/newsletterForm' className={styles.card}>
                      <h3 className={styles.hubspotcolor1}>
                          {' '}
                          Newsletter Form &rarr;
                      </h3>
                      <p>The newsletter form.</p>
                  </a>
              </div>

              <footer className={styles.footer}>
                  Powered by
                  <a
                      href='https://hubspot.com'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                      <img
                          src='/hubspot-logo.svg'
                          alt='HubSpot Logo'
                          className={styles.logo}
                      />
                  </a>
                  <a
                      href='https://nextjs.org/'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                      <img
                          src='/next-js-logo.svg'
                          alt='Next.js Logo'
                          className={styles.logo}
                      />
                  </a>
                  <a
                      href='https://reactjs.org//'
                      target='_blank'
                      rel='noopener noreferrer'
                  >
                      <img
                          src='/react-logo.svg'
                          alt='Next.js Logo'
                          className={styles.logo}
                      />
                  </a>
              </footer>
          </main>
      </div>
  );
}
