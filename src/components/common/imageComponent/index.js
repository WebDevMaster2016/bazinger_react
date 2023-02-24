import {LazyLoadComponent} from 'react-lazy-load-image-component';

const ImageLazyComponent = ({srcSetWebp, srcSetWebp2x, srcSetPngJpg, srcSetPngJpg2x, className, srcSet, src, width, height, alt}) => {
    return (
        <LazyLoadComponent>
            <picture>
                <source type='image/webp'
                        srcSet={`${process.env.PUBLIC_URL}${srcSetWebp}, ${process.env.PUBLIC_URL}${srcSetWebp2x}`}
                ></source>
                <source type='image/png'
                        srcSet={`${process.env.PUBLIC_URL}${srcSetPngJpg}, ${process.env.PUBLIC_URL}${srcSetPngJpg2x}`}
                ></source>
                <img className={className}
                     srcSet={process.env.PUBLIC_URL + srcSet}
                     src={process.env.PUBLIC_URL + src}
                     width={width}
                     height={height}
                     alt={alt}
                ></img>
            </picture>
        </LazyLoadComponent>
    )
}

export default ImageLazyComponent;