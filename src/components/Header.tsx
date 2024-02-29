import {NavLink, Link} from "react-router-dom";
import {useState} from "react";
import Headerlogo from '../assets/img/logo.png';
export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => { 
        setIsActive(!isActive);
    };
    return (
        <>
        <div className="header click_menu transparent">
        {/* <!-- =========================== HEADER ==========================--> */}
        <div className="mainbar">
            <div className="container-fluid">
            <div className="main_menu">
                <div className="logo"><Link className="brand" to='/'><img src={Headerlogo} alt="CursonLogo"/></Link></div>
                <div className="nav_and_tools nav_centered uppercase transparent">
                <nav className="primary_nav">
                    <ul className="nav">
                    <li><NavLink to="/About-us"className={({isActive}) => (isActive ? 'link active' : 'link')}>About Us</NavLink></li>
                    <li><NavLink to="/Pricing"className={({isActive}) => (isActive ? 'link active' : 'link')}>Pricing</NavLink></li>
                    <li><NavLink to="/Contact-us"className={({isActive}) => (isActive ? 'link active' : 'link')}>Contact Us</NavLink></li>
                    </ul>
                </nav>
                </div>
                <a className="menu-toggler"><span className="lines"></span></a>
            </div>
            </div>
        </div>
        {/* <!-- END======================== HEADER ==========================--> */}
        </div>
        </>
    )
}
