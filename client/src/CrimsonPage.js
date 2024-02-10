import React from 'react';
import ACM from "./images/ACM-RED-BACKGROUND.png"
import CD from "./images/CrimsonDefenseLogo.png"
import styles from "./CrimsonPage.css"

export default function CrimsonPage() {
    return (
        <>
        <section classname={styles}>
        <section>
            <h1>Introducing the Crimson Crossover powered by Camgian!</h1>
            <img src={ACM} alt="ACM Logo"/>
            <img src={CD} alt="Crimson Defense Logo"/>
        </section>
        <section>
            <h1>ACM is proud to host, in collaboration with the Crimson Defense Cyber Security Club, the Crimson Crossover powered by Camgian!</h1>
            <h2>What is it?</h2>
            <p>
                The Crimson Crossover powered by Camgian is a first-of-its-kind hybrid computing competition.
                <br></br>
            
                Equal parts Capture-The-Flag and Competitive Programming, aims to introduce students
                in The College of Engineering to different facets of computing. Teaching Cybersecurity concepts
                along with quick and adaptive problem-solving, the Crimson Crossover powered by Camgian is a fun 
                and exciting experience for everyone involved.
                <br></br>
            </p>

            <h2>When and Where?</h2>

            <p>
                The event will be taking place on March 23rd, on the University of Alabama's campus in Russell Hall 159
                starting at 1PM and lasting until about 4PM!
            </p>

            <h2>How can I be involved?</h2>
        
            <p>
                Even if you're not competing, there's still plenty for Crimson Crossover to offer from attendance.
                We will have representatives from sponsoring companies tabling so you can learn about their career
                opportunities. In addition, there will be spectator focused competitions with prizes for participatants,
                and a learning-focused approach to commentating the event. Be sure to join the mailing list if you'd
                like more information!
            </p>
            <div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScFORNj1SlbO4I_AQjooCfOOdjzQ2W3ZT99t-2z1aaYR65K4Q/viewform?embedded=true" 
                frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>

        </section>
        <footer>

        </footer>
        </section>
        </>
    )
}