/* eslint-disable react/no-unknown-property */
import { NavLink } from 'react-router-dom';
import Logo from "../assets/images/logo.svg";
import LinkButton from './LinkButton';

const Navbar = () => {
    // const location = useLocation();
    // const [navbarColor, setNavbarColor] = useState("transparent");

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY >= 50) {
    //             setNavbarColor("alternative-nav-color");
                
    //         } else {
    //             setNavbarColor("transparent");
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // });
    
    return (
        <>
        <nav className={`xui-navbar iyd-nav xui-container pd-nav xui-text-black`} brand="true" layout="2" menu="2">
            <div className="brand xui-h-fluid-100">
                <NavLink className="xui-text-dc-none xui-h-fluid-100 xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img className='xui-img-150' src={Logo} alt="" />
                    {/* <span className="xui-ml-half xui-d-inline-block xui-font-1 xui-font-w-bold">Kathy</span> */}
                </NavLink>
            </div>
            <div className="links" placed="center">
                <div className="main dark-color primary xui-bg-white">
                    <ul className='xui-grid-gap-2'>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 bold-font-2 begorah-text-blue' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold xui-text-black'} to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 bold-font-2 begorah-text-blue' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold xui-text-black'} to={"about"}>About us</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 bold-font-2 begorah-text-blue' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold xui-text-black'} to={"industries"}>Industries</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 bold-font-2 begorah-text-blue' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold xui-text-black'} to={"portfolio"}>Portfolio</NavLink>
                        </li>
                     
                    </ul>
                </div>
                <div className="fixed xui-lg-d-block xui-md-d-block xui-d-none">
                    <ul>
                        <li>
                            {/* <LinkButton text="Sign up" route="/" customClass="contact xui-bg-none xui-bdr-rad-3" customStyle={{"backgroundColor": "#FFF", "color": "#000"}} /> */}
                            <LinkButton text="Contact us" route="/#contact" isHash={true} customClass="contact xui-bdr-rad-3 xui-ml-1" />
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        </>
    )
};

export default Navbar;