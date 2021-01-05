import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { NavLink } from "react-router-dom";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export default function Home() {
    const [homeData, setHomeData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "home"]{
            hometxt,
            homepgImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setHomeData(data))
        .catch(console.error);
    }, []);

    return (
        <main class="body">
            <section>

                {homeData && homeData.map((home, index) => (

                <div>
                    <div class="homecontainer">
                        <img class="homepgimage"
                            src={home.homepgImage.asset.url}
                            alt="of me"
                        />
                        <div class="homepgtextbox">
                            <h1 class="homehead">
                                Welcome...
                            </h1>
                            <br />
                            <p class="homebod text-sm md:text-xl lg:text-2xl">
                            {home.hometxt}
                            </p>
                            <br />
                            <br />
                            <button>
                            <NavLink to="/post" class="button">
                            Portfolio
                            </NavLink>
                            </button>
                        </div>
                    </div>
                </div>

                ))}

            </section>
        </main>
    )
}