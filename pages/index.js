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
        <h2><span>about</span></h2>
          <div className={styles.info}>
            stella l. choi<br></br>
            frontend developer<br></br>
            NY
          </div>
          <Image
            src={me}
            alt="Picture of the author"
            width={170}
            height={170}
            className={styles.portrait}
          />
        </div>


        <div className={styles.work}>
          <h2><span>projects</span></h2>
          <div className={styles.projects}>
            <div>BEAT C♡NNECTI♡N</div>
            <div>My Aunt&apos;s Kimchi Rules</div>
            <div>omakase</div>
            <div>SynthGarden</div>
          </div>
          {/* <div className={styles.projectDetails}>
            A full stack, interactive site encouraging exploration. Discover streams, top national headlines, weather, and time.<br></br>
            Doubles as passive tech: the UI/UX is minimal, visual hierarchy is reconsidered in response to the user&apos;s interactions, errors are handled without introducing new elements, and there&apos;s a subtle rotation on the canvas.
          </div> */}
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
