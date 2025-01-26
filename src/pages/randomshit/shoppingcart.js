import * as React from "react"
import "./shoppingcart.css"
import { CiShoppingCart } from "react-icons/ci";

function ShoppingCart() {
    return (
        <>
        <p className="shoppingcart">Shopping Cart <CiShoppingCart /> </p>
        </>
    )
}

export default ShoppingCart