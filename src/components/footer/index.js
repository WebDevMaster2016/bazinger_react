const Footer = () => {
    const links = ['Terms of Service', 'Privacy Policy'];
    const NavItem = ({linkName}) => {
        return(
            <li className="footer__nav-item">
                <a className="footer__nav-link"
                   href="#"
                >{linkName}</a>
            </li>
        )
    }

    return(
        <footer className="footer">
            <div className="wrapper footer__wrapper">
                <ul className="footer__nav">
                    {links.map((element, index) =>
                        <NavItem key={index}
                                 linkName={element}
                        />
                    )}
                </ul>
                <small className="footer__copyrights">Copyright &copy; {new Date().getFullYear()} | bazinger | All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer;