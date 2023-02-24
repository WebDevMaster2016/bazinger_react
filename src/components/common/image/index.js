import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageLazy = ({srcSet, src, width, height, alt, effect = false}) => {
    return(
        <LazyLoadImage srcSet={process.env.PUBLIC_URL + srcSet}
                       src={process.env.PUBLIC_URL + src}
                       width={width}
                       height={height}
                       alt={alt}
                       effect={effect ? "blur" : false}
        />
    )
}

export default ImageLazy;