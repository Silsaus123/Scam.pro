import * as React from "react"
import "./settings.css"
import { CiSettings } from "react-icons/ci";

function Settings() {
    return (
        <div className="shoppingCart">
            <button className="settingsButton"><CiSettings size={25}/></button>
            <p>Settings</p>
        </div>
    )
}

export default Settings