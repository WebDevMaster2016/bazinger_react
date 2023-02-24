import ImageLazyComponent from "../../../../components/common/imageComponent";
import SVG from "react-inlinesvg";
import Glightbox from "glightbox/src/js/glightbox";

import config from "../../../../config";
const Video = () => {
    const lightbox = Glightbox({
        elements: [
            {
                href: 'https://www.youtube.com/watch?v=ux6zXguiqxM',
                type: 'video',
                source: 'youtube',
            },
        ],
        touchNavigation: true,
        keyboardNavigation: true,
        autoplayVideos: false,
    })

    return (
        <section id='video' className='video'>
            <ImageLazyComponent className="video__bg-image"
                                srcSetWebp={`${config.imagesHome__}video_bg.webp`}
                                srcSetWebp2x={`${config.imagesHome__}video_bg@2x.webp 2x`}
                                srcSetPngJpg={`${config.imagesHome__}video_bg.jpg`}
                                srcSetPngJpg2x={`${config.imagesHome__}video_bg@2x.jpg 2x`}
                                srcSet={`${config.imagesHome__}video_bg@2x.jpg 2x`}
                                src={`${config.imagesHome__}video_bg.jpg`}
                                width="1480"
                                height="1072"
                                alt="video background"
            />

            <div className='wrapper video__wrapper'>
                <button type='button'
                        className='video__play js-video-play'
                        aria-label='play button'
                        onClick={() => lightbox.open()}
                >
                    <SVG className="icon video__icon"
                         src={`${process.env.PUBLIC_URL}${config.svgHome__}play.svg`}
                    />
                </button>
                <h2 className='headline headline--lvl1 video__headline'>Watch the best Technology in <strong
                    className='bold'>Action</strong></h2>
                <p className='video__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae
                    tellus luctus ullamcorper. Nam porttitor ullamcorper felis at convallis. Aenean ornare vestibulum
                    nisi fringilla lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.</p>
            </div>
        </section>
    )
}

export default Video;