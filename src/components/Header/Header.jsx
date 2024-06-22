import search from "../../assets/icons/search.svg"
import user from "../../assets/icons/user.svg"
import notif from "../../assets/icons/notif.svg"
import "./Header.css"
const Header = () => {
    return(
        <div className="header-section">
        <div className="search-bar">
        <input type="text" name="search" placeholder="Search"/>
        <button><img src={search} alt="search-icon" /></button>
        </div>
        <div className="notif-profile">
            <button className="notif"><img src={notif} alt="notif-button" /></button>
            <button className="profile"><img src={user} alt="user-profile-image" /></button>
        </div>
        </div>
    )
}

export default Header;