import * as React from "react"
import "./home.css"
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    const onclickRoute = () => {
        navigate("/")
    }
    return (
    <div className="mainPage">
        <button className="mainPageButton">
            <CiHome size={25} onClick={onclickRoute}/>
        </button>
        <p>Home</p>
    </div>   
    )
}

export default Home