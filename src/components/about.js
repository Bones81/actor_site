import { useState } from "react"

import { IoIosArrowDropdownCircle } from 'react-icons/io'

const About = () => {

    const toggleAbout = () => {
      document.querySelector("#about").classList.toggle('about-closed');
    }

    return (
        <>
            <section id="about" className="about-closed" > 
                <div class="about-heading">
                    <h1>About Nathan <IoIosArrowDropdownCircle onClick={toggleAbout}/></h1>
                </div>
                <p className="about-text">Nathan L. Freeman has enjoyed a professional performing career that has spanned nearly 30 years. In that time, he has performed in Alice Tully Hall at Lincoln Center, Notre Dame Cathedral, and all over the United States in off-Broadway, regional, and touring theatre productions. Most recently, he has sung tenor for several years at Hong Kong Disneyland during the Christmas season as a member of the Disneyland Main Street Carolers.</p>
                <p className="about-text">Nathan appeared on <em>Good Morning America: Strahan & Sara</em> as "Singing Abraham Lincoln," toured the U.S. with the national tour of <em>The 39 Steps</em>, and played the lead role "Keith" in <em>The Turkey Alibi</em>, winner of the 2007 Best Comedy at the Independent Feature Film Festival.</p>
                <p className="about-text">New York projects include <em>Three Sisters</em>, <em>Medea</em>, <em>Blood Brothers</em>, <em>Alice in Wonderland</em>, <em>Guys and Dolls</em>, <em>Anything Goes</em>, <em>Bellevue Sketches</em>, <em>The Best Party Ever</em>, and a video appearance in the Broadway play, <em>Deuce</em>, starring Angela Lansbury. </p>
                <p className="about-text">Based in New York City, Nathan has undergone voice and performance training with David Sabella-Mills and Paul Harman and trained with Austin Pendleton and Ian Marshall at HB Studio.</p>       
                <p className="about-text">Nathan attended Princeton University where he earned a degree in music (theory and composition) and received a certificate in theatre. </p>
                <p className="about-text">Born in St. Louis, Missouri and raised in Memphis, Tennessee, Nathan developed an interest in performance as he entered his teens.  At Memphis' Orpheum Theatre, he enjoyed touring productions of <em>Les Miserables</em>, <em>Camelot</em>, <em>Rent</em>, <em>Jekyll and Hyde</em>, <em>Parade</em>, and others.  While the Orpheum showcased big budget touring shows, local theatres Playhouse on the Square and Circuit Playhouse provided many opportunities to enjoy smaller scale productions. Nathan would eventually land his first professional role as John Darling in Playhouse on the Square's <em>Peter Pan</em> in 1993.</p>
                <p className="about-text">Nathan is a member of AEA and SAG-AFTRA.</p>
          </section>
        </>
    )
}

export default About