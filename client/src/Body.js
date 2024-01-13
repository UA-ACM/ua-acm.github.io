
import React from 'react'
import "./Body.css"
import aboutus from "./images/about-us.png"
import profpic from "./images/profpic.png"
import codingpic from "./images/codingpic.png"
import socialpic from "./images/socialpic.png"
import casey from "./images/casey.jpg"
import daniel from "./images/daniel.jpg"
import liam from "./images/liam.jpg"
import donovan from "./images/donovan.jpg"
import webdev from "./images/html5&css3.png"
import shipt from "./images/shipt.png"
import christian from "./images/christian.jpg"

//Bio for Faculty Advisor
//Contact us section of footer with president and secretary emails
//Include register button when the register page is finished

export default function Body() {
  return (
    <>
        <div className='general-info grid-container'>
            <div className='about-section'>
            <img className='about-pic' src={aboutus} alt="Competitive Programming Team"/>
                <h3 className='about-header'>About Us</h3>
                <p className='about-p'>
                UA ACM is the leading Computer Science club here at The Capstone. 
                We pride ourselves on our ability to foster a passion for the world 
                of computer science as well as give you the tools to thrive in the industry post-graduation!
                </p>
            </div>
           
            <div className='professionalism-section'>
            <img className='prof-pic' src={profpic} alt="Company Talk"/>
                <h3 className='prof-header'>Professionalism</h3>
                <p className='prof-p'>
                    Bringing in companies from across the country, we put you in touch with 
                    industry members that provide valuable knowledge on how to best succeed 
                    in a professional environment as a CS grad.
                </p>
            </div>
            <div className='coding-section'>
            <img className='coding-pic' src={codingpic} alt="SERC Lecture Hall"/>
                <h3 className='coding-header'>Coding</h3>
                <p className='coding-p'>
                    Whether it be coding workshops, hackathon opportunities, or competitive programming competitions,
                    ACM provides several different ways for you to be the 
                    best coder you can be. 
                </p>
            </div>
          
            <div className='social-section'>
            <img className='social-pic' src={socialpic} alt="Career Fair"/>
                <h3 className='social-header'>Social</h3>
                <p className='social-p'>
                    ACM puts you in touch with other Computer Science and Cybersecurity majors on
                    campus, allowing you to build connections that ensure you don't have to go through 
                    college alone. 
                </p>
            </div>
            
                
        </div>
        <section class="officers">
            <h1 class='officer-header'>Officers</h1>
            <div class="officer-grid grid-container">
                <div class='president-box'>
                    <h1 class='officer'>Casey Derringer</h1>
                    <h2>President</h2>
                    <img class='president officer-img' src={casey} alt="President"/>
                    <p id="bio">                    
                        Casey Derringer, a sophomore from Dayton, Ohio, is pursuing a degree in 
                        computer science. Along with serving as ACM Treasurer, he fences 
                        in the University of Alabama's fencing club, and is an active member in Theta Tau.
                    </p>
                </div>
                <div>
                    <h1 class='officer'>Donovan Kohler</h1>
                    <h2>Vice President</h2>
                    <img class='vp officer-img' src={donovan} alt="Vice-President"/>
                    <p id="bio">
                        Donovan Kohler is a Junior Computer Science major in the AMP program from Pittsburgh, 
                        PA. As well as his involvement in ACM, he is a member of the professional engineering fraternity, 
                        Theta Tau.
                    </p>
                </div>
                <div>
                    <h1 class='officer'>Light Ruder</h1>
                    <h2>Secretary</h2>
                    <img class='secretary officer-img' src={liam} alt="Secretary"/>
                    <p id="bio">
                        Liam Tucker is a junior Computer Science major from Libertyville, IL. 
                        He is also an ambassador for Vote Everywhere, a UA chapter of the Andrew 
                        Goodman Foundation dedicated  to promoting voting and eliminating barriers 
                        to voting on campus and beyond.
                    </p>
                </div>
                <div>
                    <h1 class='officer'>Md Ubayeid Ullah</h1>
                    <h2>Treasurer</h2>
                    <img class='treasurer officer-img' src={casey} alt="Treasurer"/>
                    <p id="bio">
                        Casey Derringer, a sophomore from Dayton, Ohio, is pursuing a degree in 
                        computer science. Along with serving as ACM Treasurer, he fences 
                        in the University of Alabama's fencing club, and is an active member in Theta Tau.
                    </p>
                </div>
                <div>
                    <h1 class='officer'>Daniel Tsark</h1>
                    <h2>Large Events Chair</h2>
                    <img class='president officer-img' src={daniel} alt="Large Events Chair"/>
                    <p id="bio">                    
                        Daniel Tsark is a junior from Chandler, Arizona who is pursuing a degree in cybersecurity. 
                        Daniel is involved in numerous extra-curricular organizations outside of ACM, 
                        with some of the most notable being his involvement in the Student Government Association, 
                        United Greek Council, and Theta Tau.
                    </p>
                </div>
                <div>
                    <h1 class='officer'>Christian Hirschey</h1>
                    <h2>Public Relations Chair</h2>
                    <img class='president officer-img' src={christian} alt="Public Relations Chair"/>
                    <p id="bio">                    
                        Christian Hirschey is a freshman from Holbrook, New York pursuing a degree in 
                        Computer Science. Outside of ACM, Christian is a member of Competitive Programming 
                        Club and Web Development Club, and plays snare drum for the Birmingham-based Alabama Pipes & Drums.
                    </p>
                </div>
            </div>
        </section>
        <div class='Events'>
            <h1>Spring 2024 Events</h1>
            <img src={webdev} alt="HTML&CSS Logos"/>
            <dl>
                <dt>January 23rd</dt>
                <dd>Web Development Workshop</dd>
                <dt>February 6th</dt>
                <dd>Career Fair Prep</dd>
                <dt>February 20th</dt>
                <dd>Professor Research Presentation</dd>
                <dt>March 5th</dt>
                <dd>Resume Workshop and Mock Technical Interviews</dd>
                <dt>March 19th</dt>
                <dd>Crimson Defense Mixer</dd>
                <dt>April 2nd</dt>
                <dd>Company Talk (feat. Shipt)</dd>
                <dt>April 16th</dt>
                <dd>Movie Night (feat. The Social Network)</dd>
            </dl>
            <img src={shipt} alt="Shipt Logo"/>
        </div>
        <footer>
            <p>Local ACM Chapter</p>
            <p>Assoc. For Computing Machinery</p>
            <p>Box 870290</p>
            <p>Tuscaloosa, Alabama, 35487</p>
            <h1>Contact Us!</h1>
            <a class='presidentemail' href="mailto: acmpresident@ua.edu">Email ACM President</a>
            <a class='secretaryemail' href="mailto: acmsecretary@ua.edu">Email ACM Secretary</a>
            <a class='facultyemail' href="mailto: anderson@cs.ua.edu">Email Faculty Advisor</a>
            <p class='liability'>
            <i>The views, opinions, and conclusions expressed in this page are those of the author or 
            organization and not necessarily those of The University of Alabama or its officers and 
            trustees. The content of this page has not been reviewed or approved by the University of 
            Alabama, and the author or organization is soley responsible for its content.</i>
            </p>
            {/* <button className='join-btn'>Register Now</button> */} 
        </footer>
    </>
  )
}

