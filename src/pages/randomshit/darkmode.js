import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import "./darkmode.css"



const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mode, setMode] = useState("Dark");

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
    setMode("Light")
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
    setMode("Dark")
  }
  
  const toggleTheme = e => {
    if (isDarkMode){
      setLightMode()
      setIsDarkMode(false)
    } else {
      setDarkMode()
      setIsDarkMode(true)
    }
  }

  return (
    <div className="darkMode">
      <button className="dark_mode_button" onClick={toggleTheme}>
        {isDarkMode ? <CiLight size={25}/> : <CiDark size={25}/>} 
      </button>
      <p>{mode}</p>
    </div>
  );
  
}

export default DarkMode