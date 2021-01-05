import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    if (!postData) return <div class="loader"></div>;

    return(
        <main>
            <section class="postbody">
                <h1 className="text-5xl flex justify-center fonthead">My Portfolio</h1>
                <br />
                <h2 className="text-lg flex justufy-center fodtbod mb-12 justify-center">Welcome to my portfolio...</h2>
                    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {postData && postData.map((post, index) => (

                            <article>
                                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                    <span className="block h-64 relative rounded shadow leading-snug bg-white border-4" 
                                    key={index}
                                    >
                                        <img 
                                            src={post.mainImage.asset.url}
                                            alt={post.mainImage.alt}
                                            className="w-full h-full rounder-r object-cover absolute"
                                        />
                                        <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                            <h3 className="fontbod text-lg font-bold px-3 py-4 bg-white bg-opacity-75">{post.title}</h3>
                                        </span>
                                    </span>
                                </Link>
                            </article>
                        ))}
                        
                    </div>
            </section>
        
            <footer class="blogfooter">
                        <h3>Keep updated with what I'm up to!</h3>
                            <div Class='Socials' className="inline-flex py-2 px-4 my-6">
                                <div Class='socialcolumn'>
                                    <a href="https://www.instagram.com/ashleyjamescreative/" className="mr-4" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/5fe1e49c1539418585831163_iconfinder_SocialMedia_Instagram-Outline_2959748%402x.png'/></a>
                                </div>
                                <div Class='socialcolumn'>
                                    <a href="https://www.pinterest.co.uk/ashleyjames_interiors/" className="mr-4" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/5fe1e49c9283e74cc8d1fa5d_iconfinder_SocialMedia_Pinterest-Outline_2959754%402x.png'/></a>
                                </div>
                                <div Class='socialcolumn'>
                                    <a href="https://www.linkedin.com/in/ashley-powell-98000719a/" className="mr-4" target="_blank" rel="noreferrer noopener"><img src='https://uploads-ssl.webflow.com/5eebd8c985e3ccd7ecc96f67/5fe1e49ca32fa9587c4d906d_iconfinder_SocialMedia_LinkedIn-Outline_2959747%402x.png'/></a>
                                </div>
                            </div>
            </footer>

        </main>
    )
}