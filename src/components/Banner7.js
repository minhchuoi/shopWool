import React from 'react'
import Slide from './Slide'

const Banner7 = () => {
    return (
        <div class="banner-7 bd-example">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <Slide
                        srcImg='./imgs/zz1.webp'
                        classSlide='carousel-item active'
                        header='Awesome'
                        title1='The Kendall Headband has kept my temples and head warm even in a strong wind and when it is wet from sweat. It washes well and dries quickly. It is a great product!'
                        title2='-Jack'
                        linkSlide='SHOP KENDALL HEADBAND'
                    ></Slide>
                    <Slide
                        srcImg='./imgs/banner-1.jpg'
                        classSlide='carousel-item'
                        header='Awesome'
                        title1='The Kendall Headband has kept my temples and head warm even in a strong wind and when it is wet from sweat. It washes well and dries quickly. It is a great product!'
                        title2='-Jack'
                        link-slide='SHOP KENDALL HEADBAND'
                    ></Slide>
                   
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Banner7;