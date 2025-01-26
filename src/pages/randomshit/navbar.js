import * as React from "react"
import Settings from "./settings"
import Darkmode from "./darkmode"
import ShoppingCart from "./shoppingcart"



function NavBar() {
    return(
        <navbar>
            <ul className="navLinks">
                <li>
                <Settings/>
                </li>
                <li>
                <Darkmode/>
                </li>
                <li>
                <ShoppingCart/>
                </li>
            </ul>
        </navbar>
    )
}

export default NavBar

