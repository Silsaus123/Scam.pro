import * as React from "react"
import "./navbar.css"

import Settings from "./settings"
import DarkMode from "./darkmode"
import ShoppingCart from "./shoppingcart"
import Home from "./home"
import ShoppingCartPage from "./shoppingCartPage"
import MainPage from "../mainPage"


function NavBar({ isShoppingCartPage}) {
    return(
        <div className= "nav">
            <ul className="navLinks">
                <li><Settings/></li>
                <li><DarkMode/></li> 

                {!isShoppingCartPage && (
                    <li><ShoppingCart/></li> 
                )}

                {isShoppingCartPage && (
                    <li><Home/></li> 
                )}
            </ul>
        </div>
    )
}

export default NavBar
