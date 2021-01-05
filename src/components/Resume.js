import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { NavLink } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Resume(){
    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "resume"]{
            location,
            contact,
            email,
            position,
            profile,
            skills,
            education,
            experience,
            cvImage1{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setResumeData(data))
        .catch(console.error);
    }, []);

    if (!resumeData) return <div class="loader"></div>;

    return(
        <main>
        
            <body class="CvBackground">

                {resumeData && resumeData.map((resume, index) => ( 


                    <section className="CvPage rounded-xl shadow-xl">
                        <header>
                                <div class="cvrow">
                                    <div className="cvside fontbodlight tracking-widest">
                                        <div className="text-4xl md:text-5xl lg:text-7xl mb-3">
                                            <h1>ASHLEY</h1>
                                            <h1>POWELL</h1>
                                        </div>
                                        <strong className="fontbodbold tracking-wide text-sm md:text-xl lg:text-2xl">{resume.position}</strong>
                                    </div>
                                    <div class="cvmainhead">
                                        <div className="fontbod opacity-50 text-sm md:text-xl lg:text-2xl">
                                            <h3>{resume.location}</h3>
                                            <h3>{resume.contact}</h3>
                                            <h3>{resume.email}</h3>
                                        </div>
                                        <br />
                                        <div Class='Socials' className="inline-flex">
                                            <div Class='socialcolumn'>
                                                <a href="https://www.instagram.com/ashleyjamescreative/" className="mr-4" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/5fe1e49c1539418585831163_iconfinder_SocialMedia_Instagram-Outline_2959748%402x.png'/></a>
                                            </div>
                                            <div Class='socialcolumn'>
                                                <a href="https://www.linkedin.com/in/ashley-powell-98000719a/" className="mr-4" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/5fe1e49ca32fa9587c4d906d_iconfinder_SocialMedia_LinkedIn-Outline_2959747%402x.png'/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </header>
                        <article> 
                                <div class="cvrow">
                                    <div className="cvside fontbodcream backgroundblue rounded-xl prose-sm md:prose-xl lg:prose-2xl">
                                        <div>
                                            <h3>PROFILE</h3>
                                            <BlockContent className="prose fontbodcream prose-xs md:prose-sm lg:prose-xl"
                                                blocks={resume.profile} 
                                                projectId="ylbahs1m" 
                                                dataset="production"
                                            />
                                        </div>
                                        <div>
                                            <h3>SKILLS</h3>
                                            <BlockContent className="prose fontbodcream prose-xs md:prose-sm lg:prose-xl"
                                                blocks={resume.skills} 
                                                projectId="ylbahs1m" 
                                                dataset="production"
                                            />
                                        </div>
                                        <div class="cvimagestack">
                                            <img src={resume.cvImage1.asset.url}/>
                                        </div>
                                    </div>
                                    <div className="cvmain prose prose-sm md:prose-xl lg:prose-2xl">
                                        <div>
                                            <h3 class="fontbodbold">EDUCATION</h3>
                                            <BlockContent className="prose fontbod prose-xs md:prose-sm lg:prose-xl"
                                                blocks={resume.education} 
                                                projectId="ylbahs1m" 
                                                dataset="production"
                                            />
                                        </div>
                                        <div>
                                            <h3 class="fontbodbold">EXPERIENCE</h3>
                                            <BlockContent className="prose fontbod prose-xs md:prose-sm lg:prose-xl"
                                                blocks={resume.experience} 
                                                projectId="ylbahs1m" 
                                                dataset="production"
                                            />
                                        </div>
                                    </div>
                                </div>
                        </article>

                    </section>

                ))}

            <div class="cvrow">
                <div class="cvside">
                    <NavLink 
                        to="/About"
                        className="fontbodbold">
                        <h2>Back to About Me</h2>
                    </NavLink>
                </div>
                <div class="cvmainhead">
                    <NavLink 
                        to="/Post"
                        className="fontbodbold">
                        <h2>View my Portfolio</h2>
                    </NavLink>
                </div>
            </div>

            </body>

        </main>
    )}