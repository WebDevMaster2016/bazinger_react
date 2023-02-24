import Glightbox from "glightbox/src/js/glightbox";
import SVG from "react-inlinesvg";
import ImageLazyComponent from "../../../../components/common/imageComponent";

import config from "../../../../config";

const Gallery = () => {
    const galleryData = [
        {
            headline: 'screen shot #1',
            caption: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
        },
        {
            headline: 'screen shot #2',
            caption: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
        },
        {
            headline: 'screen shot #3',
            caption: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
        },
        {
            headline: 'screen shot #4',
            caption: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
        }
    ]

    const Figure = ({item, index}) => {
        const lightbox = Glightbox({
            elements: [
                {
                    href: `${process.env.PUBLIC_URL}${config.imagesHome__}gallery1.jpg`,
                    'type': 'image',
                },
                {
                    href: `${process.env.PUBLIC_URL}${config.imagesHome__}gallery2.jpg`,
                    'type': 'image',
                },
                {
                    href: `${process.env.PUBLIC_URL}${config.imagesHome__}gallery3.jpg`,
                    'type': 'image',
                },
                {
                    href: `${process.env.PUBLIC_URL}${config.imagesHome__}gallery4.jpg`,
                    'type': 'image',
                },
            ],
            touchNavigation: true,
            keyboardNavigation: true,
        })

        return (
            <figure className='gallery__figure'>
                <div className='gallery__figure-icon'>
                    <ImageLazyComponent className="gallery__image"
                                        srcSetWebp={`${config.imagesHome__}gallery${index}.webp`}
                                        srcSetWebp2x={`${config.imagesHome__}gallery${index}@2x.webp 2x`}
                                        srcSetPngJpg={`${config.imagesHome__}gallery${index}.jpg`}
                                        srcSetPngJpg2x={`${config.imagesHome__}gallery${index}@2x.jpg 2x`}
                                        srcSet={`${config.imagesHome__}gallery${index}@2x.jpg 2x`}
                                        src={`${config.imagesHome__}gallery${index}.jpg`}
                                        width='1280'
                                        height='853'
                                        alt={`gallery${index}`}
                    />
                    <button className='gallery__figure-zoom'
                            onClick={() => lightbox.openAt(index - 1)}
                    >
                        <SVG className="icon gallery__icon-zoom"
                             src={`${process.env.PUBLIC_URL}${config.svgHome__}zoom-in.svg`}
                        />
                    </button>
                    <h3 className='headline headline--lvl3 gallery__caption-headline'>{item.headline}</h3>
                </div>
                <figcaption className='gallery__caption'>
                    <p className='gallery__caption-text'>{item.caption}</p>
                </figcaption>
            </figure>
        )
    }

    return (
        <section id='gallery'
                 className="gallery"
        >
            <div className='wrapper gallery__wrapper'>
                <h2 className='headline headline--lvl2 gallery__headline'>show the gallery</h2>
                <p className='gallery__text'>summarise what your product is all about</p>

                <div className='gallery__list'>
                    {galleryData.map((item, index, arr) => {
                        return (
                            <Figure key={Math.random()}
                                    item={item}
                                    index={index + 1}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Gallery;