import React from "react";
import { NavLink } from "react-router-dom";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function FooterBar() {
    return (
        <footer class="footer">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <div class="nav2">
                                <NavLink 
                                    to="/" 
                                    exact 
                                    className="inline-flex items-center py-2 px-4 mr-4 text-xl fontheadcream tracking-widest"
                                >
                                    ashleyjamescreative
                                </NavLink>

                        <div class="Socials" className="inline-flex py-2 px-4">
                            <ul class="socialcolumn" className="py-2 px-4">
                                    <h2 className="fontbodboldcream text-sm">NAVIGATION:</h2>
                                <li>
                                <NavLink to="/about"
                                    className="fontbodcream hover:text-white text-sm">
                                    ABOUT ME
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/project"
                                    className="fontbodcream hover:text-white text-sm">
                                    INTERIOR DESIGN
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/post"
                                    className="fontbodcream hover:text-white text-sm">
                                    BLOG
                                </NavLink>
                                </li>
                            </ul>

                            <ul class="socialcolumn" className="py-2 px-4">
                                <h2 className="fontbodboldcream text-sm">SOCIAL:</h2>
                                <li>
                                    <a className="fontbodcream hover:text-white text-sm" href="https://www.instagram.com/ashleyjamescreative/" target="_blank" rel="noreferrer noopener">
                                        INSTAGRAM
                                    </a>
                                </li>
                                <li>
                                    <a className="fontbodcream hover:text-white text-sm" href="https://www.instagram.com/ashleyjamescreative/" target="_blank" rel="noreferrer noopener">
                                        PINTEREST
                                    </a>
                                </li>
                                <li>
                                    <a className="fontbodcream hover:text-white text-sm" href="https://www.instagram.com/ashleyjamescreative/" target="_blank" rel="noreferrer noopener">
                                        LINKEDIN
                                    </a>
                                </li>
                            </ul>

                            <ul class="socialcolumn" className="py-2 px-4">
                                <h2 className="fontbodboldcream text-sm">CONTACT:</h2>
                            <li href="mailto: ashley.jamesinteriors@outlook.com" className="fontbodcream hover:text-white text-sm">
                                    <span role="img" aria-label="right pointer">
                                            ✉️
                                        </span>
                                        {" "} ashley.jamesinteriors@outlook.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
                <div className="container mx-auto flex justify-between">
                    <h2 className="inline-flex items-center py-3 px-4 mr-4 text-xs fontbodcream tracking-widest">
                        &#169; Ashley James Creative 2021 | Web design by me!
                    </h2>
                </div>
    </footer>
)}