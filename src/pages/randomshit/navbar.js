import * as React from "react"
import Settings from "./settings"
import DarkMode from "./darkmode"
import ShoppingCart from "./shoppingcart"
import "./navbar.css"



function NavBar() {
    return(
        <navbar className= "Nav">
            <ul className="navLinks">
                <li><Settings/></li> 
                <li><DarkMode/></li> 
                <li><ShoppingCart/></li> 
            </ul>
        </navbar>
    )
}

export default NavBar
