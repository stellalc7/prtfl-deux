import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { useState } from 'react'

import me from '../images/me.png'
// import Project from './components/Project'

export default function Home() {
  // const [project, setProject] = useState('');
  
  return (
    <div className={styles.container}>
      <Head>
        <title>STELLA L CHOI</title>
        <meta name="description" content="stella's sweeet portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.about}>
        <h2>stella l choi <span className={styles.dot}></span> </h2>
          <div className={styles.info}>
            1989, US▲.<br></br><br></br>

            web3 frontend developer. formerly, code + design at act normal ㋛ / tracklib ♫ in stockholm.<br></br><br></br>
            
            previ♡usly, she pursued atmospheric dynamics and taught. she is a recipient of the national science f☻undation graduate research fellowship. she conducted ethnographic fieldwork in buen✺s aires as a tinker field research fellow. her work is published in geophysical research letters, and physics today.<br></br><br></br>

            beyond that, she has woodworked &apos;techwear getas&apos; for fun, and loves them.<br></br><br></br>
            {/* <div className={project === 'more' ? styles.active : null} onMouseOver={() => setProject('more')}>stella l. choi</div> */}
            ⟿ <a
              href="mailto:stella.choi@hyperisland.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              c•ntact
            </a>
          </div><br></br>
        </div>
        <div className={styles.me}>
          <Image
              src={me}
              alt="me"
              width={245}
              height={250}
              className={styles.portrait}
            />
            </div>

        {/* <div className={styles.work}>
          <h2><span>projects</span></h2>
          <div className={styles.projects}>
            <div className={styles.projectList}>
              <div className={project === 'beat' ? styles.active : null} onMouseOver={() => setProject('beat')}>BEAT C♡NNECTI♡N</div>
              <div className={project === 'kimchi' ? styles.active : null} onMouseOver={() => setProject('kimchi')}>My Aunt&apos;s Kimchi Rules</div>
              <div className={project === 'synth' ? styles.active : null} onMouseOver={() => setProject('synth')}>SynthGarden</div>
              <div className={project === 'bike' ? styles.active : null} onMouseOver={() => setProject('bike')}>Bikes, Beats, and Beers</div>
            </div>
            <div className={styles.projectDetails}>
              <Project project={project} />
            </div>
          </div>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="mailto:stella.choi@hyperisland.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          e•mail
        </a>
      </footer> */}
    </div>
  )
}
