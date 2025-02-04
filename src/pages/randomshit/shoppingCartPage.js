import * as React from "react"
import "./shoppingCartPage.css"

import Header from "./header"
import NavBar from "./navbar"

function ShoppingCartPage () {
    return(
        <>
        <Header/>
        <h1>Shopping Cart</h1>
        <NavBar isShoppingCartPage={true}/>
        </>
    )
}

export default ShoppingCartPage