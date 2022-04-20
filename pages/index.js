import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

import me from '../images/me.png'
import Project from './components/Project'

export default function Home() {
  const [project, setProject] = useState('');
  
  return (
    <div className={styles.container}>
      <Head>
        <title>STELLA L CHOI</title>
        <meta name="description" content="stella's sweeet portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.about}>
        <h2><span>about</span></h2>
          <div className={styles.info}>
            stella l. choi<br></br>
            developer<br></br>
            NY<br></br>
          </div>
          <div className={project === 'more' ? styles.active : null} onMouseOver={() => setProject('more')}>+ more</div>
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
            <div className={styles.projectList}>
              <div className={project === 'beat' ? styles.active : null} onMouseOver={() => setProject('beat')}>BEAT C♡NNECTI♡N</div>
              <div className={project === 'kimchi' ? styles.active : null} onMouseOver={() => setProject('kimchi')}>My Aunt&apos;s Kimchi Rules</div>
              <div className={project === 'omakase' ? styles.active : null} onMouseOver={() => setProject('omakase')}>omakase</div>
              <div className={project === 'synth' ? styles.active : null} onMouseOver={() => setProject('synth')}>SynthGarden</div>
              {/* <div className={project === 'bike' ? styles.active : null} onMouseOver={() => setProject('bike')}>Bikes, Beats, and Beers</div> */}
              {/* <div className={project === 'museo' ? styles.active : null} onMouseOver={() => setProject('museo')}>museum</div><br></br><br></br><br></br><br></br> */}
            </div>
            <div className={styles.projectDetails}>
              <Project project={project} />
            </div>
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
