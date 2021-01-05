import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            place,
            date,
            tags,
            body,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    if (!projectData) return <div class="loader"></div>;

    return(
        <main>
            <section class="blogbody">

                <h1 className="text-5xl flex justify-center fonthead">Blog</h1>
                <br />
                <br />
                <section className="grid grid-cols-1 gap-8">

                {projectData && projectData.map((project, index) => (

                    <article className="shadow-xl backgroundcream p-12">

                    <img class="blogImg"
                        src={project.mainImage.asset.url}
                        alt="Blog"
                    />

                        <h3 className="fonthead text-3xl mb-2">
                            {project.title}
                        </h3>
                        <div className="fontbod text-xs space-x-4">
                            <span>
                                <strong className="fontbodbold">Posted</strong>:{" "}
                                {project.date}
                            </span>
                            <span>
                                <strong className="fontbodbold">Place</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                            <strong className="fontbodbold">Tags</strong>:{" "}
                                {project.tags.join(" ")}
                            </span>
                        </div>
                        <div className="fontbod space-x-4">
                            <span>
                            <p className="prose my-6 prose-xl fontbod leading-relaxed"></p>
                                <BlockContent 
                                blocks={project.body} 
                                projectId="ylbahs1m" 
                                dataset="production"
                            />
                            </span>
                        </div>
                
                    </article>

                ))}

                </section>
            </section>

            <footer class="blogfooter">
                        <h3>Keep updated with what I'm up to!</h3>
                            <div Class='Socials' className="inline-flex py-2 px-4 my-6">
                                <div Class='socialcolumn'>
                                    <a href="https://www.instagram.com/ashleyjamescreative/" className="mr-4" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/5fe1e49c1539418585831163_iconfinder_SocialMedia_Instagram-Outline_2959748%402x.png' alt="Link to my Instagram"/></a>
                                </div>
                                <div Class='socialcolumn'>
                                    <a href="https://www.pinterest.co.uk/ashleyjames_interiors/" className="mr-4" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/5fe1e49c9283e74cc8d1fa5d_iconfinder_SocialMedia_Pinterest-Outline_2959754%402x.png' alt="Link to my Pinterest"/></a>
                                </div>
                                <div Class='socialcolumn'>
                                    <a href="https://www.linkedin.com/in/ashley-powell-98000719a/" className="mr-4" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/5fe1e49ca32fa9587c4d906d_iconfinder_SocialMedia_LinkedIn-Outline_2959747%402x.png' alt="Link to my LinkedIn"/></a>
                                </div>
                            </div>
            </footer>

        </main>
    )}