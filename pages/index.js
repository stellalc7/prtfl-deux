import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import me from '../images/me.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>STELLA L CHOI</title>
        <meta name="description" content="stella's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.about}>
          <Image
            src={me}
            alt="Picture of the author"
            width={150}
            height={150}
            className={styles.portrait}
          />
          <div className={styles.info}>
            <span>stella lina choi</span><br></br>
            frontend developer
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="mailto:stella.choi@hyperisland.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          e•mail
        </a>
      </footer>
    </div>
  )
}
