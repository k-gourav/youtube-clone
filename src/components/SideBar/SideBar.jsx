import { Link } from "react-router-dom";
import toggle from "../../assets/icons/hamburger.svg";
import home from "../../assets/icons/home.svg";
import shorts from "../../assets/icons/shorts.svg"
import subs from "../../assets/icons/subscription.svg"
import "./SideBar.css"
import "../../App.css"

const SideBar = () => {
    return (
        <div className="side-navbar">
            <div className="toggle-bar">
                <button className="toggle-btn"><img src={toggle} alt="toggle-button" /></button>
                <button className="logo-name">YouTube</button>
            </div>
            <div className="nav-links">
            <Link className="custom-link" to='/'><div><img src={home} alt="home-icon" /><span>Home</span></div></Link>
            <Link className="custom-link" to='/shorts'><div><img src={shorts} alt="shorts-icon" /><span>Shorts</span></div></Link>
            <Link className="custom-link" to='/subscription'><div><img src={subs} alt="subscription-icon" /><span>Subscriptions</span></div></Link>
            </div>
        </div>
    )
}

export default SideBar;