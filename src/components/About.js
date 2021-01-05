import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { NavLink } from "react-router-dom";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function About() {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "about"]{
            aboutintro,
            aboutpara1,
            aboutpara2,
            aboutpara3,
            interesttitle1,
            interestbody1,
            interesttitle2,
            interestbody2,
            interesttitle3,
            interestbody3,
            aboutpgImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setAboutData(data))
        .catch(console.error);
    }, []);

    return (
        <main>
            <section class="body">

                {aboutData && aboutData.map((about, index) => (

                    <body>
                        <div class="aboutmecontainer">
                        <div class="aboutmeheader">
                            <h1>A bit about me...</h1>
                        </div>
                            <img 
                                class="aboutmepgImg" 
                                src={about.aboutpgImage.asset.url}
                                alt="of me"
                            />
                        <div class="aboutmefooter">
                            <h1>Hi there, I'm Ashley</h1>
                        </div>
                        </div>

                        <div class="aboutblbody">
                            {about.aboutintro}
                        </div>

                        <div class="aboutbody">
                            <h1 className="fonthead text-4xl">Background</h1>
                            <br />
                            <p className="fontbodbold">
                                {about.aboutpara1} 
                            </p>
                            <br />
                            <p>
                                {about.aboutpara2}
                            </p>
                            <br />
                            <p>
                                {about.aboutpara3}
                            </p>
                            <br />
                            <br />
                            <h1 className="fonthead text-4xl">Interests</h1>
                        </div>

                        <div class="row">
                            <div class="aboutcolumn">
                                <h1 className="fontheadcream text-3xl">{about.interesttitle1}</h1>
                                <br />
                                <p className="fontbodcream text-18px">{about.interestbody1}</p>
                                <br />
                            </div>
                            <div class="aboutcolumn">
                                <h1 className="fontheadcream text-3xl">{about.interesttitle2}</h1>
                                <br />
                                <p className="fontbodcream text-18px">{about.interestbody2}</p>
                                <br />
                            </div>
                            <div class="aboutcolumn">
                                <h1 className="fontheadcream text-3xl">{about.interesttitle3}</h1>
                                <br />
                                <p className="fontbodcream text-18px">{about.interestbody3}</p>
                                <br />
                            </div>
                        </div>

                        <div class="aboutbody">
                            <h1 className="fonthead text-4xl">One last thing...</h1>
                            <br />
                            <NavLink 
                                to="/Resume"
                                className="fontbodbold">
                                Click here to view my CV
                            </NavLink>
                        </div>
                    </body>

                ))}

            </section>

        </main>
    )
}