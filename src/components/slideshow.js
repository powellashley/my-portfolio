import react from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
    '{singlePost.slideImage1}',
    '{singlePost.slideImage2}',
    '{singlePost.slideImage3}',
];

const Slideshow = () => {

<div>
                    <side easing="ease">
                        <div class="each-slide">
                            <img src={singlePost.slideImage1.asset.url} alt={singlePost.caption1}/>
                            <div class="portfolioimgcaption">
                                <p>{singlePost.caption1}</p>
                            </div>
                        </div>
                        <div class="each-slide">
                            <img src={singlePost.slideImage2.asset.url} alt={singlePost.caption2}/>
                            <div class="portfolioimgcaption">
                                <p>{singlePost.caption2}</p>
                            </div>
                        </div>
                        <div class="each-slide">
                            <img src={singlePost.slideImage3.asset.url} alt={singlePost.caption3}/>
                            <div class="portfolioimgcaption">
                                <p>{singlePost.caption3}</p>
                            </div>
                        </div>
                    </side>
                </div>

}