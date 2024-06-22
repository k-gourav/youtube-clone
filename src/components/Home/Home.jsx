import SideBar from "../SideBar/SideBar"
import VideoContainer from "../VideoContainer/VideoContainer"
import './Home.css'

const Home = () => {
    return (
    <div className="home-container">
        <SideBar />
        <VideoContainer />
    </div>
    )
}

export default Home;