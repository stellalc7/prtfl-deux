import React from 'react'
import Image from 'next/image'

import beat from '../../images/beat.png'
import kimchi from '../../images/kimchi.png'
import omakase from '../../images/omakase.png'
import synth from '../../images/synth.png'

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
                    priority={true}
                /><br></br><br></br>
                Express, Node, JavaScript, SCSS, APIs<br></br><br></br>
                A full stack, interactive site encouraging exploration. Discover streams, top national headlines, weather, and time.<br></br><br></br>
                Doubles as passive tech: the UI/UX is minimal, visual hierarchy is reconsidered in response to the user&apos;s interactions, errors are handled without introducing new elements, and there&apos;s a subtle rotation on the canvas.
            </div>
    } else if (project === 'kimchi') {
        description =
            <div>
                <Image
                    src={kimchi}
                    alt="kimchi"
                    width="500px"
                    height="300px"
                    priority={true}
                /><br></br><br></br>
                HTML, jQuery, p5.js, CSS<br></br><br></br>
                An ode to my aunt, and her kimchi to save humanity from poorly fermented cabbage, and homesickness. Reflect with Cabby, the talking 8-bit cabbage, and find a page that&apos;s only open late night weekends so your aged batches aren&apos;t wasted.
            </div>
    } else if (project === 'omakase') {
        description =
            <div>
                <Image
                    src={omakase}
                    alt="omakase"
                    width="500px"
                    height="300px"
                    priority={true}
                /><br></br><br></br>
                React / Redux, p5.js, Rails, PostgreSQL, AWS<br></br><br></br>
                A full stack imitation - all credit to Pinterest. Sign up, log in, discover pins from the entire database, CRUD pins, CRUD boards, and search your collection.
            </div>
    } else if (project === 'synth') {
        description =
            <div>
                <Image
                    src={synth}
                    alt="synth"
                    width="500px"
                    height="300px"
                    priority={true}
                /><br></br><br></br>
                MongoDB, Express, React / Redux, Node, Tone.js<br></br><br></br>
                Express, Node, JavaScript, SCSS, APIs<br></br><br></br>
                Make music with an in-browser synth. Explore patch settings, and record samples to save to your collection, and download. I coded the frontend sample recording CRUD, user auth, and component architecture.<br></br><br></br>
                I encoded blobs to b64 strings to save recordings directly to our db, allowing us to circumvent external cloud technologies. The default recorder was monkey patched to modify the mimeType from the webm default, so users can download their compositions as mp3s.
            </div>
    }

    return (
        description
    )
}

export default Project