import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import beat from '../../images/beat.png'
import kimchi from '../../images/kimchi.png'
import omakase from '../../images/omakase.png'
import synth from '../../images/synth.png'
import bike from '../../images/bike.png'

const Project = ({ project }) => {
    let description;

    if (project === 'beat') {
        description =
            <div>
                <Image
                    src={beat}
                    alt="beat"
                    width="500px"
                    height="300px"
                    loading="eager"
                /><br></br><br></br>
                <span><span className={styles.dot}></span> Express, Node, JavaScript, SCSS, APIs</span><br></br><br></br>
                A full stack, interactive site encouraging exploration. Discover streams, top national headlines, weather, and time.<br></br><br></br>
                Doubles as passive tech: the UI/UX is minimal, visual hierarchy is reconsidered in response to the user&apos;s interactions, errors are handled without introducing new elements, and there&apos;s a subtle rotation on the canvas.<br></br><br></br>
                <a href="https://beatconnection.herokuapp.com" target="_blank" rel="noopener noreferrer">live</a>
                <a href="https://github.com/stellalc7/beat-connection" target="_blank" rel="noopener noreferrer">git</a>
            </div>
    } else if (project === 'kimchi') {
        description =
            <div>
                <Image
                    src={kimchi}
                    alt="kimchi"
                    width="500px"
                    height="300px"
                    loading="eager"
                /><br></br><br></br>
                <span><span className={styles.dot}></span> HTML, jQuery, p5.js, CSS</span><br></br><br></br>
                An ode to my aunt, and her kimchi to save humanity from poorly fermented cabbage, and homesickness. Reflect with Cabby, the talking 8-bit cabbage, and find a page that&apos;s only open late night weekends so your aged batches aren&apos;t wasted.<br></br><br></br>
                <a href="https://stellalc7.github.io/my-aunts-kimchi-rules/" target="_blank" rel="noopener noreferrer">live</a>
                <a href="https://github.com/stellalc7/my-aunts-kimchi-rules" target="_blank" rel="noopener noreferrer">git</a>
            </div>
    } else if (project === 'omakase') {
        description =
            <div>
                <Image
                    src={omakase}
                    alt="omakase"
                    width="500px"
                    height="300px"
                    loading="eager"
                /><br></br><br></br>
                <span><span className={styles.dot}></span> React / Redux, p5.js, Rails, PostgreSQL, AWS </span><br></br><br></br>
                A full stack imitation - all credit to Pinterest. Sign up, log in, discover pins from the entire database, CRUD pins, CRUD boards, and search your collection.<br></br><br></br>
                <a href="https://o-makase.herokuapp.com" target="_blank" rel="noopener noreferrer">live</a>
                <a href="https://github.com/stellalc7/fullstack-proj" target="_blank" rel="noopener noreferrer">git</a>
            </div>
    } else if (project === 'synth') {
        description =
            <div>
                <Image
                    src={synth}
                    alt="synth"
                    width="500px"
                    height="300px"
                    loading="eager"
                /><br></br><br></br>
                <span><span className={styles.dot}></span> MongoDB, Express, React / Redux, Node, Tone.js</span><br></br><br></br>
                Make music with an in-browser synth. Explore patch settings, and record samples to save to your collection, and download. I coded the frontend sample recording CRUD, user auth, and component architecture.<br></br><br></br>
                I encoded blobs to b64 strings to save recordings directly to our db, allowing us to circumvent external cloud technologies. The default recorder was monkey patched to modify the mimeType from the webm default, so users can download their compositions as mp3s.<br></br><br></br>
                <a href="https://synthgarden.herokuapp.com" target="_blank" rel="noopener noreferrer">live</a>
                <a href="https://github.com/stellalc7/synthgarden" target="_blank" rel="noopener noreferrer">git</a>
            </div>
    } else if (project === 'bike') {
        description =
            <div>
                <Image
                    src={bike}
                    alt="synth"
                    width="500px"
                    height="300px"
                    loading="eager"
                /><br></br><br></br>
                <span><span className={styles.dot}></span> React Native, TypeScript, TBD</span><br></br><br></br>
                Bike to beers while listening to beats. On hold.<br></br><br></br>
            </div>
    } else if (project === 'more') {
        description =
            <div>
                <span><span className={styles.dot}></span> I make stuff</span><br></br><br></br>
                product focused frontend developer with full stack training. former researcher.<br></br><br></br><br></br>

                process (from scratch) --<br></br>
                • motivation<br></br>
                • hypothesize idea ... how might i ...<br></br>
                • wireframe prototype / speculate<br></br>
                • research technologies<br></br>
                • (iterate prototype to align with tech)<br></br>
                • code<br></br>
                • (iterate prototype to align with tech)<br></br>
                • code, iterate, don&apos;t give up...<br></br>
                • publish<br></br><br></br><br></br>

                press play --<br></br><br></br>
                <a href="https://editor.p5js.org/ste11a/sketches/2EkYakwwS" target="_blank" rel="noopener noreferrer">disco ball</a><br></br><br></br>
                <a href="https://editor.p5js.org/ste11a/sketches/D0720fR-7" target="_blank" rel="noopener noreferrer">flower</a><br></br><br></br><br></br>

            </div>
    }
    // else {
    //     description =
    //         <div>
    //             <span><span className={styles.dot}></span> under construction</span><br></br><br></br>
    //             digital artifacts and analog pieces that belong everywhere and nowhere
    //         </div>
    // }

    return (
        description
    )
}

export default Project