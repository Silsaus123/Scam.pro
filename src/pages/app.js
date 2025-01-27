import * as React from "react"
import "./app.css"

import Header from "./randomshit/header"
import NavBar from "./randomshit/navbar"
import tshirt from "./randomshit/tshirt"

function App() {
    return (
        <>
        <Header/>
        <h1 className="headingApp">Browse our fine selection of goods: </h1>
        <NavBar/>       
        </>
    )
}
export default App