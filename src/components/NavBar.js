import React from "react";
import { NavLink } from "react-router-dom";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function NavBar() {
    return (
        <header class='Navigation'>
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                <div class="nav2">
                    <NavLink 
                        to="/" 
                        exact 
                        className="inline-flex items-center py-2 px-3 mr-4 text-2xl fonthead tracking-widest"
                    >
                        ashleyjamescreative
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeClassName="fontbodbold"
                        className="inline-flex items-center py-2 px-3 my-6 fontbod hover:text-white"
                    >
                        ABOUT ME
                    </NavLink>
                    <NavLink 
                        to="/resume"
                        activeClassName="fontbodbold"
                        className="inline-flex items-center py-2 px-3 my-6 fontbod hover:text-white"
                    >
                        CV
                    </NavLink>
                    <NavLink 
                        to="/Post"
                        activeClassName="fontbodbold"
                        className="inline-flex items-center py-2 px-3 my-6 fontbod hover:text-white"
                    >
                        PORTFOLIO
                    </NavLink>
                    <NavLink 
                        to="/project"
                        activeClassName="fontbodbold"
                        className="inline-flex items-center py-2 px-3 my-6 fontbod hover:text-white"
                    >
                        BLOG
                    </NavLink>
                </div>

                </nav>
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
            </div>
        </header>
    )
}