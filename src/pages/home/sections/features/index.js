import SVG from "react-inlinesvg";
import config from "../../../../config";

const Features = () => {
    const featuresData = [
        {
            headline: 'Attractive Layout',
            caption: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.',
            icon: 'layout',
        },
        {
            headline: 'Fresh Design',
            caption: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.',
            icon: 'design',
        },
        {
            headline: 'multipurpose',
            caption: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.',
            icon: 'multipurpose',
        },
        {
            headline: 'Easy to customize',
            caption: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.',
            icon: 'customize',
        }
    ];

    const Figure = ({item}) => {
        const {headline, caption, icon} = item;

        return (
            <figure className='features__figure'>
                <div className='features__figure-icon'>
                    <SVG className="icon features__icon"
                         src={`${process.env.PUBLIC_URL}${config.svgHome__}${icon}.svg`}
                    />
                </div>
                <figcaption className='features__caption'>
                    <h3 className='headline headline--lvl3 features__caption-headline'>{headline}</h3>
                    <p className='features__caption-text'>{caption}</p>
                </figcaption>
            </figure>
        )
    }

    return (
        <section id='features' className="features">
            <div className='wrapper features__wrapper'>
                <h2 className='headline headline--lvl2 features__headline'>summarise the features</h2>
                <p className='features__text'>summarise what your product is all about</p>

                <div className='features__list'>
                    {featuresData.map((item, index) => {
                        return(
                            <Figure key={index} item={item} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features;