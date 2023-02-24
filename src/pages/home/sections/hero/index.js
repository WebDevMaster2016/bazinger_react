import { Navigation, Pagination, Keyboard, A11y } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

import ImageLazyComponent from "../../../../components/common/imageComponent";
import SVG from "react-inlinesvg";
import config from "../../../../config";
const Hero = () => {
    return(
        <section id='home' className='hero'>
            <ImageLazyComponent className="hero__bg-image"
                                srcSetWebp={`${config.imagesHome__}hero.webp`}
                                srcSetWebp2x={`${config.imagesHome__}hero@2x.webp 2x`}
                                srcSetPngJpg={`${config.imagesHome__}hero.png`}
                                srcSetPngJpg2x={`${config.imagesHome__}hero@2x.png 2x`}
                                srcSet={`${config.imagesHome__}hero@2x.png 2x`}
                                src={`${config.imagesHome__}hero.png`}
                                width='1480'
                                height='943'
                                alt="phone in hand against the backdrop of the city"
            />
            <div className='wrapper hero__wrapper'>
                <Swiper
                    className="hero__slider"
                    modules={[Navigation, Pagination, Keyboard, A11y]}
                    navigation={{
                        nextEl: '.js-hero-button-next',
                        prevEl: '.js-hero-button-prev',
                    }}
                    pagination={{
                        el: '.hero__pagination',
                        bulletClass: 'hero__pagination-bullet',
                        bulletActiveClass: 'is-active',
                        clickable: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    wrapperClass="swiper-wrapper hero__slider-wrapper"
                    centeredSlides={true}
                    slidesPerView="auto"
                    breakpoints={{
                        768: {
                            spaceBetween: 20
                        }
                    }}
                >
                    {[...Array(3)].map((element, idx) => {
                        return(
                            <SwiperSlide key={idx} className="hero__slider-item">
                                <h1 className='headline headline--lvl1 hero__headline'>Simple, Beautiful <strong className='bold'>and Amazing</strong></h1>
                                <p className='hero__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus ullamcorper. Nam porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.</p>
                                <div className='hero__action'>
                                    <a className='button button--white-border'
                                       href='#'
                                    >download</a>
                                    <a className='button button--blue'
                                       href='#'
                                    >learn more</a>
                                </div>
                                <div className='hero__available'>
                                    <p className='hero__available-text'>Available on:</p>
                                    <a className='hero__available-link'
                                       href='#'
                                       aria-label='ios'
                                    >
                                        <SVG className="icon hero__available-icon"
                                             src={`${process.env.PUBLIC_URL}${config.svgHome__}ios.svg`}
                                        />
                                    </a>
                                    <a className='hero__available-link'
                                       href='#'
                                       aria-label='android'
                                    >
                                        <SVG className="icon hero__available-icon"
                                             src={`${process.env.PUBLIC_URL}${config.svgHome__}android.svg`}
                                        />
                                    </a>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <div className='hero__pagination'></div>

                <div className='hero__slider-button-group'>
                    <button type='button'
                            className='js-hero-button-prev hero__slider-button hero__slider-button--left'
                            aria-label='button left'
                    >
                        <SVG className="icon hero__slider-arrow hero__slider-arrow--left"
                             src={`${process.env.PUBLIC_URL}${config.svgHome__}arrow-right.svg`}
                        />
                    </button>
                    <button type='button'
                            className='js-hero-button-next hero__slider-button hero__slider-button--right'
                            aria-label='button right'
                    >
                        <SVG className="icon hero__slider-arrow hero__slider-arrow--right"
                             src={`${process.env.PUBLIC_URL}${config.svgHome__}arrow-right.svg`}
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;