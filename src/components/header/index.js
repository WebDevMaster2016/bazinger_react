import {Link} from "react-scroll";

import {useEffect, useCallback, useState, useRef, useLayoutEffect} from "react";
import {useDebouncedCallback} from "use-debounce";
import ImageLazy from "../common/image";
import config from "../../config";

const Header = () => {
    const links = ['home', 'features', 'gallery', 'video', 'contact'];

    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [scroll, setScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollingElement = e.target.scrollingElement;
            const isBottom = scrollingElement.scrollHeight - scrollingElement.scrollTop === scrollingElement.clientHeight;
            setIsBottom(isBottom);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useLayoutEffect(() => {
        setHeaderHeight(headerRef.current.offsetHeight)
    }, []);

    const NavItem = ({linkName, lastActiveClass, lastClassName}) => {
        return(
            <li className="nav__item">
                <Link activeClass={!lastActiveClass ? !isBottom ? "is-active" : " " : 'is-active'}
                      className={!lastClassName ? "nav__link" : isBottom ? "nav__link is-active" : "nav__link"}
                      to={linkName}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-headerHeight}
                      onClick={() => {
                          isOpen && setIsOpen(false);
                      }}
                >{linkName}</Link>
            </li>
        )
    }

    const windowResizeHandler = useDebouncedCallback(() => {
        setHeaderHeight(headerRef.current.clientHeight);

        if (document.body.classList.contains('disabled-scroll') && window.innerWidth >= config.minWidth) {
            setIsOpen(false);
        }
    }, 200);

    const windowScrollHandler = useCallback(() => {
        setScroll(window.scrollY >= 1)
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', windowScrollHandler);
        return () => {
            window.removeEventListener('scroll', windowScrollHandler);
        }
    }, [windowScrollHandler]);

    useEffect(() => {
        const bodyClassList = document.body.classList;
        if (isOpen) {
            bodyClassList.add('disabled-scroll');
        } else {
            bodyClassList.remove('disabled-scroll');
        }
    }, [isOpen]);

    useEffect(() => {
        window.addEventListener('resize', windowResizeHandler);
        return () => {
            window.removeEventListener('resize', windowResizeHandler);
        }
    }, [windowResizeHandler])

    return (
        <header ref={headerRef}
                className={scroll ? 'header is-scrolled' : 'header'}
        >
            <div className="wrapper header__wrapper">
                <a className="header__logo-link"
                   href="/"
                   aria-label="home page"
                >
                    <ImageLazy srcSet={`${config.imagesCommon__}logo@2x.png 2x`}
                               src={`${config.imagesCommon__}logo.png`}
                               width="137"
                               height="52"
                               alt="logo"
                               effect
                    />

                </a>
                <nav className={isOpen ? "nav header__nav is-opened" : "nav header__nav"}>
                    <ul className="nav__items">
                        {links.map((element, index, arr) =>
                            <NavItem lastActiveClass={index === arr.length-1}
                                     lastClassName={index === arr.length-1}
                                     key={index}
                                     linkName={element}
                            />
                        )}
                    </ul>
                </nav>
                <button className={`hamburger hamburger--spin header__hamburger${isOpen ? ' is-active' : ''}`}
                        type="button"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? config.translations.closeMenu : config.translations.openMenu}
                        onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="hamburger__box">
                        <span className="hamburger__inner"></span>
                    </span>
                </button>
            </div>
        </header>
    )
}

export default Header;