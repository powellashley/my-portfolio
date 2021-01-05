import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            tags,
            place,
            date,
            projectType,
            areaofFocus,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            bodyImage{
                asset->{
                    _id,
                    url
                }
            },
            bodyImagetext,
            body2,
            galleryImage1{
                asset->{
                    _id,
                    url
                }
            },
            caption1,
            galleryImage2{
                asset->{
                    _id,
                    url
                }
            },
            caption2,
            galleryImage3{
                asset->{
                    _id,
                    url
                }
            },
            caption3,
            galleryImage4{
                asset->{
                    _id,
                    url
                }
            },
            caption4,
            }`
        )
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div class="loader"></div>;

    return (
        <main class="portfoliobody">
            <article class="portfolioswankypad">
                
                <header className="relative">
                    <div class="row">
                        <div class="portfoliocolumn">
                            <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="w-full object-cover rounded-t"
                                style={{ height: "700px" }}
                            />
                        </div>
                        <div class="portfoliocolumn">
                            <h3 className="fonthead">{singlePost.tags.join(" ")}</h3>
                            <br />
                            <h1 className="fonthead text-4xl md:text-5xl lg:text-6xl mb-6">
                                    {singlePost.title}
                            </h1>
                            <h2 className="fonthead text-2xl">{singlePost.place}</h2>

                                <div className="space-x-4 mb-6">
                                    <span>
                                        <strong className="fontbodbold">Completed</strong>:{" "} {singlePost.date}
                                    </span>
                                    <span>
                                        <strong className="fontbodbold">Type</strong>:{" "} {singlePost.projectType}
                                    </span>
                                    <span>
                                        <strong className="fontbodbold mb-4">Area</strong>:{" "} {singlePost.areaofFocus}
                                    </span>
                                </div>

                            <p className="fontbod" className="prose lg:prose-xl md:prose-lg max-w-full">
                                <BlockContent 
                                blocks={singlePost.body} 
                                projectId="ylbahs1m" 
                                dataset="production"
                            />
                            </p>
                        </div>
                    </div>
                </header>

                <br />

                <body className="relative">
                    <div class="row">
                        <div class="portfoliocolumn2">
                            <img src={singlePost.bodyImage.asset.url} alt={singlePost.bodyImagetext} className="w-full object-cover rounded-t"/>
                            <br />
                            <div className="fontbod flex justify-center">
                                <p>{singlePost.bodyImagetext}</p>
                            </div>
                        </div>
                        <div class="portfoliocolumn2">
                            <p className="fontbod prose lg:prose-xl max-w-full">
                                <BlockContent 
                                    blocks={singlePost.body2} 
                                    projectId="ylbahs1m" 
                                    dataset="production"
                                />
                            </p>
                        </div>
                    </div>
                </body>

                <br />


                <h2 className="fonthead text-4xl flex justify-center">Gallery</h2>
                <br />

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">

                    <div class="gallery">
                        <img src={urlFor(singlePost.galleryImage1).url()} alt={singlePost.caption1} width="600" height="400"/>
                        <div class="desc">{singlePost.caption1}</div>
                    </div>

                    <div class="gallery" href="galleryImage2">
                        <img src={urlFor(singlePost.galleryImage2).url()} alt={singlePost.caption2} width="600" height="400"/>
                        <div class="desc">{singlePost.caption2}</div>
                    </div>

                    <div class="gallery" href="galleryImage3">
                            <img src={urlFor(singlePost.galleryImage3).url()} alt={singlePost.caption3} width="600" height="400"/>
                        <div class="desc">{singlePost.caption3}</div>
                    </div>

                    <div class="gallery" href="galleryImage4">
                            <img src={urlFor(singlePost.galleryImage4).url()} alt={singlePost.caption4} width="600" height="400"/>
                        <div class="desc">{singlePost.caption4}</div>
                    </div>

                </div>

                <br />

                    <NavLink 
                        to="/Post"
                        className="fontbodbold">
                        <h2>Back to Portfolio</h2>
                    </NavLink>

                <br />

            </article>

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
;}